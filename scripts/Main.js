"use strict";

import {questList} from "./Data.js";
import {getObjByName} from "./Miscellaneous.js";
import './Initialize.js';
import Game from "./Game/Game.js";

const startText = "This is an open world game in a medieval setting.";

function startGame() {
    let event = getObjByName("Opening Scene", questList).nextChapter.rootEvent;
    new Game(event);
}

function createDisplay() {
    $("<div>", {id: "startContainer"}).appendTo("body");

    $("<p>", {
        id: "startText",
        text: startText
    }).appendTo("#startContainer");

    $("<button>", {
        id: "startButton",
        click: startGame,
        text: "Begin"
    }).appendTo("#startContainer");
}

createDisplay();
