const API_URL = 'https://api.deezer.com'

export const getGenres = async (req, res) => {
  try {
    const response = await fetch(`${API_URL}/genre`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).send('Error al obtener los datos de deezer');
  }

}

export const getArtists = async (req, res) => {
  const { genreId } = req.params;
  try {
    const response = await fetch(`${API_URL}/genre/${genreId}/artists`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).send('Error al obtener los datos de deezer');
  }
};


export const getArtistDetail = async (req, res) => {
  const { artistId } = req.params;
  try {
    const response = await fetch(`${API_URL}/artist/${artistId}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).send('Error al obtener los datos de deezer');
  }
};


export const getTrackList = async (req, res) => {
  const { artistId } = req.params;
  try {
    const response = await fetch(`${API_URL}/artist/${artistId}/top?limit=7`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).send('Error al obtener los datos de deezer');
  }
}
