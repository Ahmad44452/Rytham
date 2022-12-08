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
      `SELECT * FROM artists`
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
      `SELECT al.albumid, al.albumName, al.albumArtwork, ar.artistName FROM albums al JOIN artists ar ON al.artistId=ar.artistId`
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
      `
    );

    return res.status(200).json(songs.rows);

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