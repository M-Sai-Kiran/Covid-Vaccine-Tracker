import { useState } from "react";
import axios from "axios";
import { useInterval } from "./intervalHook";
import { centerValidation } from "../validations";

export function useIntervalSearch() {
  const [nearbyCenters, setNearbyCenters] = useState([]);
  const { start, inProgress, stop } = useInterval(20000);

  const getCenters = () => {
    let [month, date, year] = new Date().toLocaleDateString().split("/");
    const formattedDate = `${date}-${month < 10 ? "0" + month : month}-${year}`;
    const requestUrl = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByDistrict?district_id=596&date=${formattedDate}`;
    axios
      .get(requestUrl)
      .then((data) => setNearbyCenters(filterCenters(data.data.centers)));
  };

  const filterCenters = (centers) => {
    return centers.filter((center) => centerValidation(center));
  };

  const startSearch = () => {
    start(getCenters);
  };

  return { nearbyCenters, startSearch, stopSearch: stop, looking: inProgress };
}
