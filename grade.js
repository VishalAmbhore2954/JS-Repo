let marks = prompt("Enter marks");
let grade;

if(marks<100 && marks>80){
    grade = 'A';
}else if(marks<=80 && marks>60){
    grade = 'B';
}else if(marks<=60 && marks>40){
    grade = 'C';
}else {
    grade = 'F';
}

alert(grade);