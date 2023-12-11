function citacao(){
let nomeCompleto = document.getElementById("name").value;

let divido = nomeCompleto.split(" ");
let nome = divido[0];
let nomeMeio = divido[1];
let sobrenome = divido[2];

let sigla =  nome.charAt(0);
let sigla2 = nomeMeio.charAt(0);

if ( nome, nomeMeio, sobrenome){ 
    document.getElementById("citb").innerHTML = ("Citação Bibliográfica: " + sobrenome + "," + " " + sigla + "."  + " "+sigla2 + ".").toUpperCase()
} else if(nome, nomeMeio){
document.getElementById("citb").innerHTML = ("Citação Bibliográfica: " + nomeMeio + ","  + " "  + sigla + ".").toUpperCase()}
}
