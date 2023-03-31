// My footbeam team

const teamName = "JanysTeam";
let maxNum = 5;
let isWin = true;
let captain;
let foo = null;

const mainTeam = {
    name: ["Dos", "Meir", "Almat", "Almas", "Kairat"],
    goalCeeper: "Meir",
    defender1: "Dos",
    defender2: "Kairat",
    forward: "Almat",
    winger: "Almas"
};
mainTeam['coach'] = "Ancelotti";
// after 1st half we take substitutions

mainTeam['defender1'] = "Isko";
mainTeam.forward = "Erjan";

//-------------end first part------------

const vehicle = {};
vehicle['brandName'] = "BMW";
vehicle['model'] = "X5";
vehicle.model = "M1";
// console.log(vehicle);
delete vehicle['model'];
// console.log(vehicle);

//-------------end second part------------

let salaries = {
	Aroo: 100,
	Dalida: 160,
	Samat: 130
};
let totalSal = 0;
for(let sal in salaries){
    totalSal += salaries[sal];
}

console.log(`Total salaries of personnel is ${totalSal}k$`);
