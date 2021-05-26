const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HQog0E0XWms1zj7AvkuSkxHCqeKrFvC0pACMq5r71pmpGRP2xMyzAzgdd0zTdHmLEd5MC6oilwtHNDQoRc8UwNg00HVAzIYSt"
);

// API

// -App config
const app = express();

// -Midlewares
app.use(
  cors({
    origin: true,
  })
);
app.use(express.json());

// -API routes
app.get("/", (request, response) => response.status(200).send("mantap"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunitt currency
    currency: "usd", // ini harus usd
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// -Listen command
exports.api = functions.https.onRequest(app);

// examples endpoint
// http://localhost:5001/challenge-3b101/us-central1/api

// to start the emulator
// firebase emulators:start
