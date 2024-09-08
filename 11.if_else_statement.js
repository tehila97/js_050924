const MovieRatingChecke = 7;
if (MovieRatingChecke>7) 
{console.log ("highly rated movie");}
else {
console.log ("this movie has room for improvment");}


const MovieBudget = 50;
if (MovieBudget>1 && MovieBudget < 100) 
    {console.log ("big-Budget movie");}
    else {
    console.log ("indie movie")}


const movieGener = "horror";
const audienceAge = 17;
if (movieGener === "horror" && audienceAge < 18) 
    {console.log ("Not suitable for the audience");}
else if (movieGener === "horror" && audienceAge >= 18){
console.log ("suitable for the audience");}
else {
console.log ("suitable for the audience");
}



const movieDuration = 15;
const SecondmovieDuration = 10 ;
 if (movieDuration === SecondmovieDuration) 
{console.log ("movies has the same Duration");}
else if (movieDuration > SecondmovieDuration){
console.log ("The first movie is longer");}


const viewerAge = 15;
if (viewerAge === 13 || viewerAge === 18) 
    {console.log ("suitable for teens");}
else if (viewerAge > 18){
console.log ("suitable for adults");}
else {
console.log ("suitable for kids");
}



const PopularityScore = 80;
if (PopularityScore >= 80) 
    {console.log ("Popular movie");}
else {
console.log ("less known movie");
}


const NumOfAwards = 60;
console.log (NumOfAwards===95 ? "even number of awards": "odd number of awards");


const ActorAge1 = 15;
if (ActorAge1 < 14) 
    {console.log ("child actor");}
else if (ActorAge1 >=14 && ActorAge1 < 24) {
        console.log ("young actor");}
else 
    {console.log ("adult actor");}


const ActorAge = 15;
console.log (
    ActorAge <14 ? "child actor" :
    ActorAge >= 14 && ActorAge < 24 ? "young actor" :
    "adult actor");


const HasInvitision = true;
console.log (
    HasInvitision ? "Welcome to the premier" : "please check your invitaition" );


const ScreenDuration = 45;
if (ScreenDuration < 40) 
    {console.log ("short film");}
else if (ScreenDuration >=40 && ScreenDuration <= 120) {
        console.log ("Feature film");}
else 
    {console.log ("Epic length movie");}



const DayOfWeek = "Sunday";
if (DayOfWeek === "Saturday" || DayOfWeek === "Sunday") {
        console.log ("Special screening event!");}
else 
    {console.log ("Reguler Movie Showotime");}


const releaseYear = 2005;
if (releaseYear >=2001 && ScreenDuration <= 2100) {
    console.log ("21st century movie");}
else 
    {console.log ("21st century movie");}

const movieRating = 8;
const movieGenre = "Action";
if (movieGenre === "Action" && movieRating <= 7) {
    console.log ("Must Watch");}
else 
    {console.log ("Check revies before watching");}

    
const ticketPrice = 12;
if (ticketPrice <= 10) {
    console.log ("Discounted ticket");}
else 
    {console.log ("regular ticket price");}



const age = 22;
const isAdult = true;
if (age >18) 
    {console.log ("Allowed to watch");}
else 
    {console.log ("Age restrict content");}



const movieTitle = "Spider-Man 2";
if (movieTitle.includes("2") || movieTitle.includes("part")) 
    {console.log ("this movie is a sequel");}
else 
    {console.log ("This movie is not a sequel");}