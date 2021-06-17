const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
)


// - API

// - App config
const app = express();

// - Middlewarts
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('hello world'))


//Dit deployed niet.
app.post('/payments/create', async (request, response) => {
    //Hierin gaat deployen mis op die "=>" unexpected token. Waarschijnlijk ligt het aan deze compiler
    const total = request.query.total;

    console.log('Payment Request Recieved BOOM!!! for this amount >>> ', total);

    //Hier komt het Stripe deel
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
    });

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// - Listen command
exports.api = functions.https.onRequest(app)

// Example endoint (hier zo in de code plakken op ong. 6:54:30)
// http://localhost:5001/challenge-d2a70/us-central1/api

