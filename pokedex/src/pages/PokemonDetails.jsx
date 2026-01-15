import { useParams, useNavigate } from "react-router-dom";
import PokemonCard from "../components/PokemonCard";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const PokemonDetails = () => {
  const { pokemonName } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex justify-center py-12">
      <div className="w-full max-w-screen-md px-4">
        <div className="mb-4">
          <Button
            variant="contained"
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate("/")}
            size="small"
          >
            Listeye Don
          </Button>
        </div>
        <PokemonCard name={pokemonName} showDetails={true} />
      </div>
    </div>
  );
};

export default PokemonDetails;
