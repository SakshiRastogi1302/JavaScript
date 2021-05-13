//1. Write a code in JS to print whether a number is prime or not.
let number=19;
let flag=true;
for(let i=2;i*i<=number;i++){
    if(number%i==0){
        flag=false;
        break;
    }
    else{
        continue;
    }
}


if(flag){
    console.log(number+" is a prime number"+"\n");
}
else{
    console.log(number+" is a non-prime number"+"\n");
}