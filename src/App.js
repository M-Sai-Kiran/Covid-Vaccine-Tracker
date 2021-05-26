import "./styles.css";
import { useEffect } from "react";
import { useIntervalSearch } from "./hooks/searchHook";

export default function App() {
  const {
    nearbyCenters,
    startSearch,
    looking,
    stopSearch
  } = useIntervalSearch();

  const vaccineCount = (sessions) =>
    sessions.reduce(
      (total, current) => total + current.available_capacity_dose1,
      0
    );

  useEffect(() => {
    if (nearbyCenters.length) alert("Vaccines Available");
  }, [nearbyCenters]);

  return (
    <div className="App">
      <button onClick={startSearch}>Start Looking for Centers</button>
      <button onClick={stopSearch}>Stop Looking for centers</button>

      {nearbyCenters.length ? (
        <ol>
          {nearbyCenters.map((center) => (
            <li key={center.center_id}>{`${
              center.name
            } - Vaccine Count : ${vaccineCount(center.sessions)}`}</li>
          ))}
        </ol>
      ) : looking ? (
        <span>Looking ....</span>
      ) : (
        <></>
      )}
    </div>
  );
}
