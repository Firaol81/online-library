let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");


let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");
let wave = document.getElementById("wave");
let randomIcon = document.querySelector(".fa-random");
let curr_track = document.createElement("audio");

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

const music_list = [
  {
    img: "assets/images/Solomon.jpg",
    name: "ACHI",
    artist: "Solomon Alamu",
    music: "assets/music/Solomon_Alemu.mp3",
  },
  {
    img: "assets/images/Hirpha.jpg",
    name: "GAB NARRAA GOOTE",
    artist: "HIRPHA BAHIRU",
    music: "assets/music/HIRPHA_BAHIRU .mp3",
  },
  {
    img: "assets/images/Firaol.jpg",
    name: "YAA WANGELLA",
    artist: "Firaol Nebi",
    music: "assets/music/Firaol.mp3",
  },
  {
    img: "assets/images/DINQISIISAA.jpg",
    name: "WAAQNI BIRAAN HIN JIRU",
    artist: "DINQISIISAA TAMESGEEN",
    music: "assets/music/DINQISIISAA TAMESGEEN.mp3",
  },
  {
    img: "assets/images/NIFTALEM.jpg",
    name: "GADHIISI HIN TA'U",
    artist: "NIFTALEM",
    music: "assets/music/Niftalem.mp3",
  },
];

loadTrack(track_index);

function loadTrack(track_index) {
  clearInterval(updateTimer);
  reset();

  curr_track.src = music_list[track_index].music;
  curr_track.load();

  track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
  track_name.textContent = music_list[track_index].name;
  track_artist.textContent = music_list[track_index].artist;

  now_playing.textContent =
    "Playing music" + (track_index + 1) + " of " + music_list.length;
  updateTimer = setInterval(setUpdate, 1000);
  curr_track.addEventListener("ended", nextTrack);
}

function reset() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}
 
   // Function to toggle random track mode
   
  //For rondom pick when white color  go by order when red go rondom play the song
				function randomTrack() {
				  isRandom ? pauseRandom() : playRandom();
				}

					// Enable random mode (Red color)
					function playRandom() {
					  isRandom = true; // Set random mode to true
					  randomIcon.classList.add("randomActive"); // Add 'active' class for red color
					  randomIcon.style.color = "red";  // Red color for random mode
				    }

						// Disable random mode (White color for order)
						function pauseRandom() {
						  isRandom = false; // Set random mode to false
						  randomIcon.classList.remove("randomActive"); // Remove 'active' class
						  randomIcon.style.color = "white"; // White color for order mode
						}

							// Ensure nextTrack and prevTrack consider random mode
							function nextTrack() {
							  if (isRandom) {
								let random_index = Math.floor(Math.random() * music_list.length);
								track_index = random_index; // Pick a random song
							 } else {
									if (track_index < music_list.length - 1) {
									  track_index += 1; // Go to the next song in order
									} else {
									  track_index = 0; // Loop back to the first song
									}
							        }
									  loadTrack(track_index);
									  playTrack();
									}

										function prevTrack() {
										  if (isRandom) {
											let random_index = Math.floor(Math.random() * music_list.length);
											track_index = random_index; // Pick a random song
										  } else {
											if (track_index > 0) {
											  track_index -= 1; // Go to the previous song in order
											} else {
											  track_index = music_list.length - 1; // Loop back to the last song
											}
									        }
										  loadTrack(track_index);
										  playTrack();
										}
										// Rondom song pick 
				 
 
 
		 
        //Repat song white continue, blue repate the same song
	    //faarfanichii irraa dedebiee akka itti fufu gargara
		   
	let isRepeat = false; // Variable to track repeat status

		// Function to toggle repeat mode
	function repeatTrack() {
		  isRepeat = !isRepeat; // Toggle repeat mode
		  const repeatIcon = document.querySelector(".repeat-track i");
		  repeatIcon.style.color = isRepeat ? "blue" : "white"; // Blue for repeat mode, white for normal

				  // Add or remove event listener for repeat functionality
				  if (isRepeat) {
					curr_track.addEventListener("ended", repeatSong); // Repeat song when track ends
				  } else {
					curr_track.removeEventListener("ended", repeatSong); // Remove event listener when not repeating
				  }
	}

     // Function to repeat the current song
							function repeatSong() {
							  curr_track.currentTime = 0; // Reset to the beginning of the song
							  curr_track.play(); // Play the song again
							}

								// Play and pause functionality // Dhabsisuuf itti fufu 
								function playpauseTrack() {
							    isPlaying ? pauseTrack() : playTrack();
																	}
									//Play the song 
									function playTrack() {
									  curr_track.play();
									  isPlaying = true;
									  track_art.classList.add("rotate");
									  wave.classList.add("loader");
									  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
									}

										function pauseTrack() {
										  curr_track.pause();
										  isPlaying = false;
										  track_art.classList.remove("rotate");
										  wave.classList.remove("loader");
										  playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
										}

											// Next and previous track functionality with random mode
											function nextTrack() {
											  if (isRandom) {
												let random_index = Math.floor(Math.random() * music_list.length);
												track_index = random_index; // Pick a random song
											  } else {
												if (track_index < music_list.length - 1) {
												  track_index += 1; // Go to next song
												} else {
												  track_index = 0; // Loop back to first song
												}
											  }
											  loadTrack(track_index);
											  playTrack();
											}

												function prevTrack() {
												  if (track_index > 0) {
													track_index -= 1; // Go to previous song
												  } else {
													track_index = music_list.length - 1; // Loop back to last song
												  }
												  loadTrack(track_index);
												  playTrack();
												}

														// Load the track based on the index
														function loadTrack(track_index) {
														  clearInterval(updateTimer);
														  reset();

														  curr_track.src = music_list[track_index].music;
														  curr_track.load();

														  track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
														  track_name.textContent = music_list[track_index].name;
														  track_artist.textContent = music_list[track_index].artist;

														  now_playing.textContent =
															"Playing music " + (track_index + 1) + " of " + music_list.length;
														  updateTimer = setInterval(setUpdate, 1000);
														}

															// Reset track info
															function reset() {
															  curr_time.textContent = "00:00";
															  total_duration.textContent = "00:00";
															  seek_slider.value = 0;
															}

																function seekTo() {
																  let seekTo = curr_track.duration * (seek_slider.value / 100);
																  curr_track.currentTime = seekTo;
																}

																	function setVolume() {
																	  curr_track.volume = volume_slider.value / 100;
																	}

																		function setUpdate() {
																		  let seekPosition = 0;
																		  if (!isNaN(curr_track.duration)) {
																			seekPosition = curr_track.currentTime * (100 / curr_track.duration);
																			seek_slider.value = seekPosition;

																			let currentMinutes = Math.floor(curr_track.currentTime / 60);
																			let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);

																			let durationMinutes = Math.floor(curr_track.duration / 60);
																			let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

																			if (currentSeconds < 10) currentSeconds = "0" + currentSeconds;
																			if (durationSeconds < 10) durationSeconds = "0" + durationSeconds;
																			if (currentMinutes < 10) currentMinutes = "0" + currentMinutes;
																			if (durationMinutes < 10) durationMinutes = "0" + durationMinutes;

																			curr_time.textContent = currentMinutes + ":" + currentSeconds;
																			total_duration.textContent = durationMinutes + ":" + durationSeconds;
																		  }
																		}


// Get references search godheef waan barbade basuuf
const searchInput = document.getElementById("search-bar");
const searchResults = document.getElementById("search-results");

	// Search and display filtered results
	function filterSongs() {
	  const query = searchInput.value.toLowerCase();
	  searchResults.innerHTML = ""; // Clear previous results

		  if (query) {
			// Filter songs based on query
			music_list.forEach((track, index) => {
			  if (
				track.name.toLowerCase().includes(query) ||
				track.artist.toLowerCase().includes(query)
			    ) {
				// Create a result item
				const listItem = document.createElement("li");
				listItem.textContent = `${track.name} - ${track.artist}`;
				listItem.onclick = () => {
				  track_index = index;
				  loadTrack(track_index);
				  playTrack();
				  searchResults.innerHTML = ""; // Clear search results
				  searchInput.value = ""; // Clear search bar
				};
				searchResults.appendChild(listItem);
			    }
			});

					// Show "No results" if no matches found
					if (!searchResults.innerHTML) {
					  const noResults = document.createElement("li");
					  noResults.textContent = "No results found.";
					  noResults.style.color = "#aaa";
					  searchResults.appendChild(noResults);
					}
  }
}
