import { Router } from "./Router";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useAppSelector } from "./store/store";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SnackbarProvider } from "notistack";
import { ConfirmProvider } from "material-ui-confirm";
import { Header } from "./components/header/Header";
import { BrowserRouter } from "react-router-dom";
import { getCurrentTheme } from "./styles/themeStyles";

const queryClient = new QueryClient();

function App() {
  const { currentThemeMode } = useAppSelector((state) => state.theme);
  const currentTheme = getCurrentTheme(currentThemeMode);
  return (
    <ThemeProvider theme={currentTheme}>
      <AppLayout>
        <GlobalStyles />
        <QueryClientProvider client={queryClient}>
          <SnackbarProvider maxSnack={3}>
            <ConfirmProvider>
              <BrowserRouter>
                <Header />
                <Router />
              </BrowserRouter>
            </ConfirmProvider>
          </SnackbarProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </AppLayout>
    </ThemeProvider>
  );
}

const AppLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor_secondary};
`;

export default App;
