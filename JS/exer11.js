function parcelamento(){
    let valor = parseFloat(document.getElementById("preco").value);
    let resul= '';

    for (var divisao=1; divisao<=10 ; divisao++){
        resul +=divisao + "x de R$: "+  (valor/divisao).toFixed(2)  + "<br>"
        pagamento.innerHTML = resul;


    }

}


//to fixed para tirar os numeros depois da virgula na divisao 