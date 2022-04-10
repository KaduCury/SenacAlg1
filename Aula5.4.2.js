num = Math.floor(Math.random()*10);
cht = prompt("Escolha um número de 0 a 9: ");
for (con=1; cht!=num; con++){
    cht = prompt("ERROU! Tente outro número entre 0 e 9:");
}
    alert("Você ACERTOU na "+ con +"ª tentativa ! O número era o "+ num +".");
