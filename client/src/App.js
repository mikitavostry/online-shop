import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";

const { BrowserRouter } = require("react-router-dom");

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
