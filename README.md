# Sobre
```
  Este projeto é um aplicativo web chamado “Pokemon Cards”. Ele permite que os usuários pesquisem informações sobre Pokémons usando a API do PokeAPI.co. O aplicativo foi construído usando HTML, CSS e JavaScript, com a ajuda das bibliotecas Axios e jQuery.

  Ao inserir o nome de um Pokémon (em inglês) no campo de entrada e clicar no botão “Pesquisar”, o aplicativo faz uma solicitação GET para a API do PokeAPI.co e recupera informações sobre o Pokémon especificado. Essas informações incluem o nome do Pokémon, a experiência base, o número de movimentos, o peso e a altura. Além disso, uma imagem do Pokémon é exibida.

  Um recurso interessante é a lista de movimentos do Pokémon. Ao lado do número de movimentos, há um link “Listar”. Quando o usuário clica neste link, uma janela é exibida com todos os movimentos do Pokémon.

  Se o Pokémon especificado não for encontrado, o aplicativo exibe uma mensagem de erro ao usuário.

  O layout do aplicativo é controlado usando CSS. Ele apresenta um cabeçalho na parte superior da página, um formulário de entrada no centro e um cartão que é usado para exibir as informações do Pokémon. O cartão é inicialmente oculto e só é exibido quando as informações do Pokémon são recuperadas.

  Compatível somente com telas de desktop e notebooks. Em breve  ajustes serão adicionados para dispositivos móveis.
```

## Bibliotecas utilizadas

```
Axios
JQuery
```

## Sobre as bibliotecas

**Axios**
```
  Axios é uma biblioteca JavaScript muito popular que é usada para fazer solicitações HTTP a partir do navegador e do Node.js. Ela oferece uma API fácil de usar para fazer solicitações GET, POST e outros tipos de solicitações HTTP. No contexto deste projeto, o Axios é usado para fazer
solicitações à API do PokeAPI.co e recuperar dados sobre Pokémons.
```

**JQuery**
```
  jQuery é uma biblioteca JavaScript rápida, pequena e rica em recursos. Ela simplifica a manipulação de documentos HTML, o tratamento de eventos, a animação e muito mais, oferecendo uma API fácil de usar que funciona em uma infinidade de navegadores. Com uma combinação de versatilidade e extensibilidade, o jQuery mudou a maneira como milhões de pessoas escrevem JavaScript. Neste projeto, o jQuery é usado para manipular elementos DOM e lidar com eventos de usuário.
```

# Documentação

### Pesquisar Pokemon

```
  GET https://pokeapi.co/api/v2/pokemon/"nome do pokemon"
```


| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `nome do pokemon` | `string` | Envia o nome do pokemon no endereço |

| `Caso tudo ocorra bem retorna dados do pokemon` |
| :-|

| `Caso o pokemon informado não exista retorna o erro ao usuário` |
| :-|

# Sobre o pokeapi.co
```
  PokeAPI.co é uma API RESTful que fornece dados sobre o universo Pokémon. É como uma enorme enciclopédia Pokémon na internet. A API contém informações sobre todos os Pokémon conhecidos, incluindo detalhes como nome, experiência base, movimentos, peso e altura.

  A API é projetada para ser fácil de usar e é amplamente utilizada para projetos de desenvolvimento web relacionados ao Pokémon1. Além disso, a PokeAPI.co oferece suporte a GraphQL, uma linguagem de consulta para APIs que permite aos clientes solicitar exatamente os dados de que precisam.

  O código-fonte e a documentação para a PokeAPI.co estão disponíveis no GitHub, permitindo que desenvolvedores e entusiastas contribuam para o projeto.
```
