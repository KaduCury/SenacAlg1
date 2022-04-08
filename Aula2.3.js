var tempAgua, panelaCheia, massaCozida, comMolho, comManteiga

alert("Colocar água na panela!");
alert("Ligar o fogo!");
alert("Medir a temperatura!");
tempAgua = prompt("A água ferveu? Responda com 's' pra sim e 'n' pra não.");
while (tempAgua == 'n') {
    alert("Medir a temperatura!");
    tempAgua = prompt("A água ferveu? Responda com 's' pra sim e 'n' pra não.");
} 
alert("Adicionar sal!");
alert("Adicionar azeite!");
alert("Colocar o macarrão!");
panelaCheia = prompt("A panela está cheia? Responda com 's' pra sim e 'n' pra não.");
while (panelaCheia == 'n') {
    alert("Colocar mais macarrão!");
    panelaCheia = prompt("A panela está cheia? Responda com 's' pra sim e 'n' pra não.");
}
alert("Observar densidade!");
massaCozida = prompt("O macarrão está cozido? Responda com 's' pra sim e 'n' pra não.");
while (massaCozida == 'n') {
    alert("Observar densidade!");
    massaCozida = prompt("O macarrão está cozido? Responda com 's' pra sim e 'n' pra não.");
}
alert("Apagar o fogo!");
comMolho = prompt("Servir com molho? Responda com 's' pra sim e 'n' pra não.");
if (comMolho == 's') {
    alert("Colocar molho!");
    comManteiga = prompt("Servir com manteiga? Responda com 's' pra sim e 'n' pra não.");
    if (comManteiga == 's') {
        alert("Colocar manteiga!");
    }
} 
alert ("FIM!");
