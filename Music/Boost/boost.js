// Your YouTube Channel ID and Video URL
const channelUrl = "https://www.youtube.com/UCAtXH1aHMwOFRmK--xe5zTg";
const videoUrl = "https://youtu.be/WfwsjeWsTWM?si=8oYhhR5PE1fX3Ai8";

// Function to display and play the video
function playVideo(videoId) {
  const iframe = document.createElement("iframe");
  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&origin=http://example.com`;
  iframe.width = "100%";
  iframe.height = "500px";
  iframe.frameBorder = "0";
  iframe.allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";

  const playerContainer = document.getElementById("video-player");
  playerContainer.innerHTML = ''; // Clear previous player
  playerContainer.appendChild(iframe); // Embed the new iframe

  // Hide the subscribe prompt and show the video
  document.getElementById("subscribePrompt").classList.add("hidden");
  document.getElementById("video-player").classList.remove("hidden");
}

// Event listener for subscribe button
document.getElementById('subscribeButton').addEventListener('click', function() {
  window.location.href = `${channelUrl}?sub_confirmation=1`; // Redirect to YouTube channel subscription page
});

// Function to share on social media
function shareOnSocial(platform) {
  const videoUrl = "https://youtu.be/WfwsjeWsTWM";
  const shareUrl = encodeURIComponent(videoUrl);

  if (platform === "facebook") {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, "_blank");
  } else if (platform === "twitter") {
    window.open(`https://twitter.com/intent/tweet?url=${shareUrl}`, "_blank");
  } else if (platform === "whatsapp") {
    window.open(`https://wa.me/?text=${shareUrl}`, "_blank");
  }
}


// When the page loads, show the subscribe prompt
window.onload = function() {
  const videoId = 'WfwsjeWsTWM'; // Extract the video ID from the video URL
};

