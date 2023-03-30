import React from 'react';
import { List, Button, Description, Item } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

  return (
    <List>
      {filteredContacts?.map(({ id, name, number }) => (
        <Item key={id}>
          <Description>
            {name}: {number}
          </Description>
          <Button type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};
