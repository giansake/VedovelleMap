import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import locations from "../assets/locations.json";

const positions = locations.map((loc) => [loc.LAT_Y_4326, loc.LONG_X_4326]);

const Map = ({ height }) => {
  return (
    <MapContainer
      center={positions[0]}
      zoom={13}
      scrollWheelZoom={false}
      style={{
        height: height,
        width: "100%",
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {positions.map((position, index) => {
        const link =
          "https://www.google.it/maps?q=" + position[0] + "," + position[1];
        return (
          <Marker key={index} position={position}>
            <Popup>
              <div className="popup-content-wrapper">
                <h2>{locations[index].NIL}</h2>
                <h3>CAP: {locations[index].CAP}</h3>
                <a href={link} target="_blank" rel="noreferrer">
                  Vai &rarr;
                </a>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map;
