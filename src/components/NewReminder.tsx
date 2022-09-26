import React, { FormEvent, useState } from 'react';
import { Form } from 'react-bootstrap';

interface NewReminderProps{
    onAddReminder: (item: string) => void;    
}

function NewReminder({onAddReminder} : NewReminderProps): JSX.Element {
   
    const [title, setTitle] =  useState('');

    const submitForm = (e: FormEvent) =>{
        e.preventDefault();
        // console.log(title);
        // if (!title) return;
        onAddReminder(title);
        setTitle('');
        
    }

    return(
        <form onSubmit={submitForm}>
            <label htmlFor="title"></label>
            <input type="title" value={title} onChange={e => setTitle(e.target.value)} className="form-control" />
            <button className="btn btn-primary my-3 rounded-pill">Add Reminder</button>
        </form>
    );

}

export default NewReminder;