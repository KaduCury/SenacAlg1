var nome = [], resp = 's';
for(ind=0; resp=='s'; ind++){
    nome[ind] = prompt("Insira o nome: ");
    resp = prompt("Continuar? s/n");
}
ind--;
while ((ind)>=0){
    alert(nome[ind]);
    ind--;
}
alert ("FIM")
