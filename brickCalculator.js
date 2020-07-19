// let buildingTala = 25;
// let feetAet = 1000;
// let aet = 0;

// if (buildingTala <= 10) {
//     aet = buildingTala * (15 * feetAet);
// } else if (buildingTala <= 20) {
//     let firstPart = 10 * (15 * feetAet);
//     let remaining = buildingTala - 10;
//     let secondPart = remaining * (12 * feetAet);
//     aet = firstPart + secondPart;
// } else {
//     let firstPart = 10 * (15 * feetAet);
//     let secondPart = 10 * (12 * feetAet);
//     let remaining = buildingTala - 20;
//     let thirdPart = remaining * (10 * feetAet);
//     aet = firstPart + secondPart + thirdPart
// }

// console.log(aet);


// //Feet to Mile Converter
// function brickCalculator(n){
//     var totalbrick = 0;
//     if(n<0){
//         console.log("please enter valid value");
//     }else if(n<=10){
//        totalbrick = n * 15;
//    }else if(n<= 20){
//        totalbrick = 10 * 15;
//        totalbrick += (n-10) * 12;
//    }else{
//        totalbrick = 10 * 15;
//        totalbrick += 10 * 12;
//        totalbrick += (n-20) * 10;
//    }
//    return totalbrick * 1000;
// }
// let result = brickCalculator(10)
// console.log(result);


// function brickCalculator(n){
//     var totalBrick = 0;
//      if(n<0){
//          console.log("please enter positive value");
//      }else{
//          //first 10 flor
//          if(n>=10){
//             totalBrick += 10*15;
//          }else{
//             totalBrick += n*15;
//          }
//         //  second 10 flor
//         if(n>10 && n <=20){
//             totalBrick+= (n-10) * 12;
//         }else if(n>20){
//             totalBrick += (20-10) * 12;
//         }
//         //third stage 
//         if(n>20){
//             totalBrick += (n-20)*10;
//         }
//         return totalBrick * 1000;
//      }
// }

// console.log(brickCalculator(5));

// function brickCalculator(buildingTala){
//     let feetAet = 1000;
//     let aet = 0;
//     if(buildingTala <= 10) {
//         aet = buildingTala * (15 * feetAet);
//     } else if(buildingTala <= 20) {
//         let firstPart = 10 * 15 * feetAet;
//         let remaining = buildingTala - 10;
//         let secondPart = remaining * 12 * feetAet;
//         aet = firstPart + secondPart;
//     } else {
//         let firstPart = 10 * 15 * feetAet;
//         let secondPart = 10 * 12 * feetAet;
//         let remaining = buildingTala - 20;
//         let thirdPart = remaining * 10 * feetAet;
//         aet = firstPart + secondPart + thirdPart
//     }
//     return aet;
// }
// var result = brickCalculator(25);
// console.log(result)



// function brickCal(builingTala) {
//     let feetAet = 1000;
//     let aet = 0;
    
//     if (builingTala <= 10) {
//        aet =  builingTala*15
//     } else if (builingTala<=20) {
//         let firstPart = 10 * 15;
//         let remaining = builingTala - 10;
//         let secondPart = remaining * 12;
//         aet = firstPart + secondPart;

//     } else {
//         let firstPart = 10 * 15;
//         let secondPart = 10 * 12;
//         let remaining = builingTala - 10;
//         let thirdPart = remaining * 10;
//         aet = firstPart + secondPart + thirdPart;
//     }
//     return aet * feetAet;
// }

// console.log(brickCal(15));