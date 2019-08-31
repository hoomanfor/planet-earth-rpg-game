$(document).ready(function() {

// First, I need to create an array of objects
// Each Object will have the following the following properties:
// title, health, attack, counter, image

var characters = [
    {
        title: "koala",
        health: 120,
        attack: 20,
        counter: 5,
        image_url: "assets/images/koala.jpg"
    },
    {
        title: "fox",
        health: 125,
        attack: 15,
        counter: 15,
        image_url: "assets/images/fox.jpg"
    },
    {
        title: "goat",
        health: 115,
        attack: 10,
        counter: 25,
        image_url: "assets/images/goat.jpg"
    },
    {
        title: "david",
        health: 105,
        attack: 5,
        counter: 10,
        image_url: "assets/images/david.jpg"
    }
];


for (var i = 0; i < characters.length; i++) {
    var characterDiv = $("<div>");
    characterDiv.attr("class", "characters");
    $("#characters-js").append(characterDiv);
    var titleP = $("<p>");
    titleP.text(characters[i].title);
    $(".characters").append(titleP)
    // var characterImg = $("<img>");
    // characterImg.attr("src", characters.image_url);
    // characterImg.attr("width", "150px");
    // characterImg.attr("height", "100px");
    // var healthP = $("<p>");
    // healthP.text(characters[i].health);
}


});

// You are able to pick a Character to fight with against Enemy characters
// At the beginning of the game, there are 4 characters you choose from. 

// There are 4 main areas on the page.
// Your Character, Enemies Available to Attack, Fight Section (attack button), Defender Section

// When I choose my character, the three remaining characters drop down to the "Enemies Available to Attack Section.

// From there, I need to choose one of these remaining characters to fight first.

// When I choose one, that character drops down to the Defender section.

// Each character in the game has 3 attributes: `Health Points`, `Attack Power` and `Counter Attack Power`.

// For example, if the base Attack Power is 6, each attack will increase the Attack Power by 6 (12, 18, 24, 30 and so on).

// Unlike the player's `Attack Points`, `Counter Attack Power` never changes.

// The `Health Points`, `Attack Power` and `Counter Attack Power` of each character must differ.

// A winning player must pick their characters wisely by first fighting an enemy with low `Counter Attack Power`. This will allow them to grind `Attack Power` and to take on enemies before they lose all of their `Health Points`. Healing options would mess with this dynamic.

// Your players should be able to win and lose the game no matter what character they choose. The challenge should come from picking the right enemies, not choosing the strongest player.