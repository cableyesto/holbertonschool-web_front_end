function changeMode(
    size,
    weight,
    transform,
    background,
    color
) {
    return function() {
        document.body.style.fontSize = size;
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    }
}

function main() {
    let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    let screamMode = changeMode(12, "normal", "lowercase", "white", "black");

    let newParagraph = document.createElement("p");
    newParagraph.appendChild(document.createTextNode("Welcome Holberton!"));
    document.body.appendChild(newParagraph);

    let buttonSpooky = document.createElement("button");
    buttonSpooky.appendChild(document.createTextNode("Spooky"));
    document.body.appendChild(buttonSpooky);

    let buttonDark = document.createElement("button");
    buttonDark.appendChild(document.createTextNode("Dark mode"));
    document.body.appendChild(buttonDark);

    let buttonScream = document.createElement("button");
    buttonScream.appendChild(document.createTextNode("Scream mode"));
    document.body.appendChild(buttonScream);

    buttonSpooky.addEventListener('click', function() {
        spooky();
    });

    buttonDark.addEventListener('click', function() {
        darkMode();
    });


    buttonScream.addEventListener('click', function() {
        screamMode();
    });
}

main();