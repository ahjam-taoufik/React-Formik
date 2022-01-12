import "./App.css";
import {extendTheme, ChakraProvider } from "@chakra-ui/react";
import LoginForm from "./components/LoginForm";

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })

function App() {
  return (

    <ChakraProvider theme={theme}>
      <div className="App">
        <LoginForm/>
      </div>
    </ChakraProvider>
  );
}

export default App;
