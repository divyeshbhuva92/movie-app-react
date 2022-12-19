import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export function AddMovie({ setmoviesList, moviesList }) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [poster, setPoster] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");

  const addMovie = () => {
    const newMovies = {
      name,
      poster,
      rating,
      summary,
      trailer,
    };
    console.log(newMovies);
    setmoviesList([...moviesList, newMovies]);
  };

  return (
    <div className="add-movie-form">
      <TextField
        label="Name"
        className="add-movie-input"
        placeholder="Name"
        size="small"
        defaultValue={name}
        onChange={(event) => setName(event.target.value)}
      />
      <TextField
        label="Rating"
        className="add-movie-input"
        placeholder="Rating"
        size="small"
        defaultValue={rating}
        onChange={(event) => setRating(event.target.value)}
      />
      <TextField
        label="Poster URL"
        className="add-movie-input"
        placeholder="Poster URL"
        size="small"
        defaultValue={poster}
        onChange={(event) => setPoster(event.target.value)}
      />
      <TextField
        label="Summary"
        className="add-movie-input"
        placeholder="Summary"
        size="small"
        defaultValue={summary}
        onChange={(event) => setSummary(event.target.value)}
      />
      <TextField
        label="Trailer URL"
        className="add-movie-input"
        placeholder="Trailer"
        size="small"
        defaultValue={trailer}
        onChange={(event) => setTrailer(event.target.value)}
      />

      <Button
        className="add-movie-btn"
        variant="contained"
        size="small"
        onClick={addMovie}
      >
        Add Movie
      </Button>
    </div>
  );
}
