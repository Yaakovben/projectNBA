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
//תפיסת אלמנטים
const BASE_URL = "https://nbaserver-q21u.onrender.com/api/filter";
const position = document.querySelector('select');
const twoPercent = document.querySelector('.tow');
const threePercent = document.querySelector('.three');
const points = document.querySelector('.points');
const Search = document.querySelector('.Search');
const Table = document.querySelector('.Table');
const Point = document.querySelector('.Point');
const Shooting = document.querySelector('.Shooting');
const Small = document.querySelector('.Small');
const Power = document.querySelector('.Power');
const Center = document.querySelector('.Center');
// קבלת השחקנים מהשרת
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
            // קריאה לפונקצייה שמדפיסה תשחקנים בטבלה
            displayPlayer(player);
        }
    }
    catch (err) {
        console.log(err);
    }
});
// פונקציית הדפסת השחקנים בטבלה
const displayPlayer = (player) => __awaiter(void 0, void 0, void 0, function* () {
    // קריאה לפונקצייה שמנקה את הטבלה
    yield deleteTable();
    // יצירת שורה
    let newRow = document.createElement("tr");
    newRow.classList.add("delete");
    // יצירת אברים שיוצגו בשורה
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");
    let button = document.createElement("button");
    button.classList.add("buttonDisplay");
    // האזנה לכפתור הטבלה
    button.addEventListener("click", () => displayOnCubse(player));
    td1.textContent = player.playerName;
    td2.textContent = player.position;
    td3.textContent = player.points.toString();
    td4.textContent = player.twoPercent.toString();
    td5.textContent = player.threePercent.toString();
    button.textContent = `add "${player.playerName}" to Current Team`;
    td6.appendChild(button);
    newRow.appendChild(td1);
    newRow.appendChild(td2);
    newRow.appendChild(td3);
    newRow.appendChild(td4);
    newRow.appendChild(td5);
    newRow.appendChild(td6);
    newRow.classList.add("rew");
    Table.appendChild(newRow);
});
// האזנה לכפור חיפוש שחקנים
Search.addEventListener("click", addPlayer);
// הדפסת השחקן הספציפי בקוביות שבראש העמוד
const displayOnCubse = (player) => {
    let title = document.createElement("h3");
    title.style.color = "blue";
    let name = document.createElement("h1");
    let three = document.createElement("h3");
    let two = document.createElement("h3");
    let points = document.createElement("h3");
    name.textContent = player.playerName;
    three.textContent = ` Three Precents: ${player.threePercent.toString()}%`;
    two.textContent = `Tow Precents: ${player.twoPercent.toString()}%`;
    points.textContent = `points: ${player.points.toString()}`;
    // בדיקה איזה שחקן מתאים לאיזה קופסה 
    switch (player.position) {
        case "PG": {
            Point.innerHTML = "";
            title.textContent = "Point Guard";
            Point.appendChild(title);
            Point.appendChild(name);
            Point.appendChild(three);
            Point.appendChild(two);
            Point.appendChild(points);
            break;
        }
        case "SG": {
            Shooting.innerHTML = "";
            title.textContent = "Shooting Guard";
            Shooting.appendChild(title);
            Shooting.appendChild(name);
            Shooting.appendChild(three);
            Shooting.appendChild(two);
            Shooting.appendChild(points);
            break;
        }
        case "SF": {
            Small.innerHTML = "";
            title.textContent = "Shooting Guard";
            Small.appendChild(title);
            Small.appendChild(name);
            Small.appendChild(three);
            Small.appendChild(two);
            Small.appendChild(points);
            break;
        }
        case "PF": {
            Power.innerHTML = "";
            title.textContent = "Power Forward";
            Power.appendChild(title);
            Power.appendChild(name);
            Power.appendChild(three);
            Power.appendChild(two);
            Power.appendChild(points);
            break;
        }
        case "C": {
            Center.innerHTML = "";
            title.textContent = "Center Forward";
            Center.appendChild(title);
            Center.appendChild(name);
            Center.appendChild(three);
            Center.appendChild(two);
            Center.appendChild(points);
            break;
        }
    }
};
// פונקציית ניקוי הטבלה
const deleteTable = () => {
    const allRew = document.querySelectorAll(".delete");
    for (const rew of allRew) {
        rew.remove();
    }
};
