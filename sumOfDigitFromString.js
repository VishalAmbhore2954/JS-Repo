let str = prompt("Enter a String : ");
let str1 = str+'\0';
let num = 0,sum=0,digit;
    for(let i of str1){
        // console.log(i);
        if(i=='0'||i=='1'||i=='2'||i=='3'||i=='4'||i=='5'||i=='6'||i=='7'||i=='8'||i=='9'){
            digit = parseInt(i);
            num = (num*10)+digit;
        }
        else if(i=='+'||i=='\0'){
            sum = sum + num;
            num=0;
            // console.log(num);
        }
        // console.log(i);
    }
alert(sum);