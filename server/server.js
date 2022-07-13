// Load data from data/questions.json, select 10 questions randomly and serve from an endpoint for the api the web-app.
// Each request to the endpoint should get a new random set.
import express from "express";
import questionRoute from "./routes/question.route.js"
import config from "./config/index.js";

const app = express();

app.use('/api/questions', questionRoute);

const { PORT } = config;

app.listen(PORT, () => console.log(`Listening to port ${PORT}...`))