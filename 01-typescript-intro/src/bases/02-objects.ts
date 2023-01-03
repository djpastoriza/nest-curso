export const pokemonIds: number[] = [1, 20, 30, 34, 66];
pokemonIds.push(+"10"); // el + adelante transforma el dato a un numero

interface Pokemon {
  id: number;
  name: string;
  age?:number;
}

export const pokemon: Pokemon = {
  id: 1,
  name: "bulbasur",
};

