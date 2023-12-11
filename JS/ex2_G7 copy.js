
let clubes = []; //vetor para armazenar os nomes 

localStorage.getItem("clubes") //armazena os dados em clubes 
clubes = JSON.parse(localStorage.getItem("clubes")); //pega essa string e transforma em objeto
//json parse analisa 


function addClube(){
    let nome = document.getElementById("clube").value;
        clubes.push(nome); //adiciona o valor ao vetor 
        document.getElementById("clube").value = ""; //limpa o campo 
    }


function listarClube() { 
    let lista = document.getElementById("lista"); // pega a lista do html 
    

    clubes.forEach((vassoura) => {  
        let lista = document.getElementById("lista"); 
        let listaItem = document.createElement("li"); //cria o elemento 
        listaItem.textContent = vassoura; //pegar o conteudo 
        lista.appendChild(listaItem); //colocar o nó na pagina 
})
}

function tabelaJogos(){

    let time1 = clubes[0];
    let time2 = clubes[1];
    let time3 = clubes [2];
    let time4 = clubes [3]; 

    document.getElementById("tabela").innerHTML = ("Tabela de jogos: " + "<br>"+time1 + " x " + time4 + "<br>" + time2  +" x " + time3);


    localStorage.setItem("clubes", JSON.stringify(clubes)); //converte o vetor em string e armazena em clubes
     // key = clubes;   

}           
   
    