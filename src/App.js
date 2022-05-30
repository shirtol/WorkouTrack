import Login from "./components/login/Login";
import SchedulerWrapper from "./components/Scheduler/Scheduler";
import app from "./service/firebase";

function App() {
    return (
        <div className="App">
            <SchedulerWrapper></SchedulerWrapper>
            {/* <Login></Login> */}
        </div>
    );
}

export default App;
