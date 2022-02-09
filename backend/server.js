const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const { errorHandler } = require("./middlewares/errorMiddleware");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
