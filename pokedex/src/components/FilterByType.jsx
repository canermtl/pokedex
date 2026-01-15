import typeColors from "../data/typeColors";
import { Chip } from "@mui/material";

const FilterByType = ({ onClick }) => {
  const types = Object.keys(typeColors);

  return (
    <div className="mb-6">
      <div className="flex flex-wrap items-center justify-center gap-1">
        <Chip label="All" onClick={() => onClick("")} size="small" variant="outlined" />
        {types.map((type) => (
          <Chip
            key={type}
            label={type}
            onClick={() => onClick(type)}
            size="small"
            sx={{
              backgroundColor: typeColors[type],
              color: "white",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterByType;
