import * as React from "react";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { StarRounded } from "@mui/icons-material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import Stack from "@mui/material/Stack";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "./globle";

export function MovieDetails() {
  const { id } = useParams();

  const [movie, setmovie] = useState({});
  useEffect(() => {
    fetch(`${API}/movies/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((mv) => {
        setmovie(mv);
      });
  }, [id]);

  // const movie = moviesList[id];
  const navigate = useNavigate();
  return (
    <div>
      <div className="movie-trailer">
        <iframe
          width="100%"
          height="700px"
          src={movie.trailer}
          title={movie.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        <div className="movieSpecs">
          <h1>{movie.name}</h1>

          <div className="movie-rating-container">
            <StarRounded
              style={{ color: "orange" }}
              fontSize="small"
            ></StarRounded>
            <p className="rating">{movie.rating}</p>
          </div>
        </div>
        <div>
          <p className="mSummary">{movie.summary}</p>
        </div>
        <div className="back-btn">
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              size="medium"
              onClick={() => navigate(-1)}
              startIcon={<ArrowLeftIcon />}
            >
              Back
            </Button>
          </Stack>
        </div>
      </div>
    </div>
  );
}
