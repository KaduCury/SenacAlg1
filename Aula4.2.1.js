var arrozT1, feijaoP, arrozT2, feijaoB, lentilha, linguica, valorGasto;

temArrozT1 = prompt ("Tem arroz tipo 1? Responda com 's' para sim ou 'n' para não");

if (temArrozT1 == 's' ){
    arrozT1 = prompt("Insira o valor do Arroz Tipo 1: R$");
    feijaoP = prompt("Insira o valor do Feijão Preto: R$");
    valorGasto = (parseInt(arrozT1) + parseInt(feijaoP*2));
    alert("Você comprou um kg de Arroz tipo 1 e dois kg de Feijão Preto e o valor da compra foi de R$" + valorGasto);
} else {
    temArrozT2 = prompt ("Tem arroz tipo 2? Responda com 's' para sim ou 'n' para não");
    if (temArrozT2 == 's'){
        arrozT2 = prompt("Insira o valor do Arroz Tipo 2: R$");
        feijaoB = prompt("Insira o valor do Feijão Branco: R$");
        valorGasto = (parseInt(arrozT2*3) + parseInt(feijaoB));
        alert("Você comprou três kg de Arroz tipo 2 e um kg de Feijão Branco e o valor da compra foi de R$" + valorGasto);
    } else {
        lentilha = prompt("Insira o valor da Lentilha: R$");
        linguica = prompt("Insira o valor da Linguiça Defumada: R$");
        valorGasto = (parseInt(lentilha*2) + parseInt(linguica));
        alert("Você comprou dois kg de Lentilha e um kg de Linguiça Defumada e o valor da compra foi de R$" + valorGasto);
    }  
} 

//Imagine a seguinte situação: sua mãe pede para você ir ao mercado fazer compras:
//– Filho, se tiver arroz tipo1, traga 1 kg dele e, com o troco, traga 2 kg de feijão 
//preto. Caso tenha apenas arroz tipo 2, traga 3 kg dele e só 1 kg de feijão branco.
//– Mãe, e se não tiver arroz? – você pergunta. 
// – Nesse caso, filho, traga 2 kg de lentilha e 1 kg de linguiça defumada.
