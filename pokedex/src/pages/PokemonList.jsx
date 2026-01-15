import { useSelector } from "react-redux";
import PokemonCard from "../components/PokemonCard";
import { NavLink } from "react-router-dom";
import { useGetPokemonListQuery } from "../services/pokemon";
import { pokemonTypes } from "../data/pokemonTypes";
import { CircularProgress } from "@mui/material";

const PokemonList = ({ searchTerm = "", selectedType = "" }) => {
  const currentPage = useSelector((state) => state.counter.value);
  const pokemonsPerPage = useSelector((state) => state.counter.pokemonsPerPage);

  const { data, isLoading, error } = useGetPokemonListQuery(1350);

  if (isLoading) return <CircularProgress size={48} />;
  if (error) return <div className="text-center py-8">Hata olustu.</div>;

  const filteredPokemons = data.results.filter((pokemon) => {
    const matchesSearch = pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
    if (!selectedType) return matchesSearch;

    const types = pokemonTypes[pokemon.name.toLowerCase()];
    const matchesType = types && types.includes(selectedType.toLowerCase());
    return matchesSearch && matchesType;
  });

  const startIndex = (currentPage - 1) * pokemonsPerPage;
  const endIndex = startIndex + pokemonsPerPage;
  const currentPokemons = filteredPokemons.slice(startIndex, endIndex);

  return (
    <div className="mb-10 px-2">
      <div className="grid grid-cols-10 gap-4 mx-auto max-w-screen-2xl justify-items-center">
        {currentPokemons.map((pokemon) => (
          <NavLink
            key={pokemon.name}
            to={`/details/${pokemon.name}`}
            className="block"
          >
            <PokemonCard name={pokemon.name} showDetails={false} />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
