
function mostrarTabu(){
    let num = parseInt(document.getElementById("numero").value);
    let resul= '';

    for (var vezes=1; vezes<=10 ; vezes++){
        resul += num+" x "+vezes+" = "+ num*vezes +" <br>";
  
  tabuada.innerHTML = resul;
    }

}