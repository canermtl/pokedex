import { useState } from "react";
import PokemonList from "./PokemonList";
import PageCounter from "../components/PageCounter";
import SearchBar from "../components/SearchBar";
import FilterByType from "../components/FilterByType";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");

  return (
    <div className="min-h-screen flex justify-center py-12">
      <div className="w-full max-w-screen-lg px-4">
        <div className="flex flex-col gap-6">
          <FilterByType onClick={setSelectedType} />
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
          <PokemonList searchTerm={searchTerm} selectedType={selectedType} />
          <PageCounter />
        </div>
      </div>
    </div>
  );
};

export default Home;
