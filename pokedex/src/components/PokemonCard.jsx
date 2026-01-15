import { useGetPokemonDetailsQuery } from "../services/pokemon";
import typeColors from "../data/typeColors";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  CircularProgress,
  LinearProgress,
} from "@mui/material";

const PokemonCard = ({ name, showDetails = true }) => {
  const { data, error, isLoading } = useGetPokemonDetailsQuery(name);

  if (isLoading) return <CircularProgress />;
  if (error) return <div>Yuklenemedi: {name}</div>;

  const pokemonId = `#${String(data.id).padStart(4, "0")}`;

  return (
    <Card
      variant="outlined"
      sx={{
        height: showDetails ? "auto" : 280,
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      {!showDetails && (
        <div className="absolute top-2 right-2 rounded-full bg-slate-900/80 px-2 py-0.5 text-[10px] font-semibold text-white">
          {pokemonId}
        </div>
      )}

      <CardMedia
        component="img"
        image={data.sprites.other["official-artwork"].front_default}
        alt={data.name}
        className="object-contain bg-slate-50"
        sx={{
          height: showDetails ? 260 : 180,
        }}
      />

      <CardContent sx={{ flexGrow: 1 }} className="space-y-3">
        <Typography
          variant={showDetails ? "h5" : "subtitle1"}
          component="div"
          className="capitalize text-center"
        >
          {data.name}
        </Typography>

        {showDetails && (
          <Typography
            variant="body2"
            color="text.secondary"
            className="text-center"
          >
            {pokemonId}
          </Typography>
        )}

        <div className="flex flex-wrap justify-center gap-1">
          {data.types.map((type) => (
            <Chip
              key={type.type.name}
              label={type.type.name}
              size="small"
              sx={{
                backgroundColor: typeColors[type.type.name] || "#94a3b8",
                color: "white",
              }}
            />
          ))}
        </div>

        {!showDetails && (
          <div className="text-center mt-auto">
            <Typography variant="caption" color="text.secondary">
              Total: {data.stats.reduce((sum, stat) => sum + stat.base_stat, 0)}
            </Typography>
          </div>
        )}

        {showDetails && (
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  Height: <span className="font-semibold">{data.height / 10}m</span>
                </div>
                <div>
                  Weight: <span className="font-semibold">{data.weight / 10}kg</span>
                </div>
                <div className="col-span-2">
                  Base Experience: <span className="font-semibold">{data.base_experience}</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Typography variant="subtitle1">Stats</Typography>
              <div className="space-y-3">
                {data.stats.map((stat, index) => {
                  const statColors = ["#ef4444", "#f97316", "#eab308", "#3b82f6", "#8b5cf6", "#ec4899"];
                  return (
                    <div key={stat.stat.name}>
                      <div className="flex justify-between mb-1">
                        <Typography variant="body2" className="capitalize">
                          {stat.stat.name.replace("-", " ")}
                        </Typography>
                        <Typography variant="body2" className="font-semibold">
                          {stat.base_stat}
                        </Typography>
                      </div>
                      <LinearProgress
                        variant="determinate"
                        value={(stat.base_stat / 255) * 100}
                        sx={{
                          height: 6,
                          borderRadius: 4,
                          "& .MuiLinearProgress-bar": {
                            backgroundColor: statColors[index],
                          },
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="space-y-2">
              <Typography variant="subtitle1">Sprites</Typography>
              <div className="grid grid-cols-4">
                <img src={data.sprites.front_default} alt="front" className="w-full rounded" />
                <img src={data.sprites.back_default} alt="back" className="w-full rounded" />
                <img src={data.sprites.front_shiny} alt="front shiny" className="w-full rounded" />
                <img src={data.sprites.back_shiny} alt="back shiny" className="w-full rounded" />
              </div>
            </div>

            <div className="space-y-2">
              <Typography variant="subtitle1">Cries</Typography>
              <audio controls src={data.cries.latest} className="w-full"></audio>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PokemonCard;
