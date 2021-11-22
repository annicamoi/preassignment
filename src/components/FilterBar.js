import  { useState } from "react";

const FilterBar = ({ fromNames, onAirlineFilter, onFlightNumberFilter, onfromNameFilter, onDateFilter  }) => {
const [ filters, setFilters] = useState({
    aircraftOwner: "", flightNumber:"", fromName:"", from:"", to:"",
})

const handleInput = (field) =>  (event) => {
    const { value } = event.target;

    setFilters({
        ...filters,
        [field]: value,
    });

    switch (field) {
        case "aircraftOwner":
        onAirlineFilter(value);
        break;
case "flightNumber":
    onFlightNumberFilter(value);
    break;
    case "fromName":
        onfromNameFilter(value);
    break;
    case "from":
        onDateFilter(value);
    break;
    case "to":
        onDateFilter(value);
    break;

default: 
break;
    }
};

    return (
    <div className="row my-5">
        <div className="col">
            <h4 className="border-bottom">Filters</h4>
            </div>

        <div className="col-sm-12 my-2">
            <label htmlFor="airline">Airline "AY"</label>
            <input type="text" className="form-control" id="aircraftOwner"
            value={filters.aircraftOwner}
            onChange={handleInput("aircraftOwner")} />
        </div>

<div className="col-sm-12 my-2">
    <label htmlFor="flightNumber">Flight Number</label>
    <input type="text" className="form-control" id="flightNumber" 
    onChange={handleInput("flightNumber")}
    />
</div>

<div className="col-sm-12 my-2">
    <label htmlFor="destination">Destination</label>
    <select className="form-control" id="fromName"
    onChange={handleInput("fromName")}>
        <option value="">Select</option>
{fromNames.map(fromName => (
    <option value={fromName} key={fromName}>
        {fromName}
        </option>
))}
    </select>
</div>

<div className="col-sm-12 my-2">
    <label htmlFor="startDate">From</label>
    <input type="date" className="form-control" id="startDate" onChange={handleInput("from")} />
</div>
<div className="col-sm-12 my-2">
    <label htmlFor="endDate">To</label>
    <input type="date" className="form-control" id="endDate" onChange={handleInput("to")} />
</div>
    </div>
);

};

export default FilterBar;
