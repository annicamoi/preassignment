import dayjs from "dayjs";
import image from "../assets/finnairwindow.jpg";

const FlightItem = ({ item }) => {
    return (
        <div className="col-sm-4">
        <div className="card my-2">
        <img src={image} className="card-img-top" alt="" />
        <div className="card-body">
        <h5 className="card-title">
        {item?.from} {item?.to}
        </h5>
        <p className="card-text">{item?.aircraftOwner}</p>
        <p className="card-text">{item?.flightNumber}</p>
        <p className="card-text">{dayjs(item?.flightDateUTC).format("YYYY-MM-DD")}
        </p>
        </div>
        </div>
        </div>
    );
};

export default FlightItem;