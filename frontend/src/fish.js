class Fish{
    constructor(name, id, buyer_id, price){
        this.name = name;
        this.id = id;
        this.buyer_id = buyer_id;
        this.price = price;
    }


    renderFish(){
        let fishDiv = document.getElementById("fish-container")

        fishDiv.innerHTML += 
        `
        <ul>
        <li>
        <a href="#" data-id="${this.id}">${this.name}</a> - Price: $${this.price} - User ID: ${this.buyer_id}
        </li>
        </ul>
        <button class="delete" data-id=${this.id} onclick="deleteFish()">Delete Fish</button>
        `
    }


}