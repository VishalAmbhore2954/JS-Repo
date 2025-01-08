let arr = [15,6,45,8,30,10,71];

let smallest = arr[0];

for(let i=1;i<=arr.length;i++){
    if(arr[i]<smallest){
        smallest = arr[i];
    }
}
console.log("Smallest is "+smallest);