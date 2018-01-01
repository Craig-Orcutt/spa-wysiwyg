let people = [{"title": "Golf Legend",
"name": "Tiger Woods",
"bio": "Stuff",
"image": 'images/tigerWoods.jpg',
"lifespan": {
    "birth": 1973,
    "death": 'Still Alive'
}}, {"title": "Golf Phenom",
"name": "Jordan Speith",
"bio": "Stuff",
"image": "images/jordan-spieth.jpg",
"lifespan": {
    "birth": 1994,
    "death": 'Still Alive'
}}, {"title": "Golf Samurai",
"name": "Rickie Fowler",
"bio": "Stuff",
"image": "images/rickieFowler.jpg",
"lifespan": {
    "birth": 1988,
    "death": 'Still Alive'
}}, {"title": "Up and Coming Golf Samurai",
"name": "Smylie Kaufman",
"bio": "Stuff",
"image": "images/smylie-kaufman.jpg",
"lifespan": {
    "birth": 1996,
    "death": 'Still Alive'
}}];
let textInput = document.getElementById("textInput")

let renderPeople = function() {
    for(var i = 0; i < people.length; i++) {
        let personElement = document.createElement("div");
        personElement.classList.add('peopleDiv');
        personElement.id = i
        personElement.innerHTML += `<div id="${i}" class = 'titleName'> Title: ${people[i].title} <br> Name: ${people[i].name}</div> <br>`;
        personElement.innerHTML += `<div id="${i}" class = 'bioImage'> Bio: ${people[i].bio} <br> <img class ='image' src = ${people[i].image}> </div> <br>`;
        personElement.innerHTML += `<div id="${i}" class = 'lifespan'> Born: ${people[i].lifespan.birth} <br> Died: ${people[i].lifespan.death}</div><br>`
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