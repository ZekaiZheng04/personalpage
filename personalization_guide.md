# Minimalist Literary-Tech Webpage: Customization & Modification Guide

This guide details how to personalize the colors, fonts, texts, images, layouts, and animations of your personal webpage. The codebase has been kept modular and thoroughly commented to make customization straightforward.

---

## 📁 File Structure Overview
- `index.html`: The minimal homepage featuring the typewriter-style poem.
- `profile.html`: The personal statement (with CV link), education timeline, and career timeline subpage.
- `gallery.html`: The photography album interface and lightbox viewer markup.
- `writing.html`: The list directory index of your literary works.
- `writing-detail.html`: The document reader shell that renders full articles.
- `movie.html`: Today's Movie recommendation page (Interstellar).
- `music.html`: Today's Music recommendation page (Kodaline's "Talk").
- `style.css`: The central style sheet governing colors, layout rules, grids, and cursor keyframes.
- `app.js`: The central scripting file driving the typewriter loops, lightbox navigation, and dynamic content injection.
- `assets/`: The image resource directory housing covers and photography.

---

## 🎨 1. Theme Colors & Styling
All colors are centralized as **CSS Variables** at the top of `style.css` inside the `:root` selector. Changing these values updates the theme sitewide.

```css
:root {
    /* --- COLOR PALETTE --- */
    --bg-primary: #fbf9f3;        /* Main page: Warm cream / parchment tone */
    --bg-secondary: #fefefb;      /* Cards & widgets: Clean soft ivory paper */
    --text-primary: #2d2824;      /* High-contrast text: Deep warm sepia-charcoal */
    --text-secondary: #5a534c;    /* Subheadings: Medium sepia-charcoal */
    --text-muted: #8e8478;        /* Captions & small details: Soft ink tone */
    --accent: #a23b24;            /* Primary brand/highlight: Deep classic crimson ink */
    --accent-light: #f5eae6;      /* Active selection tint: Muted rose-cream */
    --accent-secondary: #4a5d4e;  /* Secondary badge/folders: Moss green / book cloth green */
    --border: #e8e1d5;            /* Standard hair-thin partition lines */
}
```

### Color Customization Examples:
- **Switch to a Classic Sepia Theme**:
  ```css
  --bg-primary: #f4edd8;
  --bg-secondary: #faf6eb;
  --text-primary: #433422;
  --accent: #b57614;
  ```
- **Switch to a Dark Ink Theme**:
  ```css
  --bg-primary: #1c1a19;
  --bg-secondary: #242221;
  --text-primary: #ebdbb2;
  --text-secondary: #bdae93;
  --border: #3c3836;
  --accent: #d65d0e;
  ```

---

## ✍️ 2. Typography & Fonts
We import three Google Fonts at the top of `style.css`:
1. `EB Garamond`: Classic book-serif font for literary blocks, stanzas, and body content.
2. `JetBrains Mono`: Tech/monospace font for navigation links, tags, and status logs.
3. `Plus Jakarta Sans`: Modern geometric sans-serif (retained for clean layouts).

To swap fonts, change the `@import` URL and update the font stack variables:
```css
--font-serif: 'EB Garamond', serif;
--font-mono: 'JetBrains Mono', monospace;
```

---

## 📝 3. Texts & Literary Content

### A. Homepage Poem Stanza
The 3 lines on the homepage are animated dynamically in `app.js`. To replace the poem, update the strings inside the `poemLines` array:
```javascript
// Open app.js and edit this array to change the homepage typed text:
const poemLines = [
    "Your Custom Line 1 Here,",
    "Your Custom Line 2 Here;",
    "Your Custom Line 3 Here."
];
```

### B. Literary Works Index Directory (Automated)
The list page (`writing.html`) and database are fully automated! You do **not** need to edit `writing.html` or `app.js` manually to add new articles.

**How to add a new article/poem:**
1. Save your work as a Microsoft Word Document (`.docx`) inside the `writing/` folder.
2. Name the file using the format: `[Title]_[YYYYMMDD].docx` (e.g. `坏掉的水龙头_20260521.docx`).
3. Run the automated script from the root folder:
   ```bash
   python3 rename_and_import.py
   ```
4. The script will automatically:
   - Extract plain text content from the `.docx` file using macOS utilities.
   - Parse the title and completion date from the filename (e.g., converting `20260521` to `2026.05.21`).
   - Classify the work as `Poetry` or `Essay` based on its average line length.
   - Format the body content into appropriate HTML structures:
     - **Poetry**: Formatted inside a stylish center-left italic container with `<br>` line breaks and `<br><br>` stanza spacing.
     - **Essay**: Formatted with standard `<p>` paragraphs.
   - Extract the first paragraph or first 3 lines as the excerpt.
   - Update `writingDatabase` in `app.js`.
   - Populated the list inside `writing.html` dynamically on runtime, sorted newest-first.

---

## 📷 4. Photography Gallery & Images (Automated)
The gallery directory (`gallery.html`) and photo database are fully automated! You do **not** need to edit `gallery.html` or `app.js` manually to add new photography albums.

**How to add or update sub-albums:**
1. Open the `assets/` folder.
2. **Create a new folder** representing the sub-album. The folder's name will be used directly as the sub-album title (e.g. `assets/Germany`).
3. Place your image files (JPEG, PNG, HEIC/HEIC) inside this folder.
4. **Designate a cover photo (Optional)**: If you want to use a specific photo as the cover, simply rename that file to `cover` (e.g. `cover.jpg`, `cover.png`, or `cover.heic`). The script will automatically detect it and set it as the album cover.
5. Run the automated script from the root folder:
   ```bash
   python3 rename_and_import.py
   ```
6. The script will automatically:
   - Convert any HEIC/HEIC files to standard browser-compatible `.jpg` images.
   - Set the designated `cover` file as the cover image in `app.js` and keep it inside the album's photo list. If no `cover` file is found, it will fallback to selecting a random photo as the cover.
   - Rename all remaining images sequentially to `<FolderName>_<index>.<extension>` (e.g. `Germany_1.jpg`) to prevent collisions and facilitate checking.
   - Re-write `albumPhotosDatabase` in `app.js`.
   - Populate `gallery.html` grid dynamically on runtime.

---

## ⚡ 5. Typing Speeds & Cursor Animations

### A. Adjust Typewriter Speeds
In `app.js`, adjust the timers driving the typewriter loop:
```javascript
const poemTypingSpeed = 105;   // Milliseconds per character. Increase to type slower; decrease to type faster.
const stanzaLineDelay = 1200;  // Pause duration (in ms) after completing a line before starting the next.
```

### B. Customize Blinking Typewriter Cursor
The cursor style, width, and blink animation are located in `style.css`:
```css
.cursor {
    display: inline-block;
    width: 8px;                    /* Width of the block cursor */
    background-color: var(--accent); /* Cursor color matches active crimson */
    animation: blink 1s step-end infinite; /* Controls cursor blink rhythm */
}

/* Adjust keyframes to change blinking behavior */
@keyframes blink {
    from, to { background-color: transparent; }
    50% { background-color: var(--accent); }
}
```

---

## 🏛️ 6. Modifying Page Structure (Logo & Layouts)

### A. Changing the Brand/Name Logo
The logo is represented by the text `<a href="index.html" class="logo" id="logo">Z</a>` at the top of all HTML pages. Replace the letter `Z` with your own initial, name, or symbol:
```html
<a href="index.html" class="logo" id="logo">MyName</a>
```

### B. Adjusting dot-grid density
To increase or decrease the spacing of the parchment dot grid, modify the variable `--grid-size` in `style.css`:
```css
--grid-size: 30px; /* Larger grid dots */
```
To adjust the dot diameter, change `1.2px` inside:
```css
body::before {
    background-image: radial-gradient(#e9e3d7 1.2px, transparent 1.2px);
}
```

---

## 🎬 7. Customizing Movie Recommendations
The movie recommendation page is built statically in `movie.html`.

- **To update the Movie Poster**: Save the poster image in the `assets/` directory and link it inside `movie.html`:
  ```html
  <img src="assets/your_new_poster.png" alt="Poster" class="movie-poster">
  ```
- **To update Movie Details**: Open `movie.html` and modify the text within:
  - `<h2 class="movie-title">`: Change the name of the film.
  - `<div class="movie-meta">`: Edit the year, running time, and genres.
  - `<p class="movie-synopsis">`: Edit the plot description.
  - `.movie-details-list`: Edit Director, Writers, Cast, and Rating values.
- **To update the IMDb Link**: Find the IMDb button tag and replace the `href` attribute:
  ```html
  <a href="https://www.imdb.com/title/your_new_id/" target="_blank" ... class="imdb-btn">
  ```

---

## 🎵 8. Customizing Music Recommendations
The music recommendation page is built statically in `music.html`.

- **To update the Album Art Cover**: Save the art cover inside the `assets/` directory and update the path in `music.html`:
  ```html
  <img src="assets/your_new_album.png" alt="Album Cover Art" class="album-cover-art">
  ```
- **To update Song and Artist Details**: Modify the contents inside:
  - `<h2 class="song-title">`: Edit the song title.
  - `<div class="song-artist">`: Edit the artist or band.
  - `<div class="music-meta">`: Edit Album Title, Release Year, and Genres.
- **To edit Lyrics Excerpts**: Modify the lines within the `<div class="lyrics-excerpt">` block. Use `<br>` tags to trigger line breaks.
- **To update the Spotify Link**: Find the Spotify button link and replace the `href` attribute:
  ```html
  <a href="https://open.spotify.com/track/your_new_track_id" target="_blank" ... class="spotify-btn">
  ```

---

## 📄 9. Modifying Curriculum Vitae (CV) Link
The CV PDF file is linked under the **Self-Statement** section in `profile.html`.

- **To update the CV file**: Name your new resume file as `cv.pdf` and drop it directly into the project's root folder, replacing the existing `cv.pdf`.
- **To point to a different filename or path**: Edit the `href` attribute on the CV link inside `profile.html`:
  ```html
  <a href="your_new_cv_filename.pdf" target="_blank" ...>
      View Curriculum Vitae (PDF)
  </a>
  ```

---

## 🌐 10. Deploying and Uploading to GitHub (Bypassing File Upload Limits)

When you drag and drop folders directly onto the GitHub website, GitHub enforces a strict limit of **100 files per upload session**. If you have a large photography gallery, you will easily hit this limit.

To upload **unlimited** photos and writings at **100% original quality and resolution**, you should use either the **Git Command-Line tool (Git CLI)** or **GitHub Desktop**.

### Method A: Using the Command Line (Git CLI)

This is the standard and most reliable method to upload any amount of files to GitHub.

1. **Open your Terminal** (on Mac, open the Terminal app).
2. Navigate to your project folder (change path to where your folder is located):
   ```bash
   cd /Users/matthew/personal/Personal_Page-main
   ```
3. **Initialize Git** (only do this the first time):
   ```bash
   git init
   git branch -M main
   git remote add origin https://github.com/your-username/your-repo-name.git
   ```
4. **Commit and upload your changes** (run these three commands whenever you add new photos or writings):
   ```bash
   git add .
   git commit -m "Upload new photos and writings"
   git push -u origin main
   ```
   *Note: Git CLI has no limit on the number of files and will push all high-resolution images in a single session.*

---

### Method B: Using GitHub Desktop (Graphical Application)

If you prefer a visual interface rather than typing commands, you can use the official GitHub Desktop app:

1. **Download and Install**: Download [GitHub Desktop](https://desktop.github.com/) and sign in with your GitHub account.
2. **Add Your Repository**:
   - Open GitHub Desktop.
   - Go to `File` -> `Add Local Repository...`.
   - Select your project folder: `/Users/matthew/personal/Personal_Page-main`.
   - If it warns that the folder is not a Git repository, click **"create a repository"** to initialize it.
3. **Commit Your Changes**:
   - In the left sidebar, you will see a list of all your newly added/modified images and files (with no count limits).
   - In the bottom-left corner, write a summary (e.g. "Add new photos") and click the blue **"Commit to main"** button.
4. **Publish / Push**:
   - Click the **"Publish repository"** or **"Push origin"** button at the top of the window.
   - This will sync all your high-resolution images to GitHub instantly.

