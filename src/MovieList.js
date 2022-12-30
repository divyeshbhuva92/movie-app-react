import { Movie } from "./Movie";
import { useState, useEffect } from "react";
import { API } from "./globle";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

export function MovieList() {
  const [moviesList, setmoviesList] = useState([]);

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
        />
      ))}
    </div>
  );
}
