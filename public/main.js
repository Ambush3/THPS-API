const charactersList = document.getElementById('skaters');
const searchBar = document.getElementById('search-skater');
cachedSkater = {};
let skateCharacters = [];


searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase(); // grab the search string

    const filteredCharacters = skateCharacters.filter((skateboarder) => { // filter through the pokemonCharacters array
        return (
            skateboarder.name.toLowerCase().includes(searchString)  // if the pokemon name includes the searchString// or if the pokemon type includes the searchString
        );
    });
    displayPokemon(filteredCharacters); // display the filtered pokemonCharacters
});

