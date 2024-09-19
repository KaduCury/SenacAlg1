import java.util.Random;

public class Fight {
    
    // Atributs
    private Fighter challenger;
    private Fighter challenged;
    private int rounds;
    private boolean approved;

    // Methods
    public void scheduleFight(Fighter f1, Fighter f2) {
        if ((f1.getCategory() == f2.getCategory()) && (f1 != f2)) {
            this.approved = true;
            this.setChallenger(f1);
            this.setChallenged(f2);
        } else {
            this.approved = false;
            this.setChallenger(null);
            this.setChallenged(null);
        }
    }

    public void toFight() {
        if (this.approved) {
            System.out.println("ULTRA EMOJI COMBAT!");
            System.out.println(" ");
            System.out.println("The Challenged: ");
            challenged.present();
            System.out.println(" ");
            System.out.println("And the Challenger: ");
            challenger.present();
            
            Random aleatory = new Random();
            int winner = aleatory.nextInt(3);
            switch(winner) {
                case 0: // Draw
                    System.out.println("DRAW!");
                    System.out.println(" ");
                    this.challenged.drawFight();
                    this.challenger.drawFight();
                    break;
                case 1: // Challenged wins
                    System.out.println(this.challenged.getName()+ " wins the battle!");
                    System.out.println(" ");
                    this.challenged.winFight();
                    this.challenger.loseFight();
                    break;
                case 2: // Challenger wins
                    System.out.println(this.challenger.getName() + " wins the battle!");
                    System.out.println(" ");
                    this.challenged.loseFight();
                    this.challenger.winFight();
                    break;
            }

        } else {
            System.out.println("This fight is unable to happen!");
        }
    }

    // Getters and Setters
    public Fighter getChallenger() {
        return this.challenger;
    }

    public void setChallenger(Fighter cer) {
        this.challenger = cer;
    }

    public Fighter getChallenged() {

        return this.challenged;
    }

    public void setChallenged(Fighter ced) {
        this.challenged = ced;
    }

    public int getRounds() {
        return this.rounds;
    }

    public void setRounds(int rou) {
        this.rounds = rou;
    }

    public boolean getApproved() {
        return this.approved;
    }

    public void setApproved(boolean app) {
        this.approved = app;
    }
}
