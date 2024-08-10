let num1 = parseInt(prompt("write any number do you want to divide"));
let num2 = parseInt(prompt("please Enter last num"));

let result = num1/num2;
if(Number.isFinite(result)){
 alert(result);
}
else{
    alert("math error");
}