
    //document.getElementById("botao").addEventListener = function(){
function saqueNota(){

    let saque = document.getElementById("valor").value;
    
    if (saque == ""){
        alert('Insira o valor!!')
    } else if(saque >= 10000){
        alert('Valor alto de saque insira outro abaixo!!')
    } else {
        document.write = err.message;
    }

    let qtdNotas100 = Math.trunc(saque/100);
    let resto100 = (saque%100);
    let qtdNotas50 = Math.trunc(resto100/50);
    let resto50 =  (resto100%50);
    let qtdNotas10 = Math.trunc(resto50/10);

document.getElementById("Notas").innerHTML = ("Notas de R$ 100: " +  qtdNotas100
+ "<br>" + "Notas de R$ 50: " + qtdNotas50 + "<br>" + "Notas de R$ 10: " + qtdNotas10);
    


}