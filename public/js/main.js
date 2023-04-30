const API_KEY = "AIzaSyDieSbDo0HJolvoGFnDm7ZEt7gM8KupYS0";
const geolocationAPI = "https://www.googleapis.com/geolocation/v1/geolocate?key=";

let array = [null];
let arrayForHuntID = [null];


//function joinAHunt(int codeHunt) //returns a bool

function addingHunt(latitude, longitude, nameOfHunt, HuntID) {
  array.push(nameOfHunt);

  HuntID = 1234;
  arrayForHuntID.push(HuntID); //replace this with a random number with 4 digits 
 }

 function deletingHunt(nameOfHunt, HuntID){
   array.concat(nameOfHunt);
   
   arrayForHuntID.concat(HuntID);
   HuntID = 0000;
 } //look if the ID and the name are in the database

 let arrayFromPlayer = [null];

 function playerHunt(playerLatitude, playerLongitude){

  if(latitude == playerLatitude && longitude == playerLongitude){
    arrayFromPlayer.pop();
  }
  if(arrayFromPlayer == array)
  {
    console.log("WINNER");
  }
 }

 function playerVisitedHunts(){
   //displays the hunts of the player
   console.log(arrayFromPlayer);
 }

 //addingHunt(798, 678, "myHunt");
 //playerHunt(798, 677);
 //playerVisitedHunts();

 