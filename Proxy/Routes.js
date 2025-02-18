import express from 'express';
import * as controllers from './Controllers.js';

const router = express.Router();

router.get('/genres', controllers.getGenres);
router.get('/genre/:genreId', controllers.getArtists);
router.get('/artist/:artistId', controllers.getArtistDetail);
router.get('/artist/tracklist/:artistId', controllers.getTrackList);
router.get('/top/', controllers.getToptracks);


export default router; 