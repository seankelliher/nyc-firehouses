// ========================
// Packages
// ========================
const express = require("express");
const app = express();

// ========================
// Middlewares
// ========================
app.use(express.static(__dirname + "/dist/")); // For Heroku deployment.

// ========================
// Routes
// ========================
const token = process.env.APP_TOKEN; // In Heroku, "Open Data" token kept here.

app.get("/bronx", (req, res) => {
    fetch(`https://data.cityofnewyork.us/resource/hc8x-tcnd.json?$$app_token=${token}&borough=Bronx`)
        .then(res => res.json())
        .then(data => {
            res.send({ houses: data });
        })
        .catch(error => console.error(error));
});

app.get("/brooklyn", (req, res) => {
    fetch(`https://data.cityofnewyork.us/resource/hc8x-tcnd.json?$$app_token=${token}&borough=Brooklyn`)
        .then(res => res.json())
        .then(data => {
            res.send({ houses: data });
        })
        .catch(error => console.error(error));
});

app.get("/manhattan", (req, res) => {
    fetch(`https://data.cityofnewyork.us/resource/hc8x-tcnd.json?$$app_token=${token}&borough=Manhattan`)
        .then(res => res.json())
        .then(data => {
            res.send({ houses: data });
        })
        .catch(error => console.error(error));
});

app.get("/queens", (req, res) => {
    fetch(`https://data.cityofnewyork.us/resource/hc8x-tcnd.json?$$app_token=${token}&borough=Queens`)
        .then(res => res.json())
        .then(data => {
            res.send({ houses: data });
        })
        .catch(error => console.error(error));
});

app.get("/staten", (req, res) => {
    fetch(`https://data.cityofnewyork.us/resource/hc8x-tcnd.json?$$app_token=${token}&borough=Staten%20Island`)
        .then(res => res.json())
        .then(data => {
            res.send({ houses: data });
        })
        .catch(error => console.error(error));
});

app.get(/.*/, function(req, res) {
    res.sendFile(__dirname + "/dist/index.html");
});

// ========================
// Listen
// ========================
app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
});

/* app.listen(4040, () => {
    console.log("Server listening on port 4040");
}); */
