class Fish{
    constructor(name, price, buyer_id){
        this.name = name;
        this.buyer_id = buyer_id;
        this.price = price;
    }

    renderFish(){
        let fishDiv = document.getElementById("fish-container")

        fishDiv.innerHTML += 
        `
        <h3>Fish Available:</h3>
        <ul>
        <li>${this.name} - $${this.price}
        </li>
        </ul>
        `
    }
}