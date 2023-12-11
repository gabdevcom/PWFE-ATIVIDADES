let colunas = document.querySelectorAll(".coluna");

let ordemCorreta = [
    "9.jpg" , 
    "8.jpg" ,
    "7.jpg" ,
    "6.jpg" ,
    "5.jpg" ,
    "4.jpg" ,
    "3.jpg" ,
    "2.jpg" ,
    "1.jpg",
]; 
//elementos arrastaveis
document.addEventListener("dragstart", (elem) => {
    elem.target.classList.add("arrastando");

})

document.addEventListener("dragend", (elem) =>{
    elem.target.classList.remove("arrastando");
//chamar funcao para confirmar a montagem do quebra cabeça
verificarOrdem();
})

//quando estiver sobre o lugar soltavel
colunas.forEach((coluna) => {
    coluna.addEventListener("dragover", (elem) =>{
        coluna.classList.add("hover");
    })
})
//quando sair do lugar soltavel
colunas.forEach((coluna) => {
    coluna.addEventListener("dragleave", (elem) =>{
        coluna.classList.remove("hover")
        let elementoArrastado = document.querySelector(".arrastando");
        //inverter os elem
        let filho = coluna.children[0];
        let colunaElemArrastado = elementoArrastado.parentElement;
        colunaElemArrastado.appendChild(filho);
        coluna.appendChild(elementoArrastado);
    })
})

//elementos iguais 
function arraysIguals(arr1, arr2){
    if(arr1.length !==  arr2.length) return false;
    for (let i = 0; i < arr1.length; i ++){
        if(arr1[i] !== arr2[i]) return false;
    }
    return true;
}

//verificar se os vetores estao em ordem

function verificarOrdem(){
    let imagensAtuais = [];
    colunas.forEach((coluna) => {
     let parte = coluna.querySelector("img");
     if (parte) {
        imagensAtuais.push(parte.src.split("/").pop());
     }       
     console.log(imagensAtuais);
     console.log(ordemCorreta);
    })
}

//sortear aleatoriamente as imgs
function sortear(){
    let num = [];
    for (let i =1;i <= 9; i++){
        let aleatorio = Math.ceil(Math.random()*(9-0) + 0); 
        while(num.includes(aleatorio)){
            aleatorio = Math.ceil(Math.random()*(9-0) + 0);
        }
        num.push(aleatorio);
        let parte = document.getElementById("parte" + i);
        parte.src ="IMG/" + aleatorio + ".jpg";
        console.log(aleatorio);
    }
    verificarOrdem();
}

sortear();