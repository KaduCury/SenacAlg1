var nom = [], mai = [], tel = [];
num = prompt("Qual o número de cadastros a inserir?")
for (ind=0; ind<num; ind++){
    nom[ind] = prompt("Digite o nome da "+ (ind+1) +"ª pessoa:"); 
    mai[ind] = prompt("Digite o email da "+ (ind+1) +"ª pessoa:");
    tel[ind] = prompt("Digite o telefone da "+ (ind+1) +"ª pessoa:");
}
alert("A(s) pessoa(s) cadastrada(s):")
for (ind=0; nom.length>ind; ind++){
    alert(nom[ind] +" possui o telefone "+ tel[ind] +" e o email "+ mai[ind])
}
