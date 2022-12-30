// import React from "react";
// import { useFormik } from "formik";
// import * as yup from "yup";

// export function BasicForm() {
//   const formvalidationSchema = yup.object().shape({
//     email: yup
//       .string()
//       .matches(
//         /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
//         "Pattern not matched."
//       )
//       .required("Email is required"),
//     password: yup
//       .string()
//       .min(8, "Password must be more than 8 characters")
//       .max(16, "Password must be less than 16 characters")
//       .required("Password is required"),
//   });

//   const formik = useFormik({
//     initialValues: { email: "", password: "" },
//     validationSchema: formvalidationSchema,
//     onSubmit: (values) => {
//       console.log("onSubmit", values);
//     },
//   });

//   return (
//     <div>
//       <form onSubmit={formik.handleSubmit}>
//         <input
//           id="email"
//           type="email"
//           name="email"
//           placeholder="Email"
//           helperText={
//             formik.touched.email && formik.errors.email
//               ? formik.errors.email
//               : ""
//           }
//           error={formik.touched.email && formik.errors.email}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.email}
//         />
//         <input
//           id="password"
//           type="password"
//           name="password"
//           placeholder="Password"
//           helperText={
//             formik.touched.password && formik.errors.password
//               ? formik.errors.password
//               : ""
//           }
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.password}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }
