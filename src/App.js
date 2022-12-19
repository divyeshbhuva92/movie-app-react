import "./App.css";
import { useState } from "react";
// import { Welcome } from "./Welcome";
import { MovieList } from "./MovieList";
import { AddMovie } from "./AddMovie";
import { ColorGame } from "./ColorGame";
import { INITIAL_MOVIE_LIST } from "./INITIAL_MOVIE_LIST";
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useParams,
} from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },

  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function App() {
  // const names = ["Anju", "Hemanth", "Shruthi", "Gautham", "Anis"];
  // const users = INITIAL_USERS_LIST;
  const [moviesList, setmoviesList] = useState(INITIAL_MOVIE_LIST);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={() => navigate("/")}>
            Home
          </Button>
          <Button color="inherit" onClick={() => navigate("/movies")}>
            Movies
          </Button>
          <Button color="inherit" onClick={() => navigate("/movies/add")}>
            Add Movies
          </Button>
          <Button color="inherit" onClick={() => navigate("/colorgame")}>
            Color Game
          </Button>
          <Search sx={{ marginLeft: "auto" }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* redirection :-  films to movies */}
        <Route path="/films" element={<Navigate replace to="/movies" />} />
        <Route
          path="/movies"
          element={
            <MovieList
              movies={moviesList.filter((mv) =>
                mv.name.toLowerCase().includes(search.toLowerCase())
              )}
            />
          }
        />
        <Route path="/colorgame" element={<ColorGame />} />
        <Route
          path="/movies/:id"
          element={<MovieDetails moviesList={moviesList} />}
        />
        <Route
          path="/movies/add"
          element={
            <AddMovie setmoviesList={setmoviesList} moviesList={moviesList} />
          }
        />
        {/* <Route path="*" element={<Navigate replace to="/404" />} />
        <Route path="/404" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Welcome to Movie App</h1>
    </div>
  );
}
function About() {
  return (
    <div>
      <h1>Welcome to About Page</h1>
    </div>
  );
}
// function NotFound() {
//   const styles = {
//     width: "100%",
//     objectFit: "contain",
//     maxHeight: "350px",
//   };
//   return (
//     <div>
//       <img
//         style={styles}
//         src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX22636839.jpg"
//         alt=""
//       />
//     </div>
//   );
// }
function MovieDetails({ moviesList }) {
  const { id } = useParams();
  console.log(id);

  const movie = moviesList[id];
  console.log(movie);
  const { trailer } = movie.trailer;
  console.log(trailer);
  return (
    <div>
      <iframe
        width="100%"
        height="700px"
        src={movie.trailer}
        title={movie.name}
        fr
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <h1>Welcome to trailer of {movie.name}</h1>
    </div>
  );
}
export default App;
