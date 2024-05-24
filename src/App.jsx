import Map from "./components/Map";
import useResizeObserver from "use-resize-observer";

import "leaflet/dist/leaflet.css";
import "./App.css";

function App() {
  const { ref, height = 1 } = useResizeObserver();

  return (
    <div ref={ref} className="page-container">
      {height > 1 && <Map height={height} />}
    </div>
  );
}

export default App;
