import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix';
import { addContact } from 'redux/contacts/contactsSlice';
import { Button, Form, Input, Label } from './ContactForm.styled';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const handleChangeData = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
    }
  };

  const submitData = e => {
    e.preventDefault();

    contacts.some(
      ({ name: currentName }) =>
        currentName.toLowerCase() === name.toLowerCase()
    )
      ? Notify.info(`a contact with the name ${name} already exists`)
      : dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };
  return (
    <>
      <Form action="submit" onSubmit={submitData}>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          type="text"
          name="name"
          placeholder="Enter a name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChangeData}
          value={name}
        />

        <Label htmlFor="number">Number</Label>
        <Input
          id="number"
          type="text"
          name="number"
          placeholder="Enter a number"
          pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"
          title="This field may contain numbers"
          required
          onChange={handleChangeData}
          value={number}
        />
        <Button type="submit">Add contact to the list</Button>
      </Form>
    </>
  );
};
