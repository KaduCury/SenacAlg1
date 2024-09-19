public class POOAula07 {
    public static void main(String[] args) {

        Fighter f[] = new Fighter [6];
        f[0] = new Fighter("Pretty Boy", "France", 31, 1.75f, 68.9f, 11, 2, 1);
        f[1] = new Fighter("Put Script", "Brazil", 29, 1.68f, 57.8f, 14, 2, 3);
        f[2] = new Fighter("Snap Shadow", "USA", 35, 1.65f, 80.9f, 12, 2, 1);
        f[3] = new Fighter("Dead Code", "Australia", 28, 1.93f, 81.6f, 13, 0, 2);
        f[4] = new Fighter("Ufo Cobol", "Brazil", 37, 1.70f, 119.3f, 5, 4, 3);
        f[5] = new Fighter("Nerdaard", "USA", 30, 1.81f, 105.7f, 12, 2, 4);

        Fight fgt1 = new Fight();
        fgt1.scheduleFight(f[0], f[1]);
        fgt1.toFight();

        f[0].status();
        f[1].status();

        /* 
        f[0].present();

        f[1].winFight();
        f[1].present();
        
        f[2].loseFight();
        f[2].present();
        
        f[3].drawFight();
        f[3].present();
        
        f[4].status();
        
        f[5].status();
        */
    }
}