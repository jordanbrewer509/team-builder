import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  const team = [
    {
      name: "John",
      age: 20,
      position: "Pitcher"
    },
    {
      name: "Jane",
      age: 22,
      position: "Catcher"
    }
  ]

  const [ members, setMembers] = useState(team);
  const [ formValue, setFormValue ] = useState({ name: "", age: "", position: ""});

  const change = (evt) => {
    const name = evt.target.name;
    const { value } = evt.target
    setFormValue({ ...formValue, [name]: value })
  }

  const submit = (evt) => {
    evt.preventDefault();
    setMembers(members.concat({ name: formValue.name, age: formValue.age, position: formValue.position }));
    setFormValue({ name: "", age: "", position: "" });
  }

  return (
    <div className="App">

      <label name="team member list">

        { members.map((member, idx) => {
          return (
            <div key={idx}>
              {member.name} is {member.age} years old, and plays {member.position};
            </div>
          )
        })}
        <form onSubmit={submit}>
          <input 
            placeholder='Your first name...'
            name="name"
            type="text"
            value={formValue.name}
            onChange={change}
          />
          <input 
          placeholder='Your age...'
          name='age'
          type="number"
          min="18"
          max="30"
          value={formValue.age}
          onChange={change}
          />
          <select name="position" value={formValue.position} onChange={change}>
            <option value="" disabled selected hidden >Your position...</option>
            <option value="Catcher">Catcher</option>
            <option value="Pitcher">Pitcher</option>
            <option value="First Base">First Base</option>
            <option value="Second Base">Second Base</option>
            <option value="Short Stop">Short Stop</option>
            <option value="Third Base">Third Base</option>
            <option value="Left Field">Left Field</option>
            <option value="Center Field">Center Field</option>
            <option value="Right Field">Right Field</option>
          </select>
          <input type="submit" value="Apply to the Team!" />
        </form>
      </label>
    </div>
  );
}

export default App;
