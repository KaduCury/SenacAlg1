var pesquisar = 's';
while (pesquisar == 's'){
    alert("Descubra qual combustível é o mais vantajoso!");
    gasolina = prompt("Insira o valor do litro da Gasolina: ");
    alcool = prompt("Insira o valor do litro do Álcool: ");
    gas = parseFloat(gasolina.replace(',', '.'));
    alc = parseFloat(alcool.replace(',', '.'));
    indice = alc/gas;
    if (indice>0.7){
        alert("Abastecer com Gasolina é mais econômico.");
    } else if (indice<0.7){
        alert("Abastecer com Álcool é mais econômico.");
    } else {
        alert("Tanto faz abastecer com Álcool ou Gasolina.");
    }
    pesquisar = prompt("Deseja pesquisar novamente? Responda com 's' caso deseje efetuar nova pesquisa.");
}
alert("Obrigado! Volte sempre!");
