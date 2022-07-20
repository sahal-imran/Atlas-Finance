import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  // breakpoints: {
  //   values: {
  //     xs: 0,
  //     sm: 600,
  //     md: 900,
  //     lg: 1350,
  //     lgBig: 1450,
  //     xl: 1500,
  //     xxl: 1700,
  //   },
  // },
});

function index() {
  return (
    <>
      <div style={{ fontWeight: 400, fontStyle: "normal", fontSize: "50px" }}>
        bvhsfbvhsfhvfhbvhsfvhsf
      </div>
      <div
        style={{
          fontFamily: ["Axiforma", "Open Sans"],
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: "50px",
        }}
      >
        bvhsfbvhsfhvfhbvhsfvhsf
      </div>
    </>
  );
}

export default index;
