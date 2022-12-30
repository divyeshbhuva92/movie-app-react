import { Movie } from "./Movie";
import { useState, useEffect } from "react";
import { API } from "./globle";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import IconButton from "@mui/material/IconButton";

export function MovieList() {
  const [moviesList, setmoviesList] = useState([]);
  const navigate = useNavigate();

  const getmovies = () => {
    fetch(`${API}/movies`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((mvs) => {
        setmoviesList(mvs);
      });
  };
  useEffect(() => getmovies(), []);
  return (
    <div className="movie-list">
      {moviesList.map((mv, index) => (
        <Movie
          key={index}
          movie={mv}
          id={mv.id}
          deletebutton={
            <IconButton
              onClick={() =>
                fetch(`${API}/movies/${mv.id}`, {
                  method: "DELETE",
                }).then(() => getmovies())
              }
              color="primary"
            >
              <DeleteIcon />
            </IconButton>
          }
          editbutton={
            <IconButton
              onClick={
                () => navigate(`/movies/edit/${mv.id}`)
                // fetch(`${API}/movies/edit/${mv.id}`, {
                //   method: "PUT",
                //   body: JSON.stringify(editMovies),
                //   headers: { "content-type": "application/json" },
                // }).then(() => getmovies())
              }
              color="primary"
            >
              <CreateIcon />
            </IconButton>
          }
        />
      ))}
    </div>
  );
}
