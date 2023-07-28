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

app.get("/bx", (req, res) => {
    fetch(`https://data.cityofnewyork.us/resource/hc8x-tcnd.json?$$app_token=${token}&borough=Bronx`)
        .then((res) => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send({ houses: data });
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/bk", (req, res) => {
    fetch(`https://data.cityofnewyork.us/resource/hc8x-tcnd.json?$$app_token=${token}&borough=Brooklyn`)
        .then((res) => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send({ houses: data });
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/mn", (req, res) => {
    fetch(`https://data.cityofnewyork.us/resource/hc8x-tcnd.json?$$app_token=${token}&borough=Manhattan`)
        .then((res) => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send({ houses: data });
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/qn", (req, res) => {
    fetch(`https://data.cityofnewyork.us/resource/hc8x-tcnd.json?$$app_token=${token}&borough=Queens`)
        .then((res) => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send({ houses: data });
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
});

app.get("/si", (req, res) => {
    fetch(`https://data.cityofnewyork.us/resource/hc8x-tcnd.json?$$app_token=${token}&borough=Staten%20Island`)
        .then((res) => {
            if (!res.ok) {
                throw new Error(res.status);
            } else {
                return res.json();
            }
        })
        .then((data) => {
            res.send({ houses: data });
        })
        .catch((error) => {
            console.log(error);
            const reason = Number(error.message);
            res.sendStatus(reason);
        });
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
