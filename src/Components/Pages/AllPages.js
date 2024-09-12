import React, { Component } from 'react'
import { Route, Routes } from "react-router-dom";
import NewIn from "./NewIn";
import Casuals from "./Casuals";
import Formal from "./Formal";
import Prints from "./Prints";
import Shawls from "./Shawls";
import Bottom from "./Bottom";
import BreezeMan from "./BareezeMan";
import LookBook from "./LookBook";
import Sales from "./Sales";
import Home from './Home';

export default class AllPages extends Component {
  render() {
    return (
      <div>
            <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/newin" element={<NewIn />} />
        <Route path="/casual" element={<Casuals />} />
        <Route path="/formal" element={<Formal />} />
        <Route path="/print" element={<Prints />} />
        <Route path="/shawl" element={<Shawls />} />
        <Route path="/bottom" element={<Bottom />} />
        <Route path="/breeze" element={<BreezeMan />} />
        <Route path="/look" element={<LookBook />} />
        <Route path="/sales" element={<Sales />} />
      </Routes>
      </div>
    )
  }
}
