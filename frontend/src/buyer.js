class Buyer{
    constructor(name, id, email){
        this.name = name;
        this.id = id; 
        this.email = email;
    }

    listIds(){
        let select = document.getElementById("buyer_id");
        const str = this.id
        

        console.log(str)

        select.innerHTML += `
            <option>1</option>
            <option>2</option>
        `

        // console.log(arr)

    }

    renderBuyer() {
        let buyersDiv = document.getElementById("buyers-container")

        buyersDiv.innerHTML +=
        `
        <ul id = "buyers">
            <h4>Email: ${this.email}</h4>
            <a href = "#" data-id=${this.id}">Username: ${this.name} </a> User ID: ${this.id}
            <button onClick="createFishForm()">Add Fish to Cart</button>
            <button class="delete" data-id=${this.id} onclick="deleteBuyer()">Delete Customer</button>
        </ul>
        `
        
    }
}