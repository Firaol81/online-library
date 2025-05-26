// Toggle Mobile Menu
function toggleMobileMenu() {
  const mobileMenu = document.querySelector(".mobile-menu");
  mobileMenu.classList.toggle("hidden");
}

// Show Movies Genres Dropdown
function showMovies() {
  const movieGenres = document.getElementById("movie-genres");
  movieGenres.classList.toggle("hidden");

  // Show the movie list when categories are clicked
  const movieList = document.getElementById("movie-list");
  movieList.classList.toggle("hidden");
}

// Show Songs Albums Dropdown
function showSongs() {
  const songAlbums = document.getElementById("song-albums");
  songAlbums.classList.toggle("hidden");

  // Show the song list when albums are clicked
  const songList = document.getElementById("song-list");
  songList.classList.toggle("hidden");
}
