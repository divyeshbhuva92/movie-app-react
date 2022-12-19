import "./App.css";
import { useState } from "react";
// import { Welcome } from "./Welcome";
import { MovieList } from "./MovieList";
import { AddMovie } from "./AddMovie";
import { INITIAL_MOVIE_LIST } from "./INITIAL_MOVIE_LIST";
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
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

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            MOVIE-APP
          </Typography>
          <Search>
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

      {/* <AddMovie setmoviesList={setmoviesList} moviesList={moviesList} /> */}

      {/* find text if it present in movie names */}
      <MovieList
        movies={moviesList.filter((mv) =>
          mv.name.toLowerCase().includes(search.toLowerCase())
        )}
      />
    </div>
  );
}

export default App;
