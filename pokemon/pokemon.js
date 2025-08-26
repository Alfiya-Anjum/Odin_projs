async function fetchData() {
    try {
        const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        
        
        // Display the Pokémon image
        const spriteUrl = data.sprites.front_default;
        const imgElement = document.getElementById('pokemonSprite');
        imgElement.src = spriteUrl;
        imgElement.style.display = 'block';
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
    
}