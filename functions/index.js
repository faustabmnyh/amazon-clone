const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
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
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
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
