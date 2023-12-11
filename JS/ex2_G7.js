
let clubes = []; //vetor para armazenar os nomes 

function addClube(){
    let nome = document.getElementById("clube").value;
        clubes.push(nome); //adiciona o valor ao vetor 
        document.getElementById("clube").value = ""; //limpa o campo 
}


function listarClube() { 
    let lista = document.getElementById("lista"); // pega a lista do html 
    lista.innerHTML = ""; // limpa o conteudo da lista
    
    //condicao inicial = 0, vai parar quando i for menor que clubes, de um em um vai add( //for ([inicialização]; [condição]; [expressão final]))
      /*  for (let i = 0; i < clubes.length; i++) {
        let listaItem = document.createElement("li");
        listaItem.textContent = clubes[i];  // o conteudo do texto 
        lista.appendChild(listaItem); // Adiciona cada nome para a lista no html 
    }
} */
   
    clubes.forEach((vassoura) => {  
        let lista = document.getElementById("lista"); 
        let listaItem = document.createElement("li"); //cria o elemento 
        listaItem.textContent = vassoura; //pegar o conteudo 
        lista.appendChild(listaItem); //colocar o nó na pagina 
})
}

function tabelaJogos(){
/*
    let txt = "";
    let ultimo = clubes.length - 1;
    let ultimoe = clubes[ultimo];

    for(let i = 0; i < clubes.length; i++){
        txt += clubes[i] + " x " + clubes[ultimoe] + "<br> ";
    }
    document.getElementById("tabela").innerHTML = txt; 
*/ 
    let time1 = clubes[0];
    let time2 = clubes[1];
    let time3 = clubes [2];
    let time4 = clubes [3]; 

    document.getElementById("tabela").innerHTML = ("Tabela de jogos: " + "<br>"+time1 + " x " + time4 + "<br>" + time2  +" x " + time3);
}

