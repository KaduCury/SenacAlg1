public class Fighter {
    
// Atributs
    private String name, nacionality;
    private int age;
    private float height, weight;
    private String category;
    private int wins, losses, draws;

// Methods
public void present() {
    System.out.println("Name: " + this.getName());
    System.out.println("Nacionality: " + this.getNacionality());
    System.out.println("Age: " + this.getAge() + " years");
    System.out.println("Height: " + this.getHeight() + "m");
    System.out.println("Weight: " + this.getWeight() + "kg");
    System.out.println("Category: " + this.getCategory());
    System.out.println("Win(s): " + this.getWins());
    System.out.println("Losse(s): " + this.getLosses());
    System.out.println("Draw(s): " + this.getDraws());
    System.out.println(" ");  
}
public void status() {
    System.out.println("--- " + this.name + " ---");
    System.out.println("Win(s): " + this.wins);
    System.out.println("Draw(s): " + this.draws);
    System.out.println("Loss(es): " + this.losses);
    System.out.println(" ");
}
public void winFight() {
    this.setWins(this.getWins() + 1);
}
public void loseFight() {
    this.setLosses(this.getLosses() + 1);
}
public void drawFight() {
    this.setDraws(this.getDraws() + 1);
}

// Specials Methods 

    // Constructor
    public Fighter(String nm, String nc, int a, float h, float we, int wi, int l, int d) {
        this.name = nm;  //setName(nm);
        this.nacionality = nc;  //setNacionality(nc);
        this.age = a;  //setAge(a);
        this.height = h;  //setHeight(h);
        setWeight(we);
        this.wins = wi;  //setWins(wi);
        this.losses = l;  //setLosses(l);
        this.draws = d;  //setDraws(d);
    }

    //Getters and Setters
    public String getName() {
        return this.name;
    }

    public void setName(String nm) {
        this.name = nm;
    }

    public String getNacionality() {
        return this.nacionality;
    }

    public void setNacionality(String nc) {
        this.nacionality = nc;
    }

    public int getAge() {
        return this.age;
    }

    public void setAge(int a) {
        this.age = a;
    }

    public float getHeight() {
        return this.height;
    }

    public void setHeight(float h) {
        this.height = h;
    }

    public float getWeight() {
        return this.weight;
    }

    public void setWeight(float we) {
        this.weight = we;
        setCategory(); 
    }

    public String getCategory() {
        return this.category;
    }

    private void setCategory() {
        if (this.weight < 52.2) {
            this.category = "Unable to reach a valid category";
        } else if (this.weight <= 70.3) {
            this.category = "Light Weight";
        } else if (this.weight <= 83.9) {
            this.category = "Medium Weight";
        } else if (this.weight <= 120.2){
            this.category = "Heavy Weight";
        } else {
            this.category = "Unable to reach a valid category";
        }
    }

    public int getWins() {
        return this.wins;
    }

    public void setWins(int wi) {
        this.wins = wi;
    }

    public int getLosses() {
        return this.losses;
    }

    public void setLosses(int l) {
        this.losses = l;
    }

    public int getDraws() {
        return this.draws;
    }

    public void setDraws(int d) {
        this.draws = d;
    }
}
