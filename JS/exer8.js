function validarSenha() {
    let senha = document.getElementById("senha").value;
    console.log(senha);
    let tam = senha.length; 
    console.log(tam);

    if (tam < 8 || tam > 15) {
        document.getElementById("num").innerHTML = "Erro... a senha deve conter de 8 a 15 caracteres";
    } else if (senha.match(/[0-9]/g) === null) { 
        document.getElementById("num").innerHTML = "Deve possuir no mínimo 1 número";
    } else if (senha.match(/[A-Z]/g) === null) { 
        document.getElementById("num").innerHTML = "Deve possuir no mínimo 2 letras maiúsculas";
    } else if (senha.match(/[a-z]/g) === null) { 
        document.getElementById("num").innerHTML = "Deve possuir no mínimo 1 letra minúscula";
    } else if (senha.match(/[!|@|#|$|%|^|&|*|(|)|-|_]/g)=== null ){ 
        document.getElementById("num").innerHTML = "Deve possuir no mínimo 1 símbolo";
    }  else if (senha.match(/[0-9]/g) !== null || senha.match(/[A-Z]/g) !== null || senha.match(/[a-z]/g) !== null || senha.match(/[!@#$%^&*()\-_]/g) !== null) {
        document.getElementById("num").innerHTML = "Senha correta";
    }

}

