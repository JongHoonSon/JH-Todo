import { Router } from "./Router";
import styled from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <AppLayout>
      <GlobalStyles />
      <Router />
    </AppLayout>
  );
}

const AppLayout = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: tomato;
`;

export default App;
