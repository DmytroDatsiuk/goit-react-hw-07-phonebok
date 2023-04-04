import React from 'react';
import { List, Button, Description, Item } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  deleteContactThunk,
  getContactsThunk,
} from 'redux/thunks/contactsThunk';
import { selectFilteredContacts } from 'redux/contacts/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <>
      {filteredContacts.length === 0 ? (
        <p>There is no contacts</p>
      ) : (
        <List>
          {filteredContacts?.map(({ id, name, number }) => (
            <Item key={id}>
              <Description>
                {name}: {number}
              </Description>
              <Button
                type="button"
                onClick={() => dispatch(deleteContactThunk(id))}
              >
                Delete
              </Button>
            </Item>
          ))}
        </List>
      )}
    </>
  );
};
