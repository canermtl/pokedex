import { TextField } from "@mui/material";
const SearchBar = ({ value, onChange }) => {
  return (
    <div className="w-full">
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search Pokemon..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        size="small"
      />
    </div>
  );
};

export default SearchBar;
