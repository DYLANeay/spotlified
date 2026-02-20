// API ENDPOINTS
// liste artiste : https://webmob-ui-22-spotli ed.herokuapp.com/api/artists
// liste chanson d'un artiste : https://webmob-ui-22-spotli ed.herokuapp.com/api/artists/:id/songs
// recherche de chanson par texte : https://webmob-ui-22-spotli ed.herokuapp.com/api/songs/search/:query

const getArtists = async () => {
	const response = await fetch(
		'https://webmob-ui-22-spotlified.herokuapp.com/api/artists',
	);
	const data = await response.json();
	return data;
};

const getSongsByArtist = async (artistId) => {
	const response = await fetch(
		`https://webmob-ui-22-spotlified.herokuapp.com/api/artists/${artistId}/songs`,
	);
	const data = await response.json();
	return data;
};

const searchSongs = async (query) => {
	const response = await fetch(
		`https://webmob-ui-22-spotlified.herokuapp.com/api/songs/search/${query}`,
	);
	const data = await response.json();
	return data;
};

// Is this working ?
export { getArtists, getSongsByArtist, searchSongs };
