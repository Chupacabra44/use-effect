import "./Main.css";

const Main = ({
  picture,
  name,
  email,
  phone,
  location,
  registered,
  getData,
}) => {
  return (
    <div className="cardWrapper">
      <div className="cardMain">
        <div cardHeader>
          <img src={picture?.large} alt="" />
          <h1>
            {name?.first} {name?.last}
          </h1>
        </div>
        <div className="cardMiddle">
          <h3>{email}</h3>
          <h3>{phone}</h3>
          <h3>
            {location?.city} / {location?.country}
          </h3>
        </div>
        <div className="cardFooter">
          <p>Age: {registered?.age}</p>
          <p>{new Date(registered?.date).toLocaleDateString("en-GB")}</p>
        </div>
      </div>
      <button onClick={getData}>Get Data</button>
    </div>
  );
};

export default Main;
