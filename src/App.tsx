import { Router } from "./Router";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useAppSelector } from "./store/store";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SnackbarProvider } from "notistack";
import { ConfirmProvider } from "material-ui-confirm";
import { Header } from "./components/common/Header";
import { BrowserRouter } from "react-router-dom";
import { getCurrentTheme } from "./styles/theme";

const queryClient = new QueryClient();

function App() {
  const { themeMode } = useAppSelector((state) => state.theme);
  const currentTheme = getCurrentTheme(themeMode);
  return (
    <AppLayout>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <SnackbarProvider maxSnack={3}>
          <ConfirmProvider>
            <ThemeProvider theme={currentTheme}>
              <BrowserRouter>
                <Header />
                <Router />
              </BrowserRouter>
            </ThemeProvider>
          </ConfirmProvider>
        </SnackbarProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </AppLayout>
  );
}

const AppLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
`;

export default App;
