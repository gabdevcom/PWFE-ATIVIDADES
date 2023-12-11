    let palavra = prompt("Palavra: ");
    
     let split = palavra.split("");
     let reverse = split.reverse().join("");

    let resultado = alert("Palavra: " + palavra  + "\n" + "Invertida: " + reverse);
