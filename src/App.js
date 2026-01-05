import { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

const App = () => {
  const [user, setUser] = useState("");

  const getData = async () => {
    try {
      const respone = await fetch("https://randomuser.me/api/");
      const data = await respone.json();
      setUser(data.results[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="app">
      <Header user={user} />
      <Main {...user} getData={getData} />
    </div>
  );
};

export default App;
