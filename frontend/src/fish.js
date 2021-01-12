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
        <ul>
        <li>
        <a href="#" data-id="${this.id}">${this.name}</a> - ${this.price} - ${this.user_id}
        </li>
        </ul>
        `
    }
}