import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  const R = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setCount(count + 16);
    } else {
      setCount(count - 16);
    }
  };

  const IF = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
    //TODO
  };

  const M = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div>
    <h1>R</h1>
    <label className="switch">
      <input onChange={R} type="checkbox"/>
      <span className="slider"></span>
    </label>
    <h1>IF</h1>//TODO
    <label className="switch">
      <input onChange={IF} type="checkbox"/>
      <span className="slider"></span>
    </label>
    <h1>F</h1>
    <label className="switch">
      <input onChange={M} type="checkbox"/>
      <span className="slider"></span>
    </label>
    <h1>E</h1>
    <label className="switch">
      <input onChange={M} type="checkbox"/>
      <span className="slider"></span>
    </label>
    <h1>I</h1>
    <label className="switch">
      <input onChange={M} type="checkbox"/>
      <span className="slider"></span>
    </label>
    <h1>M</h1>
    <label className="switch">
      <input onChange={M} type="checkbox"/>
      <span className="slider"></span>
    </label>
    <h1>C</h1>
    <label className="switch">
      <input onChange={M} type="checkbox"/>
      <span className="slider"></span>
    </label>
    <h1>T</h1>
    <label className="switch">
      <input onChange={M} type="checkbox"/>
      <span className="slider"></span>
    </label>
    <h1>S</h1>
    <label className="switch">
      <input onChange={M} type="checkbox"/>
      <span className="slider"></span>
    </label>
    <h1>W</h1>
    <label className="switch">
      <input onChange={M} type="checkbox"/>
      <span className="slider"></span>
    </label>
    <h1>{count}</h1>
    </div>
  );
}
