import "./App.css";
import * as React from "react";
import { useState } from "react";
import { MovieList } from "./MovieList";
import { AddMovie } from "./AddMovie";
import { ColorGame } from "./ColorGame";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
// import { INITIAL_MOVIE_LIST } from "./INITIAL_MOVIE_LIST";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { BasicForm } from "./BasicForm";
import { MovieDetails } from "./MovieDetails";

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
  const [moviesList, setmoviesList] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // useEffect(() => {
  //   fetch("https://6371fb0e025414c63702d396.mockapi.io/movieList")
  //     .then((res) => res.json())
  //     .then((mvs) => {
  //       setmoviesList(mvs);
  //     });
  // }, []);

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
        <Route path="*" element={<Navigate replace to="/404" />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Welcome to Movie App</h1>
      <BasicForm />
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
function NotFound() {
  const styles = {
    width: "100%",
    objectFit: "contain",
    maxHeight: "350px",
  };
  return (
    <div>
      <img
        style={styles}
        src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX22636839.jpg"
        alt=""
      />
    </div>
  );
}
export default App;
