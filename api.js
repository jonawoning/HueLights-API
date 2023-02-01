const express = require('express');
const { newGroup, bierAlarm, turnLights } = require("./lightutils.js");
const app = express();
const port = 3000;

app.get('/getresponse', (req, res) => {
    res.send('Dit is het test bericht en het werkt!');
});

app.put('/newgroup', (req, res) => {
    res.send('Lighteffect word uitgevoerd! > Newgroup alert');
    newGroup();
});

app.put('/bieralarm', (req, res) => {
    res.send('Lighteffect word uitgevoerd! > Bieralarm alert');
    bierAlarm();
});

app.put('/turnon', (req, res) => {
    res.send('Lighteffect word uitgevoerd! > Lights on');
    turnLights(true);
});

app.put('/turnoff', (req, res) => {
    res.send('Lighteffect word uitgevoerd! > Lights off');
    turnLights(false);
});

app.get('/getstatus', (req, res) => {
    res.send('Status: On');
});

app.listen(port, () => {
    console.log(`[HUELIGHTAPI-JW] \x1b[32mLight app is running/listening on port ${port} \x1b[0m`)
});
