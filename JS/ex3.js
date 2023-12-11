function promocao(){
    let nomemed = document.getElementById("produto").value;
    let precomed = document.getElementById("preco").value;

    promo = Math.trunc ((precomed*2) - (precomed*2*0,5) );
   

    document.getElementById("mostrar").innerHTML = ("Promoção de " + nomemed
    + "<br>" + "Leve 2 por apenas R$ " + promo);
   
}