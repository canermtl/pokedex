import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const PokemonDetails = lazy(() => import("./pages/PokemonDetails"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="p-8 text-center text-slate-600">Yukleniyor...</div>
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:pokemonName" element={<PokemonDetails />} />
      </Routes>
    </Suspense>
  );
}

export default App;
