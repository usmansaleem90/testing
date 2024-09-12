import React from "react";
import FirstNav from "./Components/FirstNav";
import SecondNav from "./Components/SecondNav";
import AllPages from "./Components/Pages/AllPages";
import "./App.css";
import Footer from "./Components/Pages/Footer";
const App = () => {
  return (
    <div>
      <FirstNav />
      <SecondNav  />
      <AllPages/>
      <Footer/>
    </div>
  );
};

export default App;
