// import { useState } from "react";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import { useFormik } from "formik";
// import * as yup from "yup";

// export function AddMovie({ setmoviesList, moviesList }) {
//   // const [name, setName] = useState("");
//   // const [rating, setRating] = useState("");
//   // const [poster, setPoster] = useState("");
//   // const [summary, setSummary] = useState("");
//   // const [trailer, setTrailer] = useState("");

//   const addMovie = () => {
//     const newMovies = {
//       name,
//       poster,
//       rating,
//       summary,
//       trailer,
//     };
//     console.log(newMovies);
//     setmoviesList([...moviesList, newMovies]);
//   };

//   const movievalidationSchema = yup.object({
//     name: yup.string().required("Please enter a name."),
//     poster: yup
//       .string()
//       .min(8, "Please enter proper poster URL.")
//       .required("Poster is required."),
//     rating: yup
//       .number()
//       .min(0, "Rating must be between 1 to 10.")
//       .max(10, "Rating must be between 1 to 10.")
//       .required("Rating is required."),
//     summary: yup
//       .string()
//       .min(20, "Please enter longer summary description.")
//       .required("summary is required."),
//     trailer: yup
//       .string()
//       .min(8, "Please enter proper trailer URL.")
//       .required("Trailer is required."),
//   });

//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       poster: "",
//       rating: "",
//       summary: "",
//       trailer: "",
//     },
//     validationSchema: movievalidationSchema,
//     onSubmit: (values) => {
//       console.log("onSubmit", values);
//     },
//   });

//   return (
//     <div className="add-movie-form">
//       <TextField
//         id="email"
//         type="email"
//         name="email"
//         placeholder="Email"
//         helperText={
//           formik.touched.email && formik.errors.email ? formik.errors.email : ""
//         }
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.email}
//         label="Name"
//         size="small"
//       />
//       <TextField
//         label="Rating"
//         className="add-movie-input"
//         placeholder="Rating"
//         size="small"
//         defaultValue={rating}
//         onChange={(event) => setRating(event.target.value)}
//       />
//       <TextField
//         label="Poster URL"
//         className="add-movie-input"
//         placeholder="Poster URL"
//         size="small"
//         defaultValue={poster}
//         onChange={(event) => setPoster(event.target.value)}
//       />
//       <TextField
//         label="Summary"
//         className="add-movie-input"
//         placeholder="Summary"
//         size="small"
//         defaultValue={summary}
//         onChange={(event) => setSummary(event.target.value)}
//       />
//       <TextField
//         label="Trailer URL"
//         className="add-movie-input"
//         placeholder="Trailer"
//         size="small"
//         defaultValue={trailer}
//         onChange={(event) => setTrailer(event.target.value)}
//       />

//       <Button
//         className="add-movie-btn"
//         variant="contained"
//         size="small"
//         onClick={addMovie}
//       >
//         Add Movie
//       </Button>
//     </div>
//   );
// }
