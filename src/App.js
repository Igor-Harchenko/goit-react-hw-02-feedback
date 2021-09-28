import "./App.css";
import Feedback from "./components/feedback/Feedback";

function App() {
  return (
    <div className="App">
      <Feedback goodValue={0} neutralValue={0} badValue={0} />
    </div>
  );
}

export default App;
