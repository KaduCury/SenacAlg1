public class Questao {
    static int q1;
    int q2;
    static { q1=9 ;}
    { q2 = 3; }
    
    void troca()
    {
    q1=q2 ;
    }
    public static void main(String[] args) {
    Questao x=new Questao();
    Questao y=new Questao();
    x.q2=5;
    x.troca();
    System.out.print(x.q1+" "+x.q2+" "+y.q1+" "+y.q2);
    }
    }
