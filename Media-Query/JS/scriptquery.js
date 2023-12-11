let num = document.getElementById("numero").value;
num = 1;
document.getElementById("numero").innerHTML = 1;


function addN(){
   
     num += 1;

     document.getElementById("numero").innerHTML = num;

}

function subN(){

    num -= 1;
    document.getElementById("numero").innerHTML = num;
}