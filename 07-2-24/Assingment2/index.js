function sum(arr){
    let arraySum=0;

    for(let i=0;i<arr.length;i++){
        if (typeof arr[i] === 'number'){
            arraySum += arr[i];
        } else if (typeof arr[i] === 'string') {
                arraySum += 0;
        }
    }
    return arraySum;
}

let arr=[1,2,3,4,5,"hi","up","down"];
console.log("The sum of Numerical Values is "+sum(arr));