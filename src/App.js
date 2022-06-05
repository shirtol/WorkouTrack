import Login from "./components/login/Login";
import Routes from "./pages/routes/Routes";
import app from "./service/firebase";
import "normalize.css";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Routes></Routes>
        </div>
    );
}

export default App;
