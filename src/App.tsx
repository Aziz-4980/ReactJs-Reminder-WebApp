import React from 'react';
import logo from './logo.svg';
import { Button } from 'react-bootstrap';
import './App.css';
import ReminderList from './components/ReminderList';
import Reminder from './models/reminder';
const reminders: Reminder[] =
  [{ id: 1, title: "reminder" }]


function App() {
  return (
    <ReminderList items={reminders}/>
  );
}

export default App;
