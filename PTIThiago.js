var l = 1, g, a;
while (l==1){
    g = prompt("Digite o valor para a Gasolina: ");
    a = prompt("Digite o valor para o Álcool: ");
    r = parseFloat(a/g);
    if (r.toFixed(2)>0.7){
        console.log("A gasolina está compensando");
    } else if (r.toFixed(2)<0.7){
        console.log(" O alcool está compensando");
    } else {
        console.log(" Tanto faz...");
    }
    l = prompt("Gostaria de refazer o cálculo? Digite 1 para SIM e 2 para NÃO.");
    console.clear();
} 
console.log("Obrigado");