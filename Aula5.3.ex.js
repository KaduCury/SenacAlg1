var pass, senh, cont=1
pass = prompt("Defina sua senha: ");
senh = prompt("Insira a senha: ");
while (pass!=senh && cont<3){
    cont++;
    alert("Você tem mais " + (4-cont) + " tentativas.");
    senh = prompt("Insira a senha: ");
} if (pass==senh && cont<=3){
    alert("Senha correta");
} else {
    alert("Você excedeu o número de tentativas...");
}
