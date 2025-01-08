import express from 'express';
import * as controllers from './Controllers.js';

const router = express.Router();

router.get('/', controllers.getGenres);
router.get('/genre/:genreId', controllers.getArtists);
router.get('/artist/:artistId', controllers.getArtistDetail);
router.get('/artist/tracklist/:artistId', controllers.getTrackList);


export default router; 