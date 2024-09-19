"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const BASE_URL = "https://nbaserver-q21u.onrender.com/api/filter";
const position = document.querySelector('select');
const twoPercent = document.querySelector('.tow');
const threePercent = document.querySelector('.three');
const points = document.querySelector('.points');
const Search = document.querySelector('.Search');
const Table = document.querySelector('.Table');
const addPlayer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                position: position.value,
                twoPercent: twoPercent.value,
                threePercent: threePercent.value,
                points: points.value
            })
        });
        const players = yield res.json();
        console.log(players);
        for (const player of players) {
            displayPlayer(player);
        }
    }
    catch (err) {
        console.log(err);
    }
});
const displayPlayer = (player) => __awaiter(void 0, void 0, void 0, function* () {
    // יצירת שורה
    let newRow = document.createElement("tr");
    // יצירת אברים שיוצגו בשורה
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let button = document.createComment("button");
    td1.textContent = player.playerName;
    td2.textContent = player.position;
    td3.textContent = player.twePercent;
    td4.textContent = player.threePercent;
    button.textContent = `add${player.playerName} to Current Team`;
    newRow.appendChild(td1);
    newRow.appendChild(td2);
    newRow.appendChild(td3);
    newRow.appendChild(td4);
    newRow.appendChild(button);
    Table.appendChild(newRow);
});
Search.addEventListener("click", addPlayer);
