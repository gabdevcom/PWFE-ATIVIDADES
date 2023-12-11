function mediaCalcular(){
    let nome = document.getElementById("nomealuno").value;
    let n1 = parseFloat(document.getElementById("nota1").value);
    let n2 = parseFloat(document.getElementById("nota2").value);
    let media =  (n1 + n2)/2 ;
console.log(media)


    if (media >= 7){
        document.getElementById("resul").innerHTML = ("Nome do aluno(a): " + nome + "<br>" 
        + "Média: " + media + "<br>" + "Aluno(a) aprovado!!!")} 
        else if ( media >= 5 && media < 7){ 
            document.getElementById("resul").innerHTML  = ("Nome do aluno(a): " + nome + "<br> " 
            + "Média: " + media + "<br>" + "Aluno(a) está de recuperação ")
        }    
        else if (media < 7){
        document.getElementById("resul").innerHTML  = ("Nome do aluno(a): " + nome + "<br> " 
        + "Média: " + media + "<br>" + "Aluno(a) reprovado!!")
        } 
}