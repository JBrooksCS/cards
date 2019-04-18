let mkbutton = document.querySelector("#creator-btn")

let components = document.querySelector(".addedComponents")
let box = document.querySelector("#text-box")

function factory(cardText){

    

    const container = document.createElement('div')
    container.className = "cardContainer";
    container.textContent = cardText;
    
    const removebtn = document.createElement('button')
    removebtn.className = "remove";
    removebtn.textContent = "DELETE";
    container.appendChild(removebtn);
    removebtn.addEventListener("click", function(event){
        //console.log(event.target);
        let container = removebtn.parentNode;
        container.removeChild(removebtn);
        container.parentNode.removeChild(container);
    })


    

    components.appendChild(container)


}

mkbutton.addEventListener("click", function(event){
    let cardText = document.querySelector("#text-box").value;
    console.log(cardText);
    factory(cardText)
    box.value = "";
})







