import Login from "./components/login/Login";
import SchedulerWrapper from "./components/Scheduler/Scheduler";
import Routes from "./pages/routes/Routes";
import app from "./service/firebase";
import "normalize.css";
import "./App.css";

function App() {
    return (
        <div className="App">
            {/* <SchedulerWrapper></SchedulerWrapper> */}
            <Routes></Routes>
            {/* <Login></Login> */}
        </div>
    );
}

export default App;
