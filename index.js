const axios = require('axios');
const schedule = require('node-schedule');
const sound = require("sound-play");
const api = require("./api.js")
const { bierAlarm, turnLights} = require("./lightutils")

console.log('[HUELIGHTAPI-JW] \x1b[32mHueLights Task / Stage Jona Woning is now running. \x1b[0m');

//makeLights(3000, 10, false);

// VRIJDAG 16:00
const job = schedule.scheduleJob('0 0 16 * * 5', function(){
    console.log("Timer / Bier alarm word uitgevoerd!");
    bierAlarm();
});

// SLUTINGSTIJD (17:15)
const closeRule = new schedule.RecurrenceRule();
closeRule.hour = 17;
closeRule.minute = 30;
closeRule.second = 0;
const job2 = schedule.scheduleJob(closeRule, function(){
    turnLights(false);
});

//OPENINGSTIJD (8:00)
const openRule = new schedule.RecurrenceRule();
openRule.hour = 8;
openRule.minute = 0;
openRule.second = 0;
const job3 = schedule.scheduleJob(openRule, function(){
    turnLights(true);
});



// async function on(color){
//     const array = {hue: color, on: true};
//     const response = await axios
//         .put("http://192.168.2.187/api/gPwyOAhHO0zVqLeIjKlzWY0zP85BeHZUAe8BQcLE/groups/0/action",array, {
//             headers: { 'Content-type': 'application/json; charset=UTF-8' }
//         });
// }
//
// async function off(){
//     const array = {hue: 1000, on: false};
//     const response = await axios
//         .put("http://192.168.2.187/api/gPwyOAhHO0zVqLeIjKlzWY0zP85BeHZUAe8BQcLE/groups/0/action",array, {
//             headers: { 'Content-type': 'application/json; charset=UTF-8' }
//         });
// }

// axios.get('http://192.168.2.187/api/gPwyOAhHO0zVqLeIjKlzWY0zP85BeHZUAe8BQcLE/groups/').then(resp => {
//     const keys = Object.keys(resp.data);
//     const data = resp.data;
//
//     keys.map((key, index) => {
//         // console.log(data[key]);
//         const response = axios
//             .put("http://192.168.2.187/api/gPwyOAhHO0zVqLeIjKlzWY0zP85BeHZUAe8BQcLE/groups/" + key + "/action", {
//                 hue: 0,
//                 on: true,
//         }, {
//             headers: { 'Content-type': 'application/json; charset=UTF-8' }
//         });
//     });
// });

// const re = axios
//     .put(URL, {
//         on: true,
//         hue: 0,
//     }, {
//         headers: { 'Content-type': 'application/json; charset=UTF-8' }
//     });

// const te = axios
//     .put("http://192.168.2.187/api/gPwyOAhHO0zVqLeIjKlzWY0zP85BeHZUAe8BQcLE/groups/0", {
//         on: false,
//     }, {
//         headers: { 'Content-type': 'application/json; charset=UTF-8' }
//     });



