let first;
let second;
let answer=document.getElementById("output");

function addition() {
    first = document.getElementById("input-1").value;
    second = document.getElementById("input-2").value;
    let result = Number(first) + Number(second);
    document.getElementById("output").innerHTML = String(result);
    document.getElementById("input-1").value = "";
    document.getElementById("input-2").value = "";
}
    function subtraction(){
        first=document.getElementById(  "input-1").value;
        second=document.getElementById(  "input-2").value;
        let result = Number(first)-Number(second);
        document.getElementById(  "output").innerHTML=String(result);
        document.getElementById(  "input-1").value="";
        document.getElementById(  "input-2").value="";
}

function multiplication(){
    first=document.getElementById(  "input-1").value;
    second=document.getElementById(  "input-2").value;
    let result = Number(first)*Number(second);
    document.getElementById(  "output").innerHTML=String(result);
    document.getElementById(  "input-1").value="";
    document.getElementById(  "input-2").value="";
}

function division(){
    first=document.getElementById(  "input-1").value;
    second=document.getElementById(  "input-2").value;
    let result = Number(first)/Number(second);
    document.getElementById(  "output").innerHTML=String(result);
    document.getElementById(  "input-1").value="";
    document.getElementById(  "input-2").value="";
}

function power(){
    first=document.getElementById("input-1").value;
    second=document.getElementById("input-2").value;
    let temp=1;
    for(let limit=0; limit<Number(second);limit++){

        temp=Number(first)*temp
    }
    document.getElementById("output").innerHTML=String(temp);
}
function numberToPower(number, power){
    let total = 1;
    for (let i = 1; i <= power; i++) {
        total = total * number;
    }
    return total;
}

    if( Number(age) < 0){
        document.getElementById("page-wrapper").style.backgroundColor=`${color}`;
        document.getElementById("output").style.color="red";
    }

else{
        document.getElementById("page-wrapper").style.backgroundColor=`${color}`;
        document.getElementById("output").style.color="black";
    }

function clearAll(){
    first=document.getElementById(  "input-1").value;
    second=document.getElementById(  "input-2").value;

    document.getElementById(  "output").innerHTML="";
    document.getElementById(  "input-1").value="";
    document.getElementById(  "input-2").value="";
}