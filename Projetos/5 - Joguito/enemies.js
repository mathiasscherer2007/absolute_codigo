class Enemy{
    constructor(id, name, damage, health, image, ability){
        this.id = id;
        this.name = name;
        this.damage = damage;
        this.health = health;
        this.image = image === "" ? "none" : image;
        this.ability = ability === "" ? "none" : ability;
    }

    generateCard(){
        return `
            <div class="cardName">${this.name}</div>
            <div class="cardImage" style="background-image: url(${this.image})"></div>
            <div class="cardStats">
                <div class="cardHealth">${this.health}</div>
                <div class="cardAbility" style="background-image: url(${this.ability})"></div>
                <div class="cardDamage">${this.damage}</div>
            </div>
        `
    }
}

const garcia = new Enemy(1, "Hermano Pera", 3, 5, "Images/Enemies/pera.png", "");

export const enemyList = [garcia];