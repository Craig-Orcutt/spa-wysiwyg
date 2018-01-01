let people = [{"title": "Samurai",
"name": "Tim",
"bio": "Stuff",
"image": "dontcare",
"lifespan": {
    "birth": 1845,
    "death": 1900
}}, {"title": "Samurai",
"name": "John",
"bio": "Stuff",
"image": "dontcare",
"lifespan": {
    "birth": 1845,
    "death": 1900
}}, {"title": "Samurai",
"name": "Joe",
"bio": "Stuff",
"image": "dontcare",
"lifespan": {
    "birth": 1845,
    "death": 1900
}}, {"title": "Samurai",
"name": "Sarah",
"bio": "Stuff",
"image": "dontcare",
"lifespan": {
    "birth": 1845,
    "death": 1900
}}];
let textInput = document.getElementById("textInput")

let renderPeople = function() {
    for(var i = 0; i < people.length; i++) {
        let personElement = document.createElement("div");
        personElement.id = i;
        personElement.innerHTML += `<div class = 'titleName'> ${people[i].title} ${people[i].name}</div> <br>`;
        personElement.innerHTML += `<div class = bioImage> ${people[i].bio} <br> ${people[i].image}</div> <br>`;
        personElement.innerHTML += `<div class = lifespan> Born: ${people[i].lifespan.birth} <br> Died: ${people[i].lifespan.death}</div><br>`
        personElement.addEventListener("click", () => {
            personElement.classList.toggle("border");
            textInput.className = personElement.id;
            textInput.focus()
        })
        document.getElementById("container").appendChild(personElement);
    }
} 


textInput.addEventListener("input", (event) => {
    people[parseInt(event.target.className)].bio = event.target.value;
    document.getElementById("container").innerHTML = ""
    renderPeople()
});

renderPeople();