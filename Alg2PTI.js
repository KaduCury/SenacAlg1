var vetor = [];

//como limitar para permitir somente entrada de números?
listaLength = prompt("Insira a quantidade de elementos em sua lista: ");

for (indice=0; indice<listaLength; indice++){
    vetor[indice] = parseInt(prompt("Digite o número inteiro da "+ (indice+1) +"ª posição: "));
}

//a) Calcule e retorna o valor da maior diferença entre dois elementos distintos no vetor
//vetor = vetor.sort();
function maiorDiferenca(vetor) {
    let tamanho = vetor.length;
    for (let ind=0; ind<tamanho-1; ind++)
        for (let indicador=0; indicador<tamanho-ind-1; indicador++)
            if (vetor[indicador] > vetor[indicador+1]) {
                let temporario = vetor[indicador];
                vetor[indicador] = vetor[indicador+1];
                vetor[indicador+1] = temporario;
            };

    maiorNumero = vetor[vetor.length-1]; // vetor.pop()
    menorNumero = vetor[0]; // vetor.shift()
    diferencaMaiorMenor = maiorNumero - menorNumero;
    return("A diferença entre o maior número ("+maiorNumero+") e o menor número ("+menorNumero+") é de "+diferencaMaiorMenor+".");
}

//b) Verifica se o vetor está em ordem crescente, e retorna true caso esteja e false caso contrário.
function verificaOrdemCrescente (vetor) {
    for (i=1; i<vetor.length; i++) {
        if (vetor[i-1]>vetor[i]) {
            return false;
        }        
    }
    return true;
}
