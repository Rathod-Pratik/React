import "./App.css";
import React, { Component } from 'react';
import Navbar from './Component/Navbar';
import News from "./Component/News";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  page=10;
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<News key="general" page={this.page} country="in" category="general" />} />
            <Route path="/business" element={<News key="business" page={this.page} country="in" category="business" />} />
            <Route path="/entertainment" element={<News key="entertainment" page={this.page} country="in" category="entertainment" />} />
            <Route path="/health" element={<News key="health" page={this.page} country="in" category="health" />} />
            <Route path="/science" element={<News key="science" page={this.page} country="in" category="science" />} />
            <Route path="/sports" element={<News key="sports" page={this.page} country="in" category="sports" />} />
            <Route path="/technology" element={<News key="technology" page={this.page} country="in" category="technology" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

