// haetaan hakukentän value ja response siihen (fetch) linkin datasta.
// Linkissä (res) myös pokemon/name voi muuttaa muihin muotoihin esim."v2/berry/${name/id}, jolloin tietoa marjoista"
// huomaa. pitää myös muuttaa haettavat tiedot esim. data.growth_time jne..
async function getdata() {
    try {
        const name = document.getElementById("searchtext").value;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)

// jos response NOT ok tee tämä (error viesti), Muuten elsen alapuolella oleva
        if(!response.ok) {
            document.getElementById("error").innerHTML = "Check the spelling!";
            
        } 
        else {

        document.getElementById("error").style.display = "none";

// alustetaan ja haetaan tarvittavat nimet, muutetaan näkyvyys ja näytettävät kuvat. Muutetaan json muotoon.
        const data = await response.json();

        const image = data.sprites.front_default;
        const imgElement = document.getElementById("img");

        imgElement.src = image;
        imgElement.style.display = "block";

        const image2 = data.sprites.front_shiny;
        const img2element = document.getElementById("img2");

        img2element.src = image2;
        img2element.style.display = "block";

// valitsee classin perusteella indexistä ja muuttaa tyhjän tilalle halutun tekstin + haetun datan
        document.querySelector(".type").innerHTML = "Pokemon type:" + " " + data.types [0].type.name;
        document.querySelector(".weight").innerHTML = "Pokemon weight:" + " " + data.weight;
        document.querySelector(".ability").innerHTML = "Main ability:" + " " + data.abilities [0].ability.name;
        
        
// loggaa datan, voi poistaa jos ei tarvitse nähdä tulevaa dataa
       console.log(data);
    } }
// nappaa errorin consoleen, jotta näkee mikä kyseessä, yleensä 404 jos ei löydy.
    catch (error) {
        console.error(error);
    }
}

