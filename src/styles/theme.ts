"use client";

import { Poppins } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const defaultFonts =
  "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;";

export const PoppinsFont = Poppins({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

const DefaultFont = [PoppinsFont.style.fontFamily, defaultFonts].join(", ");

export const theme = createTheme({
  palette: {
    primary: {
      main: "#275437",
    },
    secondary: {
      main: "#E53D00",
    },
    error: {
      main: "#D00000",
    },
    warning: {
      main: "#FFBA08",
    },
    success: {
      main: "#5FAD56",
    },
  },
  typography: {
    fontFamily: DefaultFont,
  },
  spacing: 8,
  shape: {
    borderRadius: 20,
  },
});
