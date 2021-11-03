import "./App.css";
import Examples from "./lib/Examples";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(fas, far, fab);

function App() {
  return (
    <div className="App">
      <div className="container">
        <Examples />
        </div>
    </div>
  );
}

export default App;
