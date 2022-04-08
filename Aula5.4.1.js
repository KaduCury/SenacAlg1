var pass, senh, cont

pass = prompt("Definir senha de 6 dígitos: ");
while (pass.length!=6){
    pass = prompt("Definir senha de SEIS dígitos: ");
}

senh = prompt("Inserir sua senha de 6 dígitos");
for (cont=1; senh!=pass && cont<3 && senh.length!=6; cont++){
    alert("Senha incorreta. Você tem mais " + (3-cont) + " tentativas.");
    senh = prompt("Inserir sua senha de 6 dígitos");
} if (pass==senh && cont<=3) {
    alert("Senha correta");
} else {
    pass = 99;
    alert("Você excedeu o número de tentetivas...");
}
