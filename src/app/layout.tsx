import type { Metadata } from "next";
import Head from "next/head";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/styles";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { ReactQueryProvider } from "@/providers/query-client-provider";
import { NavBar } from "@/components/common/";
import { SessionCustomProvider } from "@/providers";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <Head>
        <title>Grocery Manager</title>
        <meta
          name="description"
          content="This app aimed to help you to manage your grocery list"
        />
        <meta
          name="keywords"
          content="grocery, list, shopping, management, food"
        />
      </Head>
      <body style={{ margin: 0 }}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <ReactQueryProvider>
              <SessionCustomProvider>
                <NavBar />
                {children}
                <ToastContainer />
              </SessionCustomProvider>
            </ReactQueryProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};

export default RootLayout;
