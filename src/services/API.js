import axios from 'axios';

const contactsAPI = axios.create({
  baseURL: 'https://6424ec4b7ac292e3cff3ca97.mockapi.io/contacts/',
});

export const getContacts = async () => (await contactsAPI.get()).data;

export const deleteContact = async id => (await contactsAPI.delete(id)).data;

export const addContact = async contact =>
  (await contactsAPI.post('', contact)).data;
