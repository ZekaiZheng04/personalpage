/* ==========================================================================
   APP CONFIGURATIONS & PERSONALIZATION
   ========================================================================== 
   PERSONALIZATION TIPS:
   1. To change the poem lines typed on the hero section, edit the 'poemLines' array.
   2. To change typewriter speed, edit 'poemTypingSpeed' (ms per char) or 'stanzaLineDelay'.
   3. To edit article texts, modify the 'writingDatabase' dictionary.
   4. To configure photos, update the 'albumPhotosDatabase' structures.
*/

// --- HERO POEM LINES (First Stanza only) ---
const poemLines = [
    "Do not go gentle into that good night,",
    "Old age should burn and rave at close of day;",
    "Rage, rage against the dying of the light."
];

// --- SLOW TYPEWRITER SPEED SETTINGS ---
const poemTypingSpeed = 105;   // Milliseconds per character (lower = faster)
const stanzaLineDelay = 1200;  // Delay (ms) before starting the next line

// --- PHOTOGRAPHY DATABASE ---
// Contains photo sets for each album (uses the generated assets in rotation for demo)
const albumPhotosDatabase = {
    "Australia": {
        "title": "Australia",
        "cover": "assets/Australia/cover.jpg",
        "photos": [
            "assets/Australia/cover.jpg",
            "assets/Australia/Australia_1.jpg",
            "assets/Australia/Australia_2.jpg",
            "assets/Australia/Australia_3.jpg",
            "assets/Australia/Australia_4.jpg",
            "assets/Australia/Australia_5.jpg",
            "assets/Australia/Australia_6.jpg",
            "assets/Australia/Australia_7.jpg",
            "assets/Australia/Australia_8.jpg",
            "assets/Australia/Australia_9.jpg",
            "assets/Australia/Australia_10.jpg",
            "assets/Australia/Australia_11.jpg",
            "assets/Australia/Australia_12.jpg",
            "assets/Australia/Australia_13.jpg",
            "assets/Australia/Australia_14.jpg",
            "assets/Australia/Australia_15.jpg",
            "assets/Australia/Australia_16.jpg",
            "assets/Australia/Australia_17.jpg",
            "assets/Australia/Australia_18.jpg",
            "assets/Australia/Australia_19.jpg",
            "assets/Australia/Australia_20.jpg",
            "assets/Australia/Australia_21.jpg",
            "assets/Australia/Australia_22.jpg",
            "assets/Australia/Australia_23.jpg",
            "assets/Australia/Australia_24.jpg",
            "assets/Australia/Australia_25.jpg",
            "assets/Australia/Australia_26.jpg",
            "assets/Australia/Australia_27.jpg",
            "assets/Australia/Australia_28.jpg",
            "assets/Australia/Australia_29.jpg",
            "assets/Australia/Australia_30.jpg"
        ]
    },
    "Germany": {
        "title": "Germany",
        "cover": "assets/Germany/cover.jpg",
        "photos": [
            "assets/Germany/cover.jpg",
            "assets/Germany/Germany_1.jpg",
            "assets/Germany/Germany_2.jpg",
            "assets/Germany/Germany_3.jpg",
            "assets/Germany/Germany_4.jpg",
            "assets/Germany/Germany_5.jpg",
            "assets/Germany/Germany_6.jpg",
            "assets/Germany/Germany_7.jpg",
            "assets/Germany/Germany_8.jpg",
            "assets/Germany/Germany_9.jpg",
            "assets/Germany/Germany_10.jpg",
            "assets/Germany/Germany_11.jpg",
            "assets/Germany/Germany_12.jpg",
            "assets/Germany/Germany_13.jpg"
        ]
    },
    "Hangzhou": {
        "title": "Hangzhou",
        "cover": "assets/Hangzhou/cover.jpg",
        "photos": [
            "assets/Hangzhou/cover.jpg",
            "assets/Hangzhou/Hangzhou_1.jpg",
            "assets/Hangzhou/Hangzhou_2.jpg",
            "assets/Hangzhou/Hangzhou_3.jpg",
            "assets/Hangzhou/Hangzhou_4.jpg",
            "assets/Hangzhou/Hangzhou_5.jpg",
            "assets/Hangzhou/Hangzhou_6.jpg",
            "assets/Hangzhou/Hangzhou_7.jpg",
            "assets/Hangzhou/Hangzhou_8.jpg",
            "assets/Hangzhou/Hangzhou_9.jpg",
            "assets/Hangzhou/Hangzhou_10.jpg"
        ]
    },
    "Rome": {
        "title": "Rome",
        "cover": "assets/Rome/cover.jpg",
        "photos": [
            "assets/Rome/cover.jpg",
            "assets/Rome/Rome_1.jpg",
            "assets/Rome/Rome_2.jpg",
            "assets/Rome/Rome_3.jpg",
            "assets/Rome/Rome_4.jpg",
            "assets/Rome/Rome_5.jpg",
            "assets/Rome/Rome_6.jpg",
            "assets/Rome/Rome_7.jpg",
            "assets/Rome/Rome_8.jpg",
            "assets/Rome/Rome_9.jpg",
            "assets/Rome/Rome_10.jpg",
            "assets/Rome/Rome_11.jpg",
            "assets/Rome/Rome_12.jpg",
            "assets/Rome/Rome_13.jpg",
            "assets/Rome/Rome_14.jpg",
            "assets/Rome/Rome_15.jpg",
            "assets/Rome/Rome_16.jpg",
            "assets/Rome/Rome_17.jpg",
            "assets/Rome/Rome_18.jpg",
            "assets/Rome/Rome_19.jpg",
            "assets/Rome/Rome_20.jpg",
            "assets/Rome/Rome_21.jpg",
            "assets/Rome/Rome_22.jpg",
            "assets/Rome/Rome_23.jpg",
            "assets/Rome/Rome_24.jpg",
            "assets/Rome/Rome_25.jpg",
            "assets/Rome/Rome_26.jpg",
            "assets/Rome/Rome_27.jpg"
        ]
    },
    "Singapore": {
        "title": "Singapore",
        "cover": "assets/Singapore/cover.jpg",
        "photos": [
            "assets/Singapore/cover.jpg",
            "assets/Singapore/Singapore_1.jpg",
            "assets/Singapore/Singapore_2.jpg",
            "assets/Singapore/Singapore_3.jpg",
            "assets/Singapore/Singapore_4.jpg",
            "assets/Singapore/Singapore_5.jpg",
            "assets/Singapore/Singapore_6.jpg",
            "assets/Singapore/Singapore_7.jpg",
            "assets/Singapore/Singapore_8.jpg",
            "assets/Singapore/Singapore_9.jpg",
            "assets/Singapore/Singapore_10.jpg",
            "assets/Singapore/Singapore_11.jpg",
            "assets/Singapore/Singapore_12.jpg",
            "assets/Singapore/Singapore_13.jpg",
            "assets/Singapore/Singapore_14.jpg",
            "assets/Singapore/Singapore_15.jpg",
            "assets/Singapore/Singapore_16.jpg",
            "assets/Singapore/Singapore_17.jpg",
            "assets/Singapore/Singapore_18.jpg",
            "assets/Singapore/Singapore_19.jpg",
            "assets/Singapore/Singapore_20.jpg",
            "assets/Singapore/Singapore_21.jpg",
            "assets/Singapore/Singapore_22.jpg",
            "assets/Singapore/Singapore_23.jpg",
            "assets/Singapore/Singapore_24.jpg",
            "assets/Singapore/Singapore_25.jpg",
            "assets/Singapore/Singapore_26.jpg",
            "assets/Singapore/Singapore_27.jpg",
            "assets/Singapore/Singapore_28.jpg"
        ]
    },
    "Switzerland": {
        "title": "Switzerland",
        "cover": "assets/Switzerland/cover.jpg",
        "photos": [
            "assets/Switzerland/cover.jpg",
            "assets/Switzerland/Switzerland_1.jpg",
            "assets/Switzerland/Switzerland_2.jpg",
            "assets/Switzerland/Switzerland_3.jpg",
            "assets/Switzerland/Switzerland_4.jpg",
            "assets/Switzerland/Switzerland_5.jpg",
            "assets/Switzerland/Switzerland_6.jpg",
            "assets/Switzerland/Switzerland_7.jpg",
            "assets/Switzerland/Switzerland_8.jpg",
            "assets/Switzerland/Switzerland_9.jpg",
            "assets/Switzerland/Switzerland_10.jpg",
            "assets/Switzerland/Switzerland_11.jpg",
            "assets/Switzerland/Switzerland_12.jpg",
            "assets/Switzerland/Switzerland_13.jpg",
            "assets/Switzerland/Switzerland_14.jpg",
            "assets/Switzerland/Switzerland_15.jpg",
            "assets/Switzerland/Switzerland_16.jpg"
        ]
    },
    "USA": {
        "title": "USA",
        "cover": "assets/USA/cover.jpg",
        "photos": [
            "assets/USA/cover.jpg",
            "assets/USA/USA_1.jpg",
            "assets/USA/USA_2.jpg",
            "assets/USA/USA_3.jpg",
            "assets/USA/USA_4.jpg",
            "assets/USA/USA_5.jpg",
            "assets/USA/USA_6.jpg",
            "assets/USA/USA_7.jpg",
            "assets/USA/USA_8.jpg",
            "assets/USA/USA_9.jpg",
            "assets/USA/USA_10.jpg",
            "assets/USA/USA_11.jpg",
            "assets/USA/USA_12.jpg",
            "assets/USA/USA_13.jpg",
            "assets/USA/USA_14.jpg",
            "assets/USA/USA_15.jpg",
            "assets/USA/USA_16.jpg",
            "assets/USA/USA_17.jpg",
            "assets/USA/USA_18.jpg",
            "assets/USA/USA_19.jpg",
            "assets/USA/USA_20.jpg",
            "assets/USA/USA_21.jpg",
            "assets/USA/USA_22.jpg",
            "assets/USA/USA_23.jpg",
            "assets/USA/USA_24.jpg",
            "assets/USA/USA_25.jpg",
            "assets/USA/USA_26.jpg",
            "assets/USA/USA_27.jpg",
            "assets/USA/USA_28.jpg",
            "assets/USA/USA_29.jpg",
            "assets/USA/USA_30.jpg",
            "assets/USA/USA_31.jpg",
            "assets/USA/USA_32.jpg",
            "assets/USA/USA_33.jpg",
            "assets/USA/USA_34.jpg",
            "assets/USA/USA_35.jpg",
            "assets/USA/USA_36.jpg",
            "assets/USA/USA_37.jpg",
            "assets/USA/USA_38.jpg",
            "assets/USA/USA_39.jpg",
            "assets/USA/USA_40.jpg",
            "assets/USA/USA_41.jpg",
            "assets/USA/USA_42.jpg",
            "assets/USA/USA_43.jpg",
            "assets/USA/USA_44.jpg",
            "assets/USA/USA_45.jpg",
            "assets/USA/USA_46.jpg",
            "assets/USA/USA_47.jpg",
            "assets/USA/USA_48.jpg"
        ]
    },
    "Vienna": {
        "title": "Vienna",
        "cover": "assets/Vienna/cover.jpg",
        "photos": [
            "assets/Vienna/cover.jpg",
            "assets/Vienna/Vienna_1.jpg",
            "assets/Vienna/Vienna_2.jpg",
            "assets/Vienna/Vienna_3.jpg",
            "assets/Vienna/Vienna_4.jpg",
            "assets/Vienna/Vienna_5.jpg",
            "assets/Vienna/Vienna_6.jpg",
            "assets/Vienna/Vienna_7.jpg",
            "assets/Vienna/Vienna_8.jpg",
            "assets/Vienna/Vienna_9.jpg",
            "assets/Vienna/Vienna_10.jpg",
            "assets/Vienna/Vienna_11.jpg",
            "assets/Vienna/Vienna_12.jpg",
            "assets/Vienna/Vienna_13.jpg",
            "assets/Vienna/Vienna_14.jpg",
            "assets/Vienna/Vienna_15.jpg"
        ]
    }
};

// --- LITERARY WORKS DATABASE ---
// Serves text to writing-detail.html based on URL parameters
const writingDatabase = {
    "在世界尽头长眠": {
        "title": "在世界尽头长眠",
        "date": "2026.04.30",
        "category": "Poetry",
        "excerpt": "如果睡着了， / 那就不要醒来。 / 在一望无际的海边，...",
        "content": "<div style=\"line-height: 2; margin-top: 1.5rem; text-align: left; max-width: 400px; margin-left: 2rem;\">\n    如果睡着了，<br>那就不要醒来。<br>在一望无际的海边，<br>睡到空无一人的尽头。<br><br>在无人的时间尽头，<br>海水倒映我的过去。<br>我以为此生将如此逝去，<br>直到回忆的海面泛起涟漪。<br><br>涟漪变成海浪，<br>在沙滩上轰鸣、消失。<br>正如回忆里那些相遇，<br>短暂而热烈。<br><br>我听着海水涛涛，<br>平和地闭上双眼。<br>在这万物尽头，<br>我不再是孤独一人。\n</div>"
    },
    "坏掉的水龙头": {
        "title": "坏掉的水龙头",
        "date": "2026.05.21",
        "category": "Poetry",
        "excerpt": "像一只坏掉的水龙头， / 轻轻一拧就如瀑布般倾泻， / 直到流干了自己的心。...",
        "content": "<div style=\"line-height: 2; margin-top: 1.5rem; text-align: left; max-width: 400px; margin-left: 2rem;\">\n    像一只坏掉的水龙头，<br>轻轻一拧就如瀑布般倾泻，<br>直到流干了自己的心。<br><br>干涸的心犹如搁浅的鱼，<br>窒息、无助、绝望，<br>于是拿石子封住管口。<br><br>但停滞的血是死的，<br>就像看着她哭红的眼角，<br>却只能无语凝噎。<br>想给她一个拥抱，<br>身体却悄悄远离。<br><br>像一只坏掉的水龙头，<br>在沉默中呻吟。<br>等待水压将一切冲垮，<br>等待心脏在牢笼中凋零。\n</div>"
    }
};

// ==========================================================================
// CORE EXECUTION ROUTINE
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    initPoemTypewriter();       // Homepage Typewriter
    initGalleryManager();       // Gallery Sub-album & Lightbox controls
    initWriterReader();         // Literary Document dynamic loading
    initWritingList();          // Dynamic Writing List renderer
    initHeaderScroll();         // Global header collapse
    initLatencySimulator();     // Page colophon latency meter
});

// ==========================================================================
// FEATURE FUNCTIONS
// ==========================================================================

// --- POEM TYPEWRITER ANIMATION (HOMEPAGE) ---
// Types the poem line-by-line. The blinking cursor remains active at the end of the last line.
function initPoemTypewriter() {
    const container = document.getElementById('poem-body-text');
    if (!container) return; // Exit if not on homepage

    let lineIndex = 0;
    let charIndex = 0;

    function startLine() {
        if (lineIndex >= poemLines.length) {
            // Typing sequence completed: Leave the blinking cursor active at the end of the final line
            const lastLine = container.lastElementChild;
            if (lastLine) {
                lastLine.innerHTML = poemLines[poemLines.length - 1] + '<span class="cursor"></span>';
            }
            return;
        }

        const currentLineText = poemLines[lineIndex];
        
        // Append a new line div
        const lineDiv = document.createElement('div');
        lineDiv.className = 'poem-line';
        container.appendChild(lineDiv);

        function typeChar() {
            if (charIndex < currentLineText.length) {
                // Show characters typed plus the active blinking cursor
                lineDiv.innerHTML = currentLineText.substring(0, charIndex + 1) + '<span class="cursor"></span>';
                charIndex++;
                setTimeout(typeChar, poemTypingSpeed);
            } else {
                // Remove cursor from completed line *unless* it is the final line of the stanza
                if (lineIndex < poemLines.length - 1) {
                    lineDiv.innerHTML = currentLineText;
                }
                
                // Move to the next line
                lineIndex++;
                charIndex = 0;
                
                // Wait before typing the next line
                setTimeout(startLine, stanzaLineDelay);
            }
        }

        typeChar();
    }

    // Delay start slightly to let page transition complete
    setTimeout(startLine, 800);
}

// --- PHOTOGRAPHY GALLERY & LIGHTBOX MANAGER ---
function initGalleryManager() {
    const directoryView = document.getElementById('album-directory-view');
    const photosView = document.getElementById('album-photos-view');
    const photoGrid = document.getElementById('album-photo-grid');
    const pageTitle = document.getElementById('gallery-page-title');
    const backToAlbumsBtn = document.getElementById('btn-back-to-albums');
    
    // Lightbox elements
    const lightbox = document.getElementById('lightbox-overlay');
    const lightboxImg = document.getElementById('lightbox-active-img');
    const lightboxPrev = document.getElementById('lightbox-prev-btn');
    const lightboxNext = document.getElementById('lightbox-next-btn');
    const lightboxClose = document.getElementById('lightbox-close-btn');

    if (!directoryView || !photosView || !photoGrid) return; // Exit if not on gallery page

    let currentAlbumKey = '';
    let activePhotoIndex = 0;

    // Dynamically render album cards into gallery-grid
    const galleryGrid = directoryView.querySelector('.gallery-grid');
    if (galleryGrid) {
        galleryGrid.innerHTML = '';
        Object.keys(albumPhotosDatabase).forEach(albumKey => {
            const albumData = albumPhotosDatabase[albumKey];
            const coverSrc = albumData.cover || (albumData.photos.length > 0 ? albumData.photos[0] : '');
            
            const cardDiv = document.createElement('div');
            cardDiv.className = 'album-card';
            cardDiv.setAttribute('data-album', albumKey);
            cardDiv.id = `album-card-${albumKey}`;
            cardDiv.innerHTML = `
                <div class="album-cover-wrapper">
                    <img src="${coverSrc}" alt="${albumData.title}" class="album-cover">
                </div>
                <div class="album-title-bar">
                    <h3 class="album-title-text">${albumData.title}</h3>
                </div>
            `;
            
            cardDiv.addEventListener('click', () => {
                openAlbum(albumKey);
            });
            
            galleryGrid.appendChild(cardDiv);
        });
    }

    // Open an album
    function openAlbum(albumKey) {
        currentAlbumKey = albumKey;
        const albumData = albumPhotosDatabase[albumKey];
        if (!albumData) return;

        // Update Title & Header controls
        pageTitle.textContent = `/GALLERY / ${albumData.title.toUpperCase()}`;
        backToAlbumsBtn.style.display = 'inline-flex';

        // Clear grid and populate images
        photoGrid.innerHTML = '';
        albumData.photos.forEach((src, index) => {
            const photoDiv = document.createElement('div');
            photoDiv.className = 'photo-item';
            photoDiv.innerHTML = `<img src="${src}" alt="Photo ${index + 1}">`;
            
            // Photo click -> Open Lightbox
            photoDiv.addEventListener('click', () => {
                openLightbox(index);
            });
            
            photoGrid.appendChild(photoDiv);
        });

        // Toggle page views
        directoryView.style.display = 'none';
        photosView.style.display = 'block';
    }

    // Close album, return to directory
    function closeAlbum() {
        directoryView.style.display = 'block';
        photosView.style.display = 'none';
        backToAlbumsBtn.style.display = 'none';
        pageTitle.textContent = '/GALLERY';
        currentAlbumKey = '';
    }

    // Lightbox Controls
    function openLightbox(index) {
        const albumData = albumPhotosDatabase[currentAlbumKey];
        if (!albumData) return;

        activePhotoIndex = index;
        lightboxImg.src = albumData.photos[activePhotoIndex];
        lightbox.style.display = 'flex';
    }

    // Close lightbox
    function closeLightbox() {
        lightbox.style.display = 'none';
        lightboxImg.src = '';
    }

    function showNextPhoto(e) {
        if (e) e.stopPropagation();
        const albumData = albumPhotosDatabase[currentAlbumKey];
        if (!albumData) return;

        activePhotoIndex = (activePhotoIndex + 1) % albumData.photos.length;
        lightboxImg.src = albumData.photos[activePhotoIndex];
    }

    function showPrevPhoto(e) {
        if (e) e.stopPropagation();
        const albumData = albumPhotosDatabase[currentAlbumKey];
        if (!albumData) return;

        activePhotoIndex = (activePhotoIndex - 1 + albumData.photos.length) % albumData.photos.length;
        lightboxImg.src = albumData.photos[activePhotoIndex];
    }

    // Back to Directory Action
    backToAlbumsBtn.addEventListener('click', closeAlbum);

    // Lightbox Event Listeners
    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxNext) lightboxNext.addEventListener('click', showNextPhoto);
    if (lightboxPrev) lightboxPrev.addEventListener('click', showPrevPhoto);

    // Close on overlay clicking
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }

    // Keyboard controls for Lightbox
    window.addEventListener('keydown', (e) => {
        if (lightbox.style.display === 'flex') {
            if (e.key === 'ArrowRight') showNextPhoto();
            if (e.key === 'ArrowLeft') showPrevPhoto();
            if (e.key === 'Escape') closeLightbox();
        }
    });
}

// --- WRITER READING ROOM MANAGER ---
// Reads URLs of style `writing-detail.html?id=silent-shore` and loads content dynamically.
function initWriterReader() {
    const titleEl = document.getElementById('reader-title-el');
    const bodyEl = document.getElementById('reader-body-el');
    const metaEl = document.getElementById('reader-meta-el');
    const catEl = document.getElementById('reader-cat-el');
    const dateEl = document.getElementById('reader-date-el');

    if (!titleEl || !bodyEl) return; // Exit if not on detail reader page

    // Fetch document ID from URL query parameters
    const params = new URLSearchParams(window.location.search);
    const docId = params.get('id');

    if (docId && writingDatabase[docId]) {
        const doc = writingDatabase[docId];
        
        // Populate DOM elements
        titleEl.textContent = doc.title;
        bodyEl.innerHTML = doc.content;
        catEl.textContent = doc.category;
        dateEl.textContent = doc.date;
        
        // Show metadata block
        metaEl.style.display = 'flex';
        document.title = `${doc.title} | Reading Room`;
    } else {
        // Document not found state
        titleEl.textContent = "Document Not Found";
        bodyEl.innerHTML = `
            <p class="no-indent" style="color: var(--accent); font-family: var(--font-mono); font-size: 1rem; margin-top: 2rem;">
                Error: 404_FILE_NOT_FOUND.
            </p>
            <p class="no-indent" style="margin-top: 1rem;">
                The requested literary archive does not exist or has been moved. Use the back link above to return to the directory listing.
            </p>
        `;
        metaEl.style.display = 'none';
    }
}

// --- DYNAMIC WRITING LIST RENDERER ---
function initWritingList() {
    const listContainer = document.querySelector('.writing-list');
    if (!listContainer) return; // Exit if not on writing index page

    listContainer.innerHTML = '';
    
    // Sort writing keys descending by date (newest first)
    const sortedKeys = Object.keys(writingDatabase).sort((a, b) => {
        const dateA = writingDatabase[a].date.replace(/\./g, '-');
        const dateB = writingDatabase[b].date.replace(/\./g, '-');
        return dateB.localeCompare(dateA);
    });

    sortedKeys.forEach(docId => {
        const doc = writingDatabase[docId];
        const itemDiv = document.createElement('div');
        itemDiv.className = 'writing-item';
        itemDiv.innerHTML = `
            <div class="writing-meta">
                <span class="writing-category">${doc.category}</span>
                <span class="writing-date">${doc.date}</span>
            </div>
            <h2>
                <a href="writing-detail.html?id=${encodeURIComponent(docId)}" class="writing-title-link">${doc.title}</a>
            </h2>
            <p class="writing-excerpt">${doc.excerpt || ''}</p>
        `;
        listContainer.appendChild(itemDiv);
    });
}

// --- COMPACT HEADER ON SCROLL ---
function initHeaderScroll() {
    const header = document.getElementById('header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// --- LATENCY MONITOR SIMULATOR ---
function initLatencySimulator() {
    const latencyEl = document.getElementById('page-latency');
    if (!latencyEl) return;

    function updateLatency() {
        const latency = Math.floor(Math.random() * 15) + 5; // Generate 5ms - 20ms
        latencyEl.textContent = `RTT: ${latency}ms`;
    }

    updateLatency();
    setInterval(updateLatency, 9000);
}

// --- MOBILE DRAWER NAVIGATION MENU ---
// Toggles active state classes on mobile layout instead of mutating inline styles directly.
const mobileToggle = document.getElementById('mobile-toggle');
const navLinks = document.getElementById('nav-links');

if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                mobileToggle.classList.remove('active');
            }
        });
    });
    
    // Reset active states if window is resized past mobile layout threshold
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active');
            mobileToggle.classList.remove('active');
        }
    });
}
