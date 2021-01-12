class Buyer{
    constructor(name, id, email){
        this.id = id;
        this.name= name; 
        this.email = email;
    }

    renderBuyer() {
        let buyersDiv = document.getElementById("buyers-container")

        buyersDiv.innerHTML +=
        `
        <h4>Email: ${this.email}</h4>
        <a href = "#" data-id="this.id">Username: ${this.name} </a>
        <button onClick="createFishForm()">Add Fish to Cart</button>
        <button class="delete" data-id=${this.id} onclick="deleteBuyer()">Delete Customer</button>

        `
        
    }
}