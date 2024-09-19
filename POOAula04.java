public class POOAula04 {
    public static void main(String[] args) {
        Caneta2 x1 = new Caneta2("Faber Castel", "Vermelha", 2.0f); 
        
        //x1.setModelo("BIC");
        //x1.modelo = "BIC";

        //x1.setPonta(0.5f);
        //x1.ponta = 0.5f;
        
        //System.out.println("Tenho uma caneta " + x1.getModelo() + " de ponta " + x1.getPonta());
        x1.status();

        Caneta2 x2 = new Caneta2("Montblanc", "Preta", 1.0f);
        x2.status();
    }
}
