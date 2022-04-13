var media = [[],[],[],[],[]], situa = [[],[],[],[],[]];
media[0][0] = "MÉDIA"; situa[0][0] = "SITUAÇÃO";
media[1][0] = "Português"; situa[1][0] = "Português";
media[2][0] = "Matemática"; situa[2][0] = "Matemática";
media[3][0] = "Física"; situa[3][0] = "Física";
media[4][0] = "Biologia"; situa[4][0] = "Biologia";
contr = 0;

for (linha=0; linha < media.length; linha++){
    for(colna=1; colna < 11; colna++){
        if (linha==0){
            media[linha][colna] = prompt("Insira o nome do "+colna+"º aluno:");
            situa[linha][colna] = media[linha][colna];
        } else {
            media[linha][colna] = prompt("Insira a média de "+media[linha][0]+" do aluno "+media[0][colna]+":");
            if ((media[linha][colna] > 10) || (media[linha][colna] < 0)){
                situa[linha][colna] = "Inválida!";
            } else if (media[linha][colna] < 6) {
                situa[linha][colna] = "Reprovado";
            } else {
                situa[linha][colna] = "Aprovado";
            }
        }
    }
}

// Aula 7.3.2
//for (linha=0; linha < situa.length; linha++){
//    for (colna=0; colna < 11; colna++){
//        alert(situa[linha][colna]);
//   }
//}

// Aula 7.4.1
nome = prompt("Qual o nome do aluno que deseja pesquisar?");

// Aula 7.4.2
disci = prompt("Qual a disciplina que deseja pesquisar a nota?");

for (colna=0; colna<11; colna++){
    if (nome==media[0][colna]){
//        alert("O aluno "+media[0][colna]+" encontra-se na base de dados na posição "+colna+".");
//        contr=1;
//    }
//}
//if (contr==0){
//    alert("O aluno "+nome+" não está na base de dados.");
//}
        for (linha=1; linha<media.length; linha++){
            if (disci==media[linha][0]){
                alert("A média do "+nome+" na disciplina "+disci+" é "+media[linha][colna]+
                " e está "+situa[linha][colna]+".");
                contr = 1;
            }
        }
    }
}
if (contr==0) {
    alert("O aluno "+nome+" ou a disciplina "+disci+" não constam na base de dados!");
}
