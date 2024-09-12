import React, { Component } from "react";
import { DummyData } from "./DummyData";

export default class DummyFile extends Component {
  state = {
    DummyData,
  };
  render() {
    console.log(DummyData[0]);
    return (
      <div>
        <select name="Name">
          {DummyData.map((e) => (
            <option value={e}>{e}</option>
          ))}
        </select>
      </div>
    );
  }
}
