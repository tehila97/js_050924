 const DayOfWeek = "Sunday";

 switch (DayOfWeek) {
    case "Sunday":
        console.log("discount day: 50% off on all tickets");
        break;
    case "Monday":
        console.log("discount day: 40% off on all tickets");
        break;
    default:
        console.log("regular prices");
 }


 const themeColor = "light";
 
 switch (themeColor) {
    case "light":
        console.log("light colors theme");
        break;
    case "dark":
        console.log("dark colors theme");
        break;
    case "night":
        console.log("night colors theme");
        break;
    default:
        console.log("regular colors");
 }



 const notificationstatus = "read";
 
 switch (notificationstatus) {
    case "new":
        console.log("you have new movie notifications");
        break;
    case "unread":
        console.log("you have new movie notifications");
        break;
    case "unopened":
        console.log("you have new movie notifications");
        break;
    default:
        console.log("you dont have notifications");
 }

 const movieRating = "PG";
 switch (movieRating) {
    case "G":
        console.log("Family-friendly movie. Suitable for all ages.");
        break;
    case "PG":
        console.log("Parental guidance suggested. Some material may not be suitable for children.");
        break;
    case "PG-13":
        console.log("Parents strongly cautioned. May contain material inappropriate for children under 13.");
        break;
    case "R":
        console.log("Restricted. Viewers under 17 require accompanying parent or adult guardian.");
        break;
    case "NC-17":
        console.log("No one 17 and under admitted. Adult content.");
        break;
    default:
        console.log("Movie rating not recognized.");
 }



 const audiencScore = 90;

 switch (true) {
    case (audiencScore >=90):
        console.log("must watch!");
        break;
    case (audiencScore >=75 && audiencScore <= 89):
        console.log("Recommended");
        break;
    case (audiencScore >=60 && audiencScore <= 74):
            console.log("mixed reviews");
        break;
    default:
        console.log("Skip it");
 }


 const userInput = 284;

 switch (typeof userInput) {
    case "number":
        console.log("input number: " + userInput);
        break;
    case "boolean":
        console.log("input boolean: " + userInput);
        break;
    case "string":
        console.log("input string: " + userInput);
        break;
default:
        console.log("unknown input type");
 }


 const releseMonth = 4;

 switch (true) {
    case (releseMonth >= 1 && releseMonth <= 3): 
        console.log("quarter_1");
        break;
    case (releseMonth >= 4 && releseMonth <= 6): 
        console.log("quarter_2");
        break;
    case (releseMonth >= 7 && releseMonth <= 9): 
        console.log("quarter_3");
        break;
    case (releseMonth >= 10 && releseMonth <= 12): 
        console.log("quarter_4");
        break;
default:
        console.log("unknown input type");
 }


 





