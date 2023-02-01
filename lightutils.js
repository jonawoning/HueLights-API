const axios = require("axios");
const sound = require("sound-play");
const url = "http://192.168.2.187/api/gPwyOAhHO0zVqLeIjKlzWY0zP85BeHZUAe8BQcLE/";

function makeLights(time, amount, group){
    for (let i = 0; i < amount; i++) {
        const random = Math.floor(Math.random() * 56000) + 1;
        if (group === false)
            setTimeout(() => lightSetting({hue: random, on: true}, {hue: random, on: false}), i * time);
        setTimeout(() => lightSetting({hue: random, on: true}, {hue: random, on: true}), i * time + time / 2);
    }
    setTimeout(() => turnLights(true), time * amount + 1500);
}

async function lightSetting(arrayColorLights, arrayNoColorLights) {
    const response = await axios.put(url + "groups/14/action/", arrayColorLights, {headers: {'Content-type': 'application/json; charset=UTF-8'}});
    const response2 = await axios.put(url + "groups/13/action/", arrayNoColorLights, {headers: {'Content-type': 'application/json; charset=UTF-8'}});
}

async function turnLights(on){
    const response = await axios.put(url + "groups/0/action/", {hue: 0, on: on}, {headers: {'Content-type': 'application/json; charset=UTF-8'}});
    const response2 = await axios.put(url + "groups/12/action/", {hue: 0, on: false}, {headers: {'Content-type': 'application/json; charset=UTF-8'}});
}

const newGroup = function (){
    makeLights(1000, 10, true);
}

const bierAlarm = function (){
    makeLights(3000, 15, false);
    sound.play("C:\\Users\\jonaw\\Desktop\\Vakken\\Jaar 2\\Stage\\Documenten\\Hue Opdracht\\media\\bieralarmvolledig.mp3");
}

module.exports ={
    newGroup,bierAlarm,makeLights,turnLights
}