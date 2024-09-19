const BASE_URL: string = "https://nbaserver-q21u.onrender.com/api/filter"

const position: HTMLSelectElement = document.querySelector('select')!
const twoPercent: HTMLSelectElement = document.querySelector('.tow')!
const threePercent: HTMLSelectElement = document.querySelector('.three')!
const points: HTMLSelectElement = document.querySelector('.points')!
const Search: HTMLSelectElement = document.querySelector('.Search')!
const Table: HTMLSelectElement = document.querySelector('.Table')!








const addPlayer = async():Promise<void> => {
    try{
        const res: Response = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                position:position.value,
                twoPercent:twoPercent.value,
                threePercent:threePercent.value,
                points:points.value   
            })
        })
        const players:Nba[] = await res.json()
        console.log(players);
        for(const player of players){
            displayPlayer(player)
               
        }
        

    }catch(err){
        console.log(err);
        
    }
}


 const displayPlayer = async(player:Nba):Promise<void> =>{

    // יצירת שורה
    let newRow = document.createElement("tr");
    // יצירת אברים שיוצגו בשורה
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let button = document.createComment("button")
    td1.textContent = player.playerName;
    td2.textContent = player.position;
    td3.textContent = player.twePercent;
    td4.textContent =player.threePercent;
    button.textContent = `add${player.playerName} to Current Team`
    newRow.appendChild(td1)
    newRow.appendChild(td2)
    newRow.appendChild(td3)
    newRow.appendChild(td4)
    newRow.appendChild(button)
    Table.appendChild(newRow)




 }







Search.addEventListener("click",addPlayer )



 







interface Nba {
    position:string,
    twePercent:string,
    threePercent:string,
    points:string,
    playerName:string
}