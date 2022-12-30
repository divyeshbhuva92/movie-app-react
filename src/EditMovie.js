import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API } from "./globle";
import { EditMovieForm } from "./EditMovieForm";

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
