// Get DOM elements
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const videoList = document.getElementById("videoList");

// Replace with your own YouTube Data API key
const API_KEY = "AIzaSyBq5Fx9xPvgSEqQHsxNK3HgFIGt6nxuduQ";

searchBtn.addEventListener("click", () => {
  const query = searchInput.value.trim();
  if (query !== "") {
    searchYouTube(query);
  }
});

function searchYouTube(query) {
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
    query
  )}&type=video&maxResults=10&key=${API_KEY}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      videoList.innerHTML = "";
      if (data.items) {
        data.items.forEach((item) => {
          const videoId = item.id.videoId;
          const iframe = document.createElement("iframe");
          iframe.src = `https://www.youtube.com/embed/${videoId}`;
          iframe.frameBorder = "0";
          iframe.allow =
            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
          iframe.allowFullscreen = true;

          const videoDiv = document.createElement("div");
          videoDiv.className = "video-item";
          videoDiv.appendChild(iframe);

          videoList.appendChild(videoDiv);
        });
      }
    })
    .catch((error) => {
      console.error("Error fetching YouTube videos:", error);
    });
}
