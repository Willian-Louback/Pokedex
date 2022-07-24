var form = document.querySelector('.input');
var envio = document.querySelector('.envio');
const gif = document.querySelector('.gif-pokemom');
document.querySelector('.numero').innerHTML = "1";
document.querySelector('.nome').innerHTML = "Bulbasaur";
gif.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif";

form.addEventListener('submit', async(event) => {
    event.preventDefault();
    document.querySelector('.nome').innerHTML = "Carregando..."
    document.querySelector(".numero").style.display = "none";
    document.querySelector(".traco").style.display = "none";
    const resposta = document.querySelector('.envio').value.toLowerCase();
    const link = await fetch("https://pokeapi.co/api/v2/pokemon/" + resposta);
    if(link.status != 200){
        gif.src = "";
        document.querySelector(".nome").innerHTML = "Não encontrei :(";
    } else if (envio.value == ""){
        gif.src = "";
        document.querySelector(".nome").innerHTML = "(Insira algum valor)";
    }else{
        const data = await link.json();
        var id = document.querySelector(".numero").innerHTML = data.id;
        document.querySelector('.numero').style.display = "inline-block";
        document.querySelector('.traco').style.display = "inline-block";
        const nome = document.querySelector(".nome");
        nome.innerHTML = data.name[0].toUpperCase() + data.name.slice(1);
        gif.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/" + id + ".gif";
    }
    envio.value = "";
});