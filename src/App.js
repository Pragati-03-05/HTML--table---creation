import './style.css';
import React from 'react';
export default function App() {
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th rowspan="3">Day</th>
            <th colspan="4">Seminar</th>
          </tr>
          <tr>
            <th colspan="2">Schedule</th>
            <th rowspan="2">Topic</th>
          </tr>
          <tr>
            <th>Begin</th>
            <th>End</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowspan="2">Monday</td>
            <td rowspan="2">8.00 AM</td>
            <td rowspan="2">8.00 AM</td>
            <td>Introduction to XML</td>
          </tr>
          <tr rowspan="2">
            <td>Introduction to XML</td>
          </tr>
          <tr>
            <td rowspan="3">Tuesday</td>
            <td>8.00 AM</td>
            <td>8.00 AM</td>
            <td rowspan="2">Xpath</td>
          </tr>
          <tr>
            <td>8.00 AM</td>
            <td>8.00 AM</td>
          </tr>
          <tr>
            <td>8.00 AM</td>
            <td>8.00 AM</td>
            <td>XSL Transformation</td>
          </tr>
          <tr>
            <td>WednesDay</td>
            <td>8.00 AM</td>
            <td>8.00 AM</td>
            <td>XSL Formatting Objects</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
