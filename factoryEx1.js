class PerScholasStaff {
  constructor(type, damage, health, attackShout) {
    this.type = type;
    this.damage = damage;
    this.health = health;
    this.attackShout = attackShout;
  }
  shout() {
    console.log(`${this.type} says: ${this.attackShout}`);
  }
}

const psStaff1 = new PerScholasStaff('Instructor', 6, 120, 'Feel the mighty wrath of the Virgo!');
const psStaff2 = new PerScholasStaff('Assistant Engineering Instructor', 4, 100, "I'll end this quickly so I may return to my caffeine!");
const psStaff3 = new PerScholasStaff('Teaching Fellow', 3, 95, 'Lucky for you, I need to take attendance. You will perish swiftly!');

// By now, we should all thoroughly understand what the above does.
// We make a blueprint class, and we create new objects from it using  the 'new' keyword.
// We pass in our arguments to initialize the objects properties.

// In this case, We're creating enemy objects 'PER SCHOLAS STAFF' for a video game.
// Each enemy has their own stats such as damage and health, and a message they will shout when they attack.
// additionally, each PER SCHOLAS STAFF has a type, which allows us to define what kind of enemy our hero has to fight.

// Let's print out the PER SCHOLAS STAFF objects we just created.
console.log('\n ======= PER SCHOLAS STAFFS ======= \n');
console.log(psStaff1);
console.log(psStaff2);
console.log(psStaff3);

// Now let's call each of their shout methods
console.log('\n======= PER SCHOLAS STAFF SHOUTS ======= \n');
psStaff1.shout();
psStaff2.shout();
psStaff3.shout();

// Feel free to alter any of the above code for your own amusement and practice.
