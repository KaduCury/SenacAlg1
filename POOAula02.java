public class POOAula02 {
    public static void main(String[] args) {
        Caneta c1 = new Caneta();
        c1.cor = "Azul";
        //c1.ponta = 0.5f;
        c1.modelo = "Montblanc 24k";
        c1.carga = 95;
        //c1.destampar();
        //c1.status();
        //c1.rabiscar();

        Caneta c2 = new Caneta();
        c2.cor = "Preta";
        //c2.ponta = 1;
        c2.modelo = "Crown";
        c2.carga = 80;
        //c2.tampar();
        //c2.status();
        //c2.rabiscar();

        GarrafaDeAgua g1 = new GarrafaDeAgua();
        g1.capacidadeDeArmazenamento = 1.5f;
        g1.carga = 10;
        g1.material = "plástico";
        //g1.tampada = true;
        g1.destampar();
        g1.status();
        g1.armazenar();
        g1.encher();
    }
}
