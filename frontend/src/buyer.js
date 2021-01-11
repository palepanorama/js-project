class Buyer{
    constructor(name, id){
        this.id = id;
        this.name= name; 
    }

    //render buyer instance method
    renderBuyer() {
        let buyersDiv = document.getElementById("buyers-container")

        buyersDiv.innerHTML +=
        `
        <ul>
        <h3>Email: ${this.email}
        <li> Username: ${this.name} 
        </li>
        </ul>
        `
    }
}