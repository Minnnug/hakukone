async function getdata() {
    try {
        const name = document.getElementById("searchtext").value;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)

        if(!response.ok) {
            document.getElementById("error").innerHTML = "Check the spelling!";
            function restart() {
                location.reload();
            }
            
        } 
        else {

        document.getElementById("error").style.display = "none";

        const data = await response.json();
        const image = data.sprites.front_default;
        const imgElement = document.getElementById("img");

        imgElement.src = image;
        imgElement.style.display = "block";

        const image2 = data.sprites.front_shiny;
        const img2element = document.getElementById("img2");

        img2element.src = image2;
        img2element.style.display = "block";

        document.querySelector(".type").innerHTML = "Pokemon type:" + " " + data.types [0].type.name;
        document.querySelector(".weight").innerHTML = "Pokemon weight:" + " " + data.weight;
        document.querySelector(".ability").innerHTML = "Main ability:" + " " + data.abilities [0].ability.name;
        
        

       console.log(data);
    } }
    catch (error) {
        console.error(error);
    }
}

