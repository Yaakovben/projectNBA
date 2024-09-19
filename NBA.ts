const BASE_URL: string = "https://nbaserver-q21u.onrender.com/api/filter"

const position: HTMLSelectElement = document.querySelector('select')!
const twoPercent: HTMLSelectElement = document.querySelector('.tow')!
const threePercent: HTMLSelectElement = document.querySelector('.three')!
const points: HTMLSelectElement = document.querySelector('.points')!
const Search: HTMLSelectElement = document.querySelector('.Search')!
const Table: HTMLSelectElement = document.querySelector('.Table')!
//
const Point: HTMLSelectElement = document.querySelector('.Point')!
const Shooting: HTMLSelectElement = document.querySelector('.Shooting')!
const Small: HTMLSelectElement = document.querySelector('.Small')!
const Power: HTMLSelectElement = document.querySelector('.Power')!
const Center: HTMLSelectElement = document.querySelector('.Center')!








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
    newRow.classList.add("prm");
    // יצירת אברים שיוצגו בשורה
    let td1: HTMLElement  = document.createElement("td");
    let td2: HTMLElement  = document.createElement("td");
    let td3: HTMLElement  = document.createElement("td");
    let td4: HTMLElement  = document.createElement("td");
    let td5: HTMLElement  = document.createElement("td");
    let td6: HTMLElement  = document.createElement("td");
    let button: HTMLElement  = document.createElement("button")
    button.classList.add("buttonDisplay")
   
    button.addEventListener("click",() => displayOnCubse(player))
    td1.textContent = player.playerName
    td2.textContent = player.position
    td3.textContent =  player.points.toString()
    td4.textContent =player.twoPercent.toString()
    td5.textContent =player.threePercent.toString()
    button.textContent = `add "${player.playerName}" to Current Team`
    td6.appendChild(button)
    newRow.appendChild(td1)
    newRow.appendChild(td2)
    newRow.appendChild(td3)
    newRow.appendChild(td4)
    newRow.appendChild(td5)
    newRow.appendChild(button)
    Table.appendChild(newRow)
 }






//
Search.addEventListener("click",addPlayer )

const displayOnCubse = (player:Nba):void =>{
    let title: HTMLElement  = document.createElement("h3");
    title.style.color = "blue"
    let name: HTMLElement  = document.createElement("h1");
    let three : HTMLElement  = document.createElement("h3");
    let two: HTMLElement  = document.createElement("h3");
    let points: HTMLElement  = document.createElement("h3");
    name.textContent = player.playerName
    three.textContent = ` Three Precents: ${player.threePercent.toString()}%`
    two.textContent = `Tow Precents: ${player.twoPercent.toString()}%`
    points.textContent = `points: ${player.points.toString()}`



    switch(player.position){
        case "PG":{
            Point.innerHTML = ""
            title.textContent = "Point Guard"
            Point.appendChild(title)
            Point.appendChild(name)
            Point.appendChild(three)
            Point.appendChild(two)
            Point.appendChild(points)
            break;
        }
        case "SG":{
            Shooting.innerHTML =""
            title.textContent = "Shooting Guard"
            Shooting.appendChild(title)
            Shooting.appendChild(name)
            Shooting.appendChild(three)
            Shooting.appendChild(two)
            Shooting.appendChild(points)
            break;
        }
        case "SF":{
            Small.innerHTML =""
            title.textContent = "Shooting Guard"
            Small.appendChild(title)
            Small.appendChild(name)
            Small.appendChild(three)
            Small.appendChild(two)
            Small.appendChild(points)
            break;
        }
        case "PF":{
            Power.innerHTML =""
            title.textContent = "Power Forward"
            Power.appendChild(title)
            Power.appendChild(name)
            Power.appendChild(three)
            Power.appendChild(two)
            Power.appendChild(points)
            break;  
    }
    case "C":{
        Center.innerHTML =""
        title.textContent = "Center Forward"
        Center.appendChild(title)
        Center.appendChild(name)
        Center.appendChild(three)
        Center.appendChild(two)
        Center.appendChild(points)
        break;
    }  
}


}



 







interface Nba {
    position:string,
    twoPercent:number,
    threePercent:number,
    points:number
    playerName:string
}