const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

require("dotenv").config();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require("./routes");
app.use(routes);

app.use('/images', express.static('./images'))


app.listen(port, (req, res) => {
  console.log(`App listen on port port`);
});
