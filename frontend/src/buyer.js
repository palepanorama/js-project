class Buyer{
    constructor(id, name){
        this.id = id;
        this.name= name; 
    }

    //render buyer instance method
    renderBuyer() {
        let buyersDiv = document.getElementById("buyers-container")

        buyersDiv.innerHTML +=
        `
        <ul>
        <li> ${this.id} 
        </li>
        </ul>
        `
    }
}