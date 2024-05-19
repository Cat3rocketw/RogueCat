document.addEventListener('DOMContentLoaded', () => {
    const mediaContainer = document.getElementById('media-container');

    // Function to get media files from the current directory
    async function getMediaFiles() {
        try {
            const response = await fetch('./');
            const html = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const mediaFiles = [];

            // Collect video files
            const videoLinks = doc.querySelectorAll('a[href$=".mp4"]');
            videoLinks.forEach(link => {
                mediaFiles.push({ name: link.getAttribute('href'), type: 'video' });
            });

            // Collect image files
            const imageLinks = doc.querySelectorAll('a[href$=".png"], a[href$=".jpg"], a[href$=".jpeg"]');
            imageLinks.forEach(link => {
                mediaFiles.push({ name: link.getAttribute('href'), type: 'image' });
            });

            return mediaFiles;
        } catch (error) {
            console.error('Error fetching media files:', error);
            return [];
        }
    }

    // Function to embed all media files
    async function embedMediaFiles() {
        try {
            const files = await getMediaFiles();

            files.forEach(file => {
                const mediaElement = document.createElement(file.type);
                mediaElement.classList.add('media');
                mediaElement.src = file.name;
                if (file.type === 'video') {
                    mediaElement.controls = true;
                } else if (file.type === 'image') {
                    mediaElement.alt = file.name;
                }
                mediaContainer.appendChild(mediaElement);
            });
        } catch (error) {
            console.error('Error embedding media files:', error);
        }
    }

    // Embed all media files
    embedMediaFiles();
});
