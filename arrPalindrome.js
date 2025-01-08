let arr = [10,20,30,40,50,40,30,20,10];
let isPalindrome = false;
for(let i=0,j=arr.length-1;i<arr.length&&j>=0;i++,j--){
    if(arr[i]==arr[j]){
        isPalindrome = true;
    }
}
console.log('Array is palindrome '+isPalindrome);