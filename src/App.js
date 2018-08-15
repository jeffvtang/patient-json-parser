import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      obj: {
        "resourceType": "Patient",
        "id": "xcda",
        "text": {
          "status": "generated",
          "div": "\n      \n      <p>Henry Levin the 7th</>\n    \n    </div>"
        },
        "identifier": [
          {
            "use": "usual",
            "type": {
              "coding": [
                {
                  "system": "htt://hl7.org/fhir/v2/0203",
                  "code": "MR"
                }
              ]
            },
            "system": "urn:oid:2.16.840.1.113883.19.5",
            "value": "12345"
          }
        ],
        "active": true,
        "name": [
          {
            "family": [
              "Levin"
            ],
            "given": [
              "Henry"
            ]
          }
        ],
        "gender": "male",
        "birthDate": "2002-09-24",
        "managingOrganization": {
          "reference": "Organization/2.16.840.1.113883.19.5",
          "display": "University Health Network"
        },
        "conditions": [
          "Diabetes",
          "High blood pressure",
          "Asthma"
        ]
      }
    }
  }

  render() {
    console.log(this.state.obj)
    const obj = this.state.obj
    return (
      <div>
          <h1>Sample Patient Parser</h1>
          <div>Name of patient: {obj.name[0].given + ' ' + obj.name[0].family}</div>
          <div>Organization name: {obj.managingOrganization.display}</div>
          <div>Gender: {obj.gender}</div>
          <div>Number of conditions they have: {obj.conditions.length}</div>
          <div>List of all conditions:</div>
          <ul>
          {obj.conditions.map((condition) => (
          <li>{condition}</li>
          ))}
          </ul>
      </div>
    );
  }
}



export default App;
