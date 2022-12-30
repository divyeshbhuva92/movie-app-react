import { Counter } from "./Counter";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { StarRounded } from "@mui/icons-material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";

export function Movie({ movie, id, deletebutton }) {
  const styles = {
    color: movie.rating >= 8.5 ? "red" : "black",
  };

  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  return (
    <Card variant="outlined" className="movie-container">
      <CardActionArea>
        <CardMedia
          image={movie.poster}
          alt={movie.name}
          className="movie-poster"
        />
      </CardActionArea>
      <div className="movie-specs">
        <h2 className="movie-name">
          {movie.name}
          <IconButton
            onClick={() => setShow(!show)}
            color="primary"
            // aria-lable="toggle-summary"
          >
            {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>

          <IconButton
            onClick={() => navigate(`/movies/${movie.id}`)}
            color="primary"
            // aria-lable="information"
          >
            <InfoIcon />
          </IconButton>
        </h2>

        <div className="movie-rating-container">
          <StarRounded
            style={{ color: "orange" }}
            fontSize="small"
          ></StarRounded>
          <p style={styles} className="movie-rating">
            {movie.rating}
          </p>
        </div>
      </div>
      <Counter />

      {/* Toggle summary */}
      {show ? <p className="movie-summary">{movie.summary}</p> : null}
      {deletebutton}
    </Card>
  );
}
