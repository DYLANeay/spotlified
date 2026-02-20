/* basic syntax : <a href="artists/drake.html" class="artist-card">
                    <span class="artist-name">Drake</span>
                </a> */

const displayArtists = (artists) => {
	const artistsContainer = document.querySelector('.artist-grid');
	if (!artistsContainer) return;
	artistsContainer.innerHTML = '';
	artists.forEach((artist) => {
		const artistCard = document.createElement('a');
		artistCard.href = `artists/${artist.id}.html`;
		artistCard.classList.add('artist-card');

		const artistName = document.createElement('span');
		artistName.classList.add('artist-name');
		artistName.textContent = artist.name;

		artistCard.appendChild(artistName);
		artistsContainer.appendChild(artistCard);
	});
};

export { displayArtists };
