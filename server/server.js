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