public class GarrafaDeAgua {
    float capacidadeDeArmazenamento;
    int carga;
    String material;
    private boolean tampada;
    boolean armazenado;
    boolean vazio;
    void status() {
        System.out.println("Capacidade de armazenamento: " + this.capacidadeDeArmazenamento + "L");
        System.out.println("Carga: " + this.carga + "%");
        System.out.println("Material: " + this.material);
        System.out.println("Está tampada? " + this.tampada);
        System.out.println("Está armazenando líquido? " + this.armazenado);
        System.out.println("Está vazia? " + this.vazio);
    }
    void tampar() {
        if (this.tampada == true) {
            System.out.println("Já estava tampada!");
        } else {
            this.tampada = true;
        }
    }
    void destampar() {
        if (this.tampada == false) {
            System.out.println("Já estava aberta!");
        } else {
            this.tampada = false;
        }
    }
    void encher() {
        if (this.carga == 0) {
            System.out.println("Enchendo a garrafa!");
            this.vazio = true;
        } else if (this.carga>0 && this.carga<100) {
            System.out.println("Ainda não está vazia");
            this.vazio = false;
        } else {
            System.out.println("Garrafa cheia!");
            this.vazio = false;
        }

    }
    void armazenar(){
        if (this.tampada == true) {
            System.out.println("Líquido armazenado!");
            this.armazenado = true;
        } else {
            System.out.println("Fechar a garrafa primeiro!");
            this.armazenado = false;
        }
    }
}
