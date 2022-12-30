import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "./globle";

export function EditMovie() {
  const { id } = useParams();

  const [movie, setmovie] = useState(null);
  useEffect(() => {
    fetch(`${API}/movies/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((mv) => {
        setmovie(mv);
      });
  }, [id]);

  return movie ? <EditMovieForm movie={movie} /> : "Loading...";
}

function EditMovieForm({ movie }) {
  const [name, setName] = useState(movie.name);
  const [rating, setRating] = useState(movie.rating);
  const [poster, setPoster] = useState(movie.poster);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTrailer] = useState(movie.trailer);
  const navigate = useNavigate();

  const editMovie = () => {
    const updateMovies = {
      name,
      poster,
      rating,
      summary,
      trailer,
    };

    fetch(`${API}/movies/${movie.id}`, {
      method: "PUT",
      body: JSON.stringify(updateMovies),
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then(() => navigate("/movies"));
  };

  return (
    <div className="add-movie-form">
      <TextField
        label="Name"
        className="add-movie-input"
        placeholder="Name"
        size="small"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <TextField
        label="Rating"
        className="add-movie-input"
        placeholder="Rating"
        size="small"
        value={rating}
        onChange={(event) => setRating(event.target.value)}
      />
      <TextField
        label="Poster URL"
        className="add-movie-input"
        placeholder="Poster URL"
        size="small"
        value={poster}
        onChange={(event) => setPoster(event.target.value)}
      />
      <TextField
        label="Summary"
        className="add-movie-input"
        placeholder="Summary"
        size="small"
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
      />
      <TextField
        label="Trailer URL"
        className="add-movie-input"
        placeholder="Trailer"
        size="small"
        value={trailer}
        onChange={(event) => setTrailer(event.target.value)}
      />

      <Button
        className="add-movie-btn"
        variant="contained"
        size="small"
        onClick={editMovie}
      >
        Save
      </Button>
    </div>
  );
}
