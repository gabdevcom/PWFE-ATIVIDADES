

function categorizarAlunos(){
    
    let idade = document.getElementById("idade").value;
    if (idade == null){
        categoria.innerHTML = "Preencha o campo!"
    }
    else if(idade <= 12 ){
        categoria.innerHTML = "Categoria: Infantil"
    }
    else if(idade < 18){ 
        categoria.innerHTML = "Categoria: Juvenil"
    }

    else if(idade > 18 ) {
        categoria.innerHTML = "Categoria: Adulto"
    }


  

}

function retornarTracos() {
    let nome = document.getElementById("nome").value;
         let nomediv = nome.replace(/[A-Za-z]/g, '-');
            document.getElementById("result").innerHTML = nome + "<br> "+nomediv 
}
