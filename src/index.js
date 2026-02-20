import { getArtists, getSongsByArtist, searchSongs } from './js/api.js';
import { displayArtists } from './js/utils.js';

displayArtists(await getArtists());
