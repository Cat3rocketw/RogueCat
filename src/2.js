document.addEventListener('DOMContentLoaded', () => {
    // Array of YouTube videos with embed URLs
    const links = [
        { name: 'How to Make a Website', url: 'https://www.youtube.com/embed/m3F9ttCM8PA' },
        { name: 'How to Make a Website', url: './videos/getvid.mp4' },
    ];

    // Reference to the video container div
    const videoContainer = document.getElementById('video-container');

    // Function to embed all videos
    function embedVideos(videoLinks) {
        videoLinks.forEach(link => {
            const iframe = document.createElement('iframe');
            
            iframe.src = link.url;
            iframe.classList.add('videos');
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
            iframe.allowFullscreen = true;
            videoContainer.appendChild(iframe);
        });
    }

    // Embed all videos
    embedVideos(links);
});
