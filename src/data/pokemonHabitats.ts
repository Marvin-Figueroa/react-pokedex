export interface PokemonHabitat {
  id: number,
  name: string,
  url: string
}

export default [
  {
    id: 1,
  name: "cave",
  url: "https://pokeapi.co/api/v2/pokemon-habitat/1/"
  },
  {
    id: 2,
  name: "forest",
  url: "https://pokeapi.co/api/v2/pokemon-habitat/2/"
  },
  {
    id: 3,
  name: "grassland",
  url: "https://pokeapi.co/api/v2/pokemon-habitat/3/"
  },
  {
    id:4,
  name: "mountain",
  url: "https://pokeapi.co/api/v2/pokemon-habitat/4/"
  },
  {
    id:5,
  name: "rare",
  url: "https://pokeapi.co/api/v2/pokemon-habitat/5/"
  },
  {id:6,
  name: "rough-terrain",
  url: "https://pokeapi.co/api/v2/pokemon-habitat/6/"
  },
  {
    id:7,
  name: "sea",
  url: "https://pokeapi.co/api/v2/pokemon-habitat/7/"
  },
  {id:8,
  name: "urban",
  url: "https://pokeapi.co/api/v2/pokemon-habitat/8/"
  },
  {id:9,
  name: "waters-edge",
  url: "https://pokeapi.co/api/v2/pokemon-habitat/9/"
  }
  ] as PokemonHabitat[]