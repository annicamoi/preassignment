import { useState } from "react";
import dayjs from "dayjs";

import './App.css';
import FlightItem from './components/FlightItem';
import { data } from "./MOCK_DATA";
import FilterBar from './components/FilterBar';

const isSameOrAfter = require("dayjs/plugin/isSameOrAfter");
const isSameOrBefore = require("dayjs/plugin/isSameOrBefore");
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);


function App() {
const [allData, setData] = useState(data);


  const generateRouteDataForDropdown = () => {
    return [...new Set(data.map((item) => item.fromName))];
  };

const handleFilterAirline = (aircraftOwner) => {
const filteredData = data.filter(item => {
  const aircraftOwner = `${item.aircraftOwner} ${item.carrier}`;
  if (aircraftOwner.toLowerCase().includes(aircraftOwner.toLowerCase())) {
    return item;
  }
});
setData(filteredData);

};

const handleFilterFlightNumber = (flightNumber, carrier) => {
  const filteredData = data.filter(item => {
    const flightNumber = `${item.flightNumber} ${item.carrier}`;
    if (flightNumber.toLowerCase().includes(flightNumber.toLowerCase())) {
      return item;
    }
});

setData(filteredData);
};

const handleFilterfromName = (fromName) => {
  const filteredData = data.filter((item) => {
    if (item.fromName === fromName) {
      return item;
    }
  });

  setData(filteredData);
};

const handleFilterDate = (flightDateUTC, field) => {
  const filteredData = data.filter((item) => {
    if (field === "from" && dayjs(item.flightDateUTC).isSameOrAfter(dayjs(flightDateUTC))) {
      return item;
    }
  });

  setData(filteredData);
};

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-3">
          <FilterBar fromNames={generateRouteDataForDropdown()} onAirlineFilter={handleFilterAirline}
          onFlightNumberFilter={handleFilterFlightNumber}
          onFromNameFilter={handleFilterFlightNumber}
          onDateFilter={handleFilterDate}
          />
        </div>
        <div className="col-sm-9">
          <div className="row mt-5">
            {allData.map((item) => (
              <FlightItem item={item} key={item.stdUTC} />
             ))}
          </div>
        </div>
        </div>
        </div>
  );
}
    
export default App;
