var createError = require("http-errors");
var express = require("express");
var cors = require("cors");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

/**
 * Express routers.
 */
const indexRouter = require("./routes/index");
const authRouter = require("./routes/auth");
const programmesRouter = require("./routes/programmes");
const aprogrammesRouter = require("./routes/aprogrammes");
const priceprogrammesRouter = require("./routes/priceprogrammes");
const CruiseprogrammesRouter = require("./routes/cruiseprogrammes");
const hotelsRouter = require("./routes/hotels");
const offersRouter = require("./routes/offers");
const toursRouter = require("./routes/tours");
const categoryRouter = require("./routes/category");
const maincategoryRouter = require("./routes/maincategory");
const metaRouter = require("./routes/metapage");
const routespageRouter = require("./routes/routespage");
const usersRouter = require("./routes/users");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api/auth", authRouter);
app.use("/api/programmes", programmesRouter);
app.use("/api/routespage", routespageRouter);
app.use("/api/aprogrammes", aprogrammesRouter);
app.use("/api/priceprogrammes", priceprogrammesRouter);
app.use("/api/Cruiseprogrammes", CruiseprogrammesRouter);
app.use("/api/hotels", hotelsRouter);
app.use("/api/category", categoryRouter);
app.use("/api/metapage", metaRouter);
app.use("/api/offers", offersRouter);
app.use("/api/tours", toursRouter);
app.use("/api/maincategory", maincategoryRouter);

mongoose.connect(process.env.DB_URL);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
