#!/usr/bin/env python3
import os
import sys
import subprocess
import random
import re
import json
import uuid

def convert_heic_to_jpg(file_path):
    """Converts HEIC file to JPG using macOS sips utility and deletes original file."""
    base, _ = os.path.splitext(file_path)
    output_path = base + ".jpg"
    print(f"Converting {file_path} to {output_path}...")
    try:
        # Run sips command
        result = subprocess.run(
            ["sips", "-s", "format", "jpeg", "-s", "formatOptions", "100", file_path, "--out", output_path],
            check=True,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE
        )
        if os.path.exists(output_path):
            os.remove(file_path)
            print(f"Successfully converted and deleted original: {file_path}")
            return output_path
    except Exception as e:
        print(f"Failed to convert {file_path}: {e}", file=sys.stderr)
    return file_path

def process_gallery(assets_dir):
    """Processes all images in the gallery subfolders."""
    subfolders = [f for f in os.listdir(assets_dir) if os.path.isdir(os.path.join(assets_dir, f))]
    subfolders.sort()
    
    album_photos_database = {}
    
    for folder in subfolders:
        folder_path = os.path.join(assets_dir, folder)
        print(f"\nProcessing album folder: {folder}")
        
        # 1. Find all files in the directory
        all_files = [f for f in os.listdir(folder_path) if os.path.isfile(os.path.join(folder_path, f))]
        
        # 2. Check if a manual cover is designated (filename is "cover" without extension)
        manual_cover_file = None
        for file in all_files:
            name_no_ext, _ = os.path.splitext(file.lower())
            if name_no_ext == "cover":
                manual_cover_file = file
                break
        
        # 3. Convert any HEIC files to JPG first
        converted_files = []
        for file in all_files:
            file_path = os.path.join(folder_path, file)
            _, ext = os.path.splitext(file.lower())
            if ext in ['.heic']:
                new_path = convert_heic_to_jpg(file_path)
                new_filename = os.path.basename(new_path)
                converted_files.append(new_filename)
                # Keep track of manual cover if it got converted
                if file == manual_cover_file:
                    manual_cover_file = new_filename
            else:
                converted_files.append(file)
                
        # 4. Filter only supported image extensions
        image_extensions = ['.jpg', '.jpeg', '.png', '.gif']
        image_files = []
        for file in converted_files:
            _, ext = os.path.splitext(file.lower())
            if ext in image_extensions:
                image_files.append(file)
                
        if not image_files:
            print(f"Warning: No images found in {folder_path}. Skipping.")
            continue
            
        # Sort files to ensure stable ordering
        image_files.sort()
        
        # 5. Rename all files to a temporary unique name to avoid collisions
        temp_mappings = []
        temp_manual_cover_path = None
        for idx, file in enumerate(image_files):
            old_path = os.path.join(folder_path, file)
            _, ext = os.path.splitext(file.lower())
            # Standardize extension to lowercase .jpg or .png
            if ext in ['.jpeg', '.jpg']:
                clean_ext = '.jpg'
            else:
                clean_ext = ext.lower()
                
            temp_name = f"_temp_{uuid.uuid4().hex}_{idx}{clean_ext}"
            temp_path = os.path.join(folder_path, temp_name)
            os.rename(old_path, temp_path)
            
            if file == manual_cover_file:
                temp_manual_cover_path = temp_path
            else:
                temp_mappings.append((temp_path, clean_ext))
            
        # 6. Rename from temporary names to final sequentially numbered names
        final_relative_paths = []
        cover_image = None
        
        # If there is a manual cover, rename it to "cover.jpg" (or "cover.png")
        if temp_manual_cover_path:
            _, clean_ext = os.path.splitext(temp_manual_cover_path)
            cover_name = f"cover{clean_ext}"
            cover_path = os.path.join(folder_path, cover_name)
            os.rename(temp_manual_cover_path, cover_path)
            cover_relative = f"assets/{folder}/{cover_name}"
            final_relative_paths.append(cover_relative)
            cover_image = cover_relative
            print(f"Designated manual cover found and renamed to: {cover_relative}")
            
        # Rename remaining photos sequentially
        for idx, (temp_path, clean_ext) in enumerate(temp_mappings):
            final_name = f"{folder}_{idx + 1}{clean_ext}"
            final_path = os.path.join(folder_path, final_name)
            os.rename(temp_path, final_path)
            
            # Save relative path for gallery
            relative_path = f"assets/{folder}/{final_name}"
            final_relative_paths.append(relative_path)
            print(f"Renamed to: {relative_path}")
            
        # 7. Select a random cover image if no manual cover was designated
        if not cover_image:
            cover_image = random.choice(final_relative_paths)
            print(f"No manual cover found. Selected random cover image: {cover_image}")
        
        # 8. Add to database structure
        album_photos_database[folder] = {
            "title": folder,
            "cover": cover_image,
            "photos": final_relative_paths
        }
        
    return album_photos_database

def process_writings(writing_dir):
    """Processes all docx files in the writing folder."""
    if not os.path.isdir(writing_dir):
        print(f"Warning: {writing_dir} directory not found. Skipping writing import.")
        return {}
        
    docx_files = [f for f in os.listdir(writing_dir) if f.lower().endswith('.docx')]
    docx_files.sort()
    
    writing_database = {}
    
    for filename in docx_files:
        file_path = os.path.join(writing_dir, filename)
        print(f"\nProcessing writing file: {filename}")
        
        # Parse title and date from filename
        name, _ = os.path.splitext(filename)
        parts = name.rsplit('_', 1)
        if len(parts) == 2 and parts[1].isdigit() and len(parts[1]) == 8:
            title = parts[0]
            date_raw = parts[1]
            formatted_date = f"{date_raw[:4]}.{date_raw[4:6]}.{date_raw[6:8]}"
        else:
            title = name
            formatted_date = "2026.06.08" # Default fallback
            
        # Extract text using textutil
        try:
            result = subprocess.run(
                ["textutil", "-convert", "txt", file_path, "-stdout"],
                check=True,
                stdout=subprocess.PIPE,
                stderr=subprocess.PIPE
            )
            text_content = result.stdout.decode('utf-8', errors='replace')
        except Exception as e:
            print(f"Failed to extract text from {file_path}: {e}", file=sys.stderr)
            continue
            
        # Clean text
        raw_lines = [line.strip() for line in text_content.splitlines()]
        # Remove leading and trailing empty lines
        while raw_lines and not raw_lines[0]:
            raw_lines.pop(0)
        while raw_lines and not raw_lines[-1]:
            raw_lines.pop()
            
        if not raw_lines:
            print(f"Warning: Empty content in {filename}. Skipping.")
            continue
            
        # Classify as Poetry or Essay based on average line length of non-empty lines
        non_empty_lines = [l for l in raw_lines if l]
        avg_line_len = sum(len(l) for l in non_empty_lines) / len(non_empty_lines) if non_empty_lines else 0
        print(f"Average line length: {avg_line_len:.1f} characters")
        
        is_poetry = avg_line_len < 40
        category = "Poetry" if is_poetry else "Essay"
        print(f"Classified as: {category}")
        
        # Generate excerpt (first 3 non-empty lines for poem, first paragraph for essay)
        if is_poetry:
            excerpt_lines = []
            for l in raw_lines:
                if l:
                    excerpt_lines.append(l)
                if len(excerpt_lines) == 3:
                    break
            excerpt = " / ".join(excerpt_lines) + "..."
        else:
            # First paragraph
            # We reconstruct text content to split by double newlines reliably
            cleaned_text = "\n".join(raw_lines)
            paragraphs = cleaned_text.split('\n\n')
            paragraphs = [p.strip() for p in paragraphs if p.strip()]
            excerpt = paragraphs[0][:150] + "..." if paragraphs else ""
            
        # Format HTML content
        cleaned_text = "\n".join(raw_lines)
        if is_poetry:
            # Group by paragraphs (stanzas)
            paragraphs = cleaned_text.split('\n\n')
            formatted_stanzas = []
            for p in paragraphs:
                lines = [l.strip() for l in p.splitlines() if l.strip()]
                if lines:
                    formatted_stanzas.append("<br>".join(lines))
            
            inner_html = "<br><br>".join(formatted_stanzas)
            html_content = (
                f'<div style="line-height: 2; margin-top: 1.5rem; '
                f'text-align: left; max-width: 400px; margin-left: 2rem;">\n'
                f'    {inner_html}\n'
                f'</div>'
            )
        else:
            paragraphs = cleaned_text.split('\n\n')
            formatted_paragraphs = []
            for p in paragraphs:
                # Replace internal single newlines with spaces for prose paragraphs
                p_text = p.strip().replace('\n', ' ')
                if p_text:
                    formatted_paragraphs.append(f'<p>{p_text}</p>')
            html_content = "\n".join(formatted_paragraphs)
            
        # Add to database
        writing_database[title] = {
            "title": title,
            "date": formatted_date,
            "category": category,
            "excerpt": excerpt,
            "content": html_content
        }
        
    return writing_database

def main():
    assets_dir = "assets"
    writing_dir = "writing"
    app_js_path = "app.js"
    
    if not os.path.exists(app_js_path):
        print(f"Error: {app_js_path} not found. Please run this script from the project root.", file=sys.stderr)
        sys.exit(1)
        
    # 1. Process Gallery Assets
    album_photos_database = {}
    if os.path.isdir(assets_dir):
        album_photos_database = process_gallery(assets_dir)
    else:
        print(f"Warning: {assets_dir} directory not found.")
        
    # 2. Process Writing Assets
    writing_database = {}
    if os.path.isdir(writing_dir):
        writing_database = process_writings(writing_dir)
    else:
        print(f"Warning: {writing_dir} directory not found.")
        
    # 3. Read app.js
    with open(app_js_path, "r", encoding="utf-8") as f:
        content = f.read()
        
    # 4. Replace albumPhotosDatabase in app.js
    if album_photos_database:
        db_gallery_str = "const albumPhotosDatabase = " + json.dumps(album_photos_database, indent=4) + ";"
        pattern_gallery = r"const albumPhotosDatabase\s*=\s*\{[\s\S]*?\n\};"
        match = re.search(pattern_gallery, content)
        if match:
            start, end = match.span()
            content = content[:start] + db_gallery_str + content[end:]
            print("Successfully updated gallery database.")
        else:
            print("Warning: Could not find 'const albumPhotosDatabase' in app.js.", file=sys.stderr)
            
    # 5. Replace writingDatabase in app.js
    if writing_database:
        db_writing_str = "const writingDatabase = " + json.dumps(writing_database, indent=4, ensure_ascii=False) + ";"
        pattern_writing = r"const writingDatabase\s*=\s*\{[\s\S]*?\n\};"
        match = re.search(pattern_writing, content)
        if match:
            start, end = match.span()
            content = content[:start] + db_writing_str + content[end:]
            print("Successfully updated writing database.")
        else:
            print("Warning: Could not find 'const writingDatabase' in app.js.", file=sys.stderr)
            
    # 6. Save app.js
    with open(app_js_path, "w", encoding="utf-8") as f:
        f.write(content)
        
    print("\nSuccessfully updated app.js with the new assets configuration!")

if __name__ == "__main__":
    main()
