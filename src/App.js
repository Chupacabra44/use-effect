import { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

const App = () => {
  const [user, setUser] = useState("");

  const getData = () => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => setUser(data.results[0]));
  };

  useEffect(() => {
    getData();
  }, []);

  const { name, email, picture } = user;

  return (
    <div className="app">
      <Header user={user} />
      <Main {...user} getData={getData} />
    </div>
  );
};

export default App;
