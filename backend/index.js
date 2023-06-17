const config = require("./config/config");

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { setRoutes } = require("./routes/routes");
const app = express();

console.log("Environment: ", config.NODE_ENV);

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
setRoutes(app);

app.get("/", (req, res) => {
  res.json({ msg: "Entrypoint" });
});

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    `mongodb://${config.MONGODB_URL}/${config.DATABASE_NAME}`
  );
}

// Listen
app.listen(config.PORT, () => {
  console.log(`API is listening on http://${config.HOST}:${config.PORT}`);
});
