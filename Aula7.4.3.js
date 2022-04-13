var navy = [[],[],[],[],[],[],[],[],[],[]], lin, cln, ctdNav=10;
//gerador da tabela e insere ÁGUA em todas as casas
for (ind=0; ind<10; ind++){
    for (col=0; col<10; col++){
        navy[ind][col] = "ÁGUA";
    }
}
//gerador dos NAVIOS e insere os mesmos randomicamente nas casas
for (pos=1; pos<11; pos++){
        lin = Math.floor(Math.random()*10);
        cln = Math.floor(Math.random()*10);
        navy[lin][cln]= "NAVIO";
}
alert("BATALHA NAVAL!");
alert("Você precisa afundar "+ctdNav+" navios para ganhar a batalha.");

for (ctdCht=0; ctdNav>0; ctdCht++){
    //pede as coordenadas x e y pro usuário
    chtLin = prompt("Insira um número de 0 a 9 para linha:");
    chtCln = prompt("Insira um número de 0 a 9 para coluna:");
    //confere os chutes do usuário
    if (navy[chtLin][chtCln]=="NAVIO"){
        alert("Você afundou um navio!");
        (ctdNav--);
        //faz a troca de NAVIO por ÁGUA quando o usuário acerta o NAVIO
        navy[chtLin][chtCln]="ÁGUA";
        if (ctdNav>1){
            alert("Ainda faltam "+ctdNav+" navios.");
        } if (ctdNav==1){
            alert("Ainda falta "+ctdNav+" navio.");
        }
    } else {
        alert("Você acertou na água...");
        if (ctdNav>1){
            alert("Ainda faltam "+ctdNav+" navios.");
        } if (ctdNav==1){
            alert("Ainda falta "+ctdNav+" navio.");
        }
    }
}
alert("Você VENCEU a batalha jogando "+ctdCht+" bombas!");
