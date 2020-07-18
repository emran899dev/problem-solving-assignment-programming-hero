 
 const friends  = ['emran khan','emon','naser','shek']

let min = friends[0]
for (let i = 0; i < friends.length; i++){
    let element = friends[i];
    if (element.length < min.length) {
        min = element
    }
}
console.log(' Lower value ', min);



//  console.log(
//     arr.reduce(function(a, b) {
//       return a.length <= b.length ? a : b;
//     })
//   )

// function shorter(left, right) {
//     left.length <= right.length ? left : right
// }

// console.log(
//   arr.reduce(shorter)
// )