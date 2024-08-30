// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3;
switch (month) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("February")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("April")
        break;

    default:
        console.log("Month Not present")
        break;
}

const months = "jan";
switch (months) {
    case "jan":
        console.log("January")
        break; //agr break nahi likhenge to true k bd sara code chal jaega jb tk break na aye default k elawa
    case "feb":
        console.log("February")
        break;
    case "mar":
        console.log("March")
        break;
    case "apr":
        console.log("April")
        break;

    default:
        console.log("Month Not present")
        break;
}