import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/counterSlice";
import { Button } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const PageCounter = () => {
  const currentPage = useSelector((state) => state.counter.value);
  const totalPages = useSelector((state) => state.counter.totalPages);
  const dispatch = useDispatch();

  const handlePrevious = () => {
    dispatch(decrement());
  };

  const handleNext = () => {
    dispatch(increment());
  };

  return (
    <div className="my-6">
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button
          variant="contained"
          onClick={handlePrevious}
          disabled={currentPage === 1}
          startIcon={<NavigateBeforeIcon />}
          size="small"
        >
          Onceki
        </Button>

        <div className="rounded-full bg-white px-3 py-1">
          <span className="text-sm">
            {currentPage} / {totalPages}
          </span>
        </div>

        <Button
          variant="contained"
          onClick={handleNext}
          disabled={currentPage === totalPages}
          endIcon={<NavigateNextIcon />}
          size="small"
        >
          Sonraki
        </Button>
      </div>
    </div>
  );
};

export default PageCounter;
