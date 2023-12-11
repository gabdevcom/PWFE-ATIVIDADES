function verificar(){
       let n = document.getElementById("num").value; 
       
        if (n == ""){
            alert('Insira um número');
        } 

        if (n%2 == 0){
            document.getElementById("resp").innerHTML = ("Resposta: " + n + " é"+ " Par" );
        } else if(n%2 > 0){

        document.getElementById("resp").innerHTML = ("Resposta: " + n + " é"+ " impar" );
        }
    }

              
