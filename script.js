function getpoke() {
    const pokemon = $("#pokemonInput").val();
   
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`).then(result => {
       
        $(".pokemon_error").remove();
        $(".card").remove();
        $(".card-moves").remove();
        $("body").append(`
            <div class="card">
                <div class="image-container">
                    <img src="${result.data.sprites.front_default}" alt="img_pokeio">
                </div>
                <div class="text-container">
                    <p>Nome: ${result.data.name.toUpperCase()}</p>
                    <p>Experiência: ${result.data.base_experience}</p>
                    <p>Movimentos: ${result.data.moves.length} <label class="movimentos">> Listar</label></p>
                    <p>Peso: ${result.data.weight}</p>
                    <p>Altura: ${result.data.height}</p>
                </div>
            </div>
        `);
        $("body").append(`
            <ol class="card-moves">
            </ol>
        `);
        result.data.moves.forEach(element => {
            $(".card-moves").append(`<li>${element.move.name.toUpperCase()}</li>`)
            
        });
        $(".movimentos").click(function (e) { 
           $(".card-moves").css({
            "display": "block"
           });
        });

        // Limpa o campo de entrada após a pesquisa
        $("#pokemonInput").val('');
        $("#pokemonInput").focus();

    }).catch(error => {
        
        if (error.response) {
            $(".pokemon_error").remove();
            $(".card").remove();
            $(".card-moves").remove();
            $("body").append(`<h1 class="pokemon_error">Pokemon não encontrado.</h1>`);
        }
    })
}
