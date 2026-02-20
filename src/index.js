import { getArtists, getSongsByArtist, searchSongs } from './js/api.js';
import { displayArtists, displayArtistSongs } from './js/utils.js';

displayArtists(await getArtists());

const params = new URLSearchParams(window.location.search);
const artistId = params.get('id');
if (artistId) {
	const songs = await getSongsByArtist(artistId);
	const artistName = songs.length > 0 ? songs[0].artist.name : 'Inconnu';
	displayArtistSongs(songs, artistName);
}
