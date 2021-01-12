class Fish{
    constructor(name, buyer_id, price){
        this.name = name;
        this.buyer_id = buyer_id;
        this.price = price;
    }

    renderFish(){
        let fishDiv = document.getElementById("fish-container")

        fishDiv.innerHTML += 
        `
        <h3>${this.name} - $${this.price}</h3>
        `
    }
}