import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { Button } from 'react-bootstrap';
import './App.css';
import ReminderList from './components/ReminderList';
import Reminder from './models/reminder';
import reminderService from './services/reminder';
import NewReminder from './components/NewReminder';

// const reminders: Reminder[] =
//   [{ id: 1, title: "reminder" }]


function App() {

  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    loadReminders();
  }, []);

  const loadReminders = async () => {

    const request = await reminderService.getReminders();
    setReminders(request);

  };

  const removeReminder = (id: number) => {
    // console.log(id);
    setReminders(reminders.filter(reminder => reminder.id !== id));
  }

  const addReminder = async (title: string) => {
    // console.log(title);
    const request = await reminderService.addReminder(title);
    setReminders([request, ...reminders]);

  }

  return (
    <div className='App'>
      <NewReminder onAddReminder={addReminder} />
      <ReminderList items={reminders} onRemoveReminder={removeReminder} />
    </div>
  );
}

export default App;
