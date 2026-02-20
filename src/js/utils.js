/* basic syntax : <a href="artists/drake.html" class="artist-card">
                    <span class="artist-name">Drake</span>
                </a> */

const displayArtists = (artists) => {
	const artistsContainer = document.querySelector('.artist-grid');
	if (!artistsContainer) return;
	artistsContainer.innerHTML = '';
	artists.forEach((artist) => {
		const artistCard = document.createElement('a');
		artistCard.href = `artists/?id=${artist.id}`;
		artistCard.classList.add('artist-card');

		const artistImg = document.createElement('img');
		artistImg.classList.add('artist-img');
		artistImg.src = artist.image_url;
		artistImg.alt = artist.name;

		const artistName = document.createElement('span');
		artistName.classList.add('artist-name');
		artistName.textContent = artist.name;

		artistCard.appendChild(artistImg);
		artistCard.appendChild(artistName);
		artistsContainer.appendChild(artistCard);
	});
};

const displayArtistSongs = (songs, artistName) => {
	const nameEl = document.getElementById('artist-name');
	const listEl = document.getElementById('songs-list');
	if (!nameEl || !listEl) return;

	nameEl.textContent = artistName;
	document.title = `Spotlified - ${artistName}`;
	listEl.innerHTML = '';

	songs.forEach((song) => {
		const li = document.createElement('li');

		const title = document.createElement('span');
		title.classList.add('fav-title');
		title.textContent = song.title;

		const actions = document.createElement('div');
		actions.classList.add('fav-actions');
		actions.innerHTML = `
			<span class="material-symbols-outlined">favorite</span>
			<span class="material-symbols-outlined">play_circle</span>
		`;

		li.appendChild(title);
		li.appendChild(actions);
		listEl.appendChild(li);
	});
};

export { displayArtists, displayArtistSongs };
