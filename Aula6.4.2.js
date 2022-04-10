var num = [], aux;
qto = prompt("Quantos números deseja inserir? ");

for (var ind=0; ind<qto; ind++){
    num[ind] = prompt("Insira um número: ");
}

for (var fix=0; fix<(qto-1); fix++){
    for (var rst=(fix+1); rst<qto; rst++){
        if (num[fix]>num[rst]){
            aux = num[fix];
            num[fix] = num[rst];
            num[rst] = aux;
        }
    }
}

for (var ind=0; ind<qto; ind++){
    alert(num[ind]);
}
