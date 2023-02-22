var form = document.querySelector('.input');
var envio = document.querySelector('.envio');
const gif = document.querySelector('.gif-pokemon');
var id = document.querySelector('.numero');
id = document.querySelector('.numero').innerHTML = "1";
document.querySelector('.nome').innerHTML = "Bulbasaur";
gif.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif";

form.addEventListener('submit', async(event) => {
    event.preventDefault();
    document.querySelector('.nome').innerHTML = "Carregando...";
    document.querySelector('.gif-pokemon').src = "../imagens/loading-gif.webp";
    document.querySelector(".numero").style.display = "none";
    document.querySelector(".traco").style.display = "none";
    const resposta = document.querySelector('.envio').value.toLowerCase();
    const link = await fetch("https://pokeapi.co/api/v2/pokemon/" + resposta);
    //Início da zoeira
if (envio.value == "mitodex22"){
    const bolsonaro = gif;
    bolsonaro.style.maxHeight = "107%";
    bolsonaro.style.maxWidth = "100%";
    bolsonaro.src = "https://trybun.org.pl/wp-content/uploads/2019/01/xbolsonaro6-1024x726.jpg.pagespeed.ic.b3psIF2KE1.jpg";
   document.querySelector(".nome").innerHTML = "#MITOO :D";
    id = "";
} else{
    gif.style.maxHeight = "70%";
    gif.style.maxWidth = "90%";
    //fim da zoeira
    if(link.status != 200){
        gif.src = "../imagens/Psyduck-confuso-error.png";
        document.querySelector(".nome").innerHTML = "Não encontrei :(";
        id = "";
    } else if (envio.value == ""){
        gif.src = "../imagens/Psyduck-confuso-error.png";
        document.querySelector(".nome").innerHTML = "(Insira algum valor)";
        id = "";
    } else {
        const data = await link.json();
        id = data.id; console.log(id);
        document.querySelector('.numero').innerHTML = id;
        document.querySelector('.numero').style.display = "inline-block";
        document.querySelector('.traco').style.display = "inline-block";
        const nome = document.querySelector(".nome");
        nome.innerHTML = data.name[0].toUpperCase() + data.name.slice(1);
        if (650 <= id && id <= 898){
            gif.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png";
        } else if(id > 898){
            gif.src = "../imagens/Psyduck-confuso-error.png";
            alert("Este Pokémon ainda não possui sprite...");
        } else {
            gif.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/" + id + ".gif";
        }
    }
}
    envio.value = "";
});
function shiny(){
    if(id != "" && id >= 1 && id <= 649){
        gif.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/" + id + ".gif";
    } else if(id != "" && id >= 150 && id <= 898){
        gif.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/"+ id + ".png";
    } else if (id == ""){
        alert("Escolha algum Pokémon primeiro...")
    }
}
// link shiny charizard https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/6.gif
//const id = document.querySelector(".numero").innerHTML = data.id;
//https://media1.tenor.com/images/8abb5d56a61f8d25639b087bb505c412/tenor.gif?itemid=10813661