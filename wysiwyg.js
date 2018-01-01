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

let renderPeople = function() {
    for(var i = 0; i < people.length; i++) {
        let personElement = document.createElement("div");
        personElement.id = i;
        personElement.innerHTML += people[i].name + " - " + people[i].bio;
        personElement.addEventListener("click", () => {
            personElement.classList.toggle("border");
            textInput.className = personElement.id;
            textInput.focus()
        })
        document.getElementById("container").appendChild(personElement);
    }
}

let textInput = document.getElementById("textInput")

textInput.addEventListener("input", (event) => {
    people[parseInt(event.target.className)].bio = event.target.value;
    document.getElementById("container").innerHTML = ""
    renderPeople()
});

renderPeople();