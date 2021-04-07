function specialSum(...numbers){
    let sum = 0;
    for(let i of numbers){
        if(parseInt(i) % 2 == 0){
            sum += (parseInt(i) / 2);
        }else if (parseInt(i) % 2 != 0){
            sum += (parseInt(i) * 3);
        }
    } 
    return sum;
}

console.log(specialSum(3,2,6)); // output 13
console.log(specialSum(58, 53, 10, -10, -40, -28, 8, 34, 70, -16, 33)); // output 301
console.log(specialSum(93, 12, 5, 84, -22)); // output 331