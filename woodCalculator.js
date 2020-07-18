// Wood Calculator

function woodCalculator(char,tabel,khat) {
    let totalChar = 0;
    let totalTabel = 0;
    let totalKhat = 0;
    let total = 0;

    totalChar = char * 1;
    totalTabel = tabel * 3;
    totalKhat = khat * 5;
 
    total = totalChar + totalTabel + totalKhat
    return total

}

console.log(woodCalculator(2,3,4));