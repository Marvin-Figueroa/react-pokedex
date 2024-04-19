import { ItemResource } from "./usePokemons";
import useData from "./useData";

const usePokemonTypes = () => useData<ItemResource>('/type')

export default usePokemonTypes