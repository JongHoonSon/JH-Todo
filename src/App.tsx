import { Router } from "./Router";
import styled from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SnackbarProvider } from "notistack";
import { ConfirmProvider } from "material-ui-confirm";

const queryClient = new QueryClient();

function App() {
  return (
    <AppLayout>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <SnackbarProvider maxSnack={3}>
            <ConfirmProvider>
              <Router />
            </ConfirmProvider>
          </SnackbarProvider>
        </Provider>
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
