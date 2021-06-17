class NotesStore {
    constructor() {
        this.state = {
            active:[],
            completed:[],
            others: []
        }
    }
    //add your code here
    addNote = function(state,name){
        if(name == "" || name == null){
         return "Name cannot be empty";   
        }
        if(this.isStateValid(state)){
            if(state === "active"){
                   this.state.active.push(name);
            }
            else if(state === "completed"){
                this.state.completed.push(name);
            }
            else{
                this.state.others.push(name);
            }
        }
        else{
            let message = "Invalid state " + state;
            return message;
        }
    }
    getNotes = function(state){
        if(this.isStateValid(state)){
            if(state === "active"){
               return this.state.active;
            }
            else if(state === "completed"){
               return this.state.completed;
            }
            else{
               return this.state.others;
            }
        }
        else{
            let message = "Invalid state " + state;
            return message;
        }
    }
    isStateValid = function(state){
        if(state == "completed"){
            return true;
        }else if(state == "active"){
            return true;
        }else if(state == "others"){
            return true;
        }
        return false;
    }
}

let myNote = new NotesStore();
myNote.addNote("active","DrinkTea");
myNote.addNote("active","DrinkCoffee");
console.log(myNote.addNote("foo", "dsad"));
console.log(myNote.getNotes("foo"));


//
'use strict';

const fs = require('fs');
const https = require('https');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

async function getTeams(year, k) {
    // write your code here
    // API endpoint template: https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=<YEAR>&page=<PAGE_NUMBER>
}

async function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const year = parseInt(readLine().trim());
  const k = parseInt(readLine().trim());

  const teams = await getTeams(year, k);

  for (const team of teams) {
    ws.write(`${team}\n`);
  }
}

