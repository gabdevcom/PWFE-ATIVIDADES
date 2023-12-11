function listacont(){
    var nome;

var nome=prompt("Digite seu nome:");

  var email;
  var email =prompt("Digite seu email: ");
  

  var contatos = document.createElement("li");
  var node = document.createTextNode("Nome: " + nome + "  " +"Email:" +  email);
    var vet =[];

    contatos.appendChild(node);
  
    var add = document.getElementById("demo");
    add.appendChild(contatos);

    vet.push(contatos)
}


