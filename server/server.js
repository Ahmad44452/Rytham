//////////// UPDATE CHECK
const express = require("express");
const oracledb = require("oracledb");
const app = express();

//////////// APPLY MIDDLEWARES
app.use(express.json());
// const { checkToken } = require('./middlewares/auth');
// app.use(checkToken);

let connection;
(async () => {
  try {
    connection = await oracledb.getConnection({
      user: 'rytham',
      password: 'abc',
      connectString: "XE"
    });

    return connection;
  } catch (err) {
    console.log(err);
  }
})();

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
oracledb.autoCommit = true;

////////// API ROUTES
// const userApi = require("./routes/api/userApi");
// app.use("/api/user", userApi);
///////////////////////////////////////

// app.use(express.static('client/build'));

// if (process.env.NODE_ENV === 'production') {
//   const path = require("path");
//   app.get('/*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'))
//   });
// }

app.post('/api/adminLogin', async (req, res) => {

  try {
    const user = await connection.execute(
      `SELECT * FROM admin where adminEmail='${req.body.email}'`
    );

    if (!user)
      return res.status(400).json({ message: 'Wrong credentials' });

    if (user.rows[0].PASSWORD === req.body.password) {
      return res.status(200).json({ name: user.rows[0].ADMINNAME, email: user.rows[0].ADMINEMAIL });
    } else {
      return res.status(400).json({ message: 'Wrong credentials' });
    }

  } catch (err) {
    console.error(err);
    return res.status(400).json(err);
  }
});


app.get('/api/getArists', async (req, res) => {

  try {
    const artists = await connection.execute(
      `SELECT * FROM artists ORDER BY dbms_random.value`
    );

    return res.status(200).json(artists.rows);

  } catch (err) {
    console.error(err);
    return res.status(400).json(err);
  }
});


app.post('/api/addArtist', async (req, res) => {

  try {
    const artist = await connection.execute(
      `insert into ARTISTS (artistName,artistArtwork) values('${req.body.artistName}','${req.body.artistArtwork}')`
    );

    return res.status(200).json(artist.rows);

  } catch (err) {
    console.error(err);
    return res.status(400).json(err);
  }
});

app.post('/api/deleteArtist', async (req, res) => {

  try {

    const artist = await connection.execute(
      `DELETE FROM ARTISTS WHERE ARTISTID='${req.body.artistId}'`
    );

    return res.status(200).json(artist.rows);

  } catch (err) {
    console.error(err);
    return res.status(400).json(err);
  }
});

app.get('/api/getAlbums', async (req, res) => {

  try {
    const albums = await connection.execute(
      `SELECT al.albumid, al.albumName, al.albumArtwork, ar.artistName FROM albums al JOIN artists ar ON al.artistId=ar.artistId ORDER BY dbms_random.value`
    );

    return res.status(200).json(albums.rows);

  } catch (err) {
    console.error(err);
    return res.status(400).json(err);
  }
});

app.post('/api/addAlbum', async (req, res) => {

  try {
    const artist = await connection.execute(
      `insert into ALBUMS (albumName,artistId,albumArtwork) values('${req.body.albumName}','${req.body.artistId}','${req.body.albumArtwork}')`
    );

    return res.status(200).json(artist.rows);

  } catch (err) {
    console.error(err);
    return res.status(400).json(err);
  }
});

app.post('/api/deleteAlbum', async (req, res) => {

  try {

    const artist = await connection.execute(
      `DELETE FROM ALBUMS WHERE ALBUMID='${req.body.albumId}'`
    );

    return res.status(200).json(artist.rows);

  } catch (err) {
    console.error(err);
    return res.status(400).json(err);
  }
});

app.get('/api/getSongs', async (req, res) => {
  try {
    const songs = await connection.execute(
      `SELECT s.songid, s.songName, s.songLink, s.albumId, al.albumName, al.albumArtwork, ar.artistName
      FROM songs s
      JOIN albums al ON s.albumId=al.albumId
      JOIN artists ar ON al.artistId=ar.artistId
      ORDER BY dbms_random.value
      `
    );

    return res.status(200).json(songs.rows);

  } catch (err) {
    console.error(err);
    return res.status(400).json(err);
  }
});

app.get('/api/getSongsByArtist/:artistId', async (req, res) => {
  try {
    const songs = await connection.execute(
      `SELECT s.songid, s.songName, s.songLink, s.albumId, al.albumName, al.albumArtwork, ar.artistName
      FROM songs s
      JOIN albums al ON s.albumId=al.albumId
      JOIN artists ar ON ar.artistId=${req.params.artistId} AND al.artistId=ar.artistId
      `
    );

    return res.status(200).json(songs.rows);

  } catch (err) {
    console.error(err);
    return res.status(400).json(err);
  }
});

app.get('/api/getSongsByAlbum/:albumId', async (req, res) => {
  try {
    const songs = await connection.execute(
      `SELECT s.songid, s.songName, s.songLink, s.albumId, al.albumName, al.albumArtwork, ar.artistName
      FROM songs s
      JOIN albums al ON al.albumId=${req.params.albumId} AND s.albumId=al.albumId
      JOIN artists ar ON al.artistId=ar.artistId
      `
    );

    return res.status(200).json(songs.rows);

  } catch (err) {
    console.error(err);
    return res.status(400).json(err);
  }
});

app.get('/api/getAlbumArtwork/:albumId', async (req, res) => {
  try {
    const artwork = await connection.execute(
      `SELECT albumartwork FROM albums WHERE albumid = ${req.params.albumId}`
    );

    return res.status(200).json(artwork.rows[0].ALBUMARTWORK);

  } catch (err) {
    console.error(err);
    return res.status(400).json(err);
  }
});

app.get('/api/getArtistArtwork/:artistId', async (req, res) => {
  try {
    const artwork = await connection.execute(
      `SELECT artistartwork FROM artists WHERE artistid = ${req.params.artistId}`
    );

    return res.status(200).json(artwork.rows[0].ARTISTARTWORK);

  } catch (err) {
    console.error(err);
    return res.status(400).json(err);
  }
});

app.post('/api/addSong', async (req, res) => {
  try {

    const song = await connection.execute(
      `insert into SONGS (songName,albumId,songLink) values(q'[${req.body.songName}]','${req.body.albumId}','${req.body.songLink}')`
    );

    return res.status(200).json(song.rows);

  } catch (err) {
    console.error(err);
    return res.status(400).json(err);
  }
});

app.post('/api/deleteSong', async (req, res) => {

  try {

    const song = await connection.execute(
      `DELETE FROM SONGS WHERE SONGID='${req.body.songId}'`
    );

    return res.status(200).json(song.rows);

  } catch (err) {
    console.error(err);
    return res.status(400).json(err);
  }
});

app.get('/api/searchArtists/:searchQuery', async (req, res) => {
  try {
    const artists = await connection.execute(
      `SELECT artistid, artistname, artistartwork FROM artists WHERE LOWER(artistname) LIKE '%${req.params.searchQuery}%'`
    );

    return res.status(200).json(artists.rows);

  } catch (err) {
    console.error(err);
    return res.status(400).json(err);
  }
});

app.get('/api/searchAlbums/:searchQuery', async (req, res) => {
  try {
    const albums = await connection.execute(
      `SELECT ALBUMID, ALBUMNAME, ARTISTID, ALBUMARTWORK FROM albums WHERE LOWER(albumname) LIKE '%${req.params.searchQuery}%'`
    );

    return res.status(200).json(albums.rows);

  } catch (err) {
    console.error(err);
    return res.status(400).json(err);
  }
});

app.get('/api/searchSongs/:searchQuery', async (req, res) => {
  try {
    const songs = await connection.execute(
      `SELECT s.SONGID,s.SONGNAME,s.ALBUMID, s.SONGLINK, al.albumName, al.albumArtwork, ar.artistName
      FROM songs s
      JOIN albums al ON s.albumId=al.albumId
      JOIN artists ar ON al.artistId=ar.artistId
      WHERE LOWER(s.songname) LIKE '%${req.params.searchQuery}%'`
    );

    return res.status(200).json(songs.rows);

  } catch (err) {
    console.error(err);
    return res.status(400).json(err);
  }
});

app.get('/hi', async (req, res) => {
  try {
    res.json({ 'name': 'ahmad' })
  } catch (error) {

  }
})


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log("Server is running!");
});






// ;

// ;