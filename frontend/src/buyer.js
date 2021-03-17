class Buyer{
    constructor(name, id, email){
        this.name = name;
        this.id = id; 
        this.email = email;
    }

    listIds(){
        let select = document.getElementById("buyer_id");

        select.innerHTML += `
        <option>${this.id}</option>
        `
    }

    renderBuyer() {
        let buyersDiv = document.getElementById("buyers-container")

        buyersDiv.innerHTML +=
        `
        <ul id = "buyers">
            <li> <h4>Email: ${this.email}</h4></li>
            <li> <a href = "#" data-id=${this.id}">Username: ${this.name} </a> </li>
            <li>User ID: ${this.id}</li>
            <li><button onClick="createFishForm()">Add Fish to Cart</button></li>
            <button class="delete" data-id=${this.id} onclick="deleteBuyer()">Delete Customer</button>
        </ul>
        `
    }
}