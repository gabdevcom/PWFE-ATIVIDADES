
    


    function mediaCalcular(){
        let nome = document.getElementById("nomealuno").value;
        let n1 = parseFloat(document.getElementById("nota1").value);
        let n2 = parseFloat(document.getElementById("nota2").value);
        media =  (n1 + n2)/2 ;
        console.log(media)


        if (media >= 7){
            document.getElementById("re-sul").innerHTML = ("Nome do aluno(a): " + nome + "<br>" 
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

    function listaAlunos(){
        return JSON.parse(localStorage.getItem('alunos')) || [];
    }

    function salvarLista(lista){
        localStorage.setItem('alunos', JSON.stringify(lista));
        
    }

    let listaAluno = listaAlunos();

    function addListaAlunos(){
        let nome = document.getElementById("nomealuno").value;
         if (nome && media){
            listaAluno.push({nome, media});
            salvarLista(listaAluno);
        }

    }
    function mostrarLista(){
        let listaAluno = listaAlunos();
            let listaAlunosElement = document.getElementById("lista-alunos");
            listaAlunosElement.innerHTML = "";

        
            listaAluno.forEach(function (aluno) {
                let item = document.createElement("li");
                item.textContent = "Nome: " + aluno.nome + " - Média: " + aluno.media;
                listaAlunosElement.appendChild(item);
            });
    }

