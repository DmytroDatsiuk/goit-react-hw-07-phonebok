import { useSelector } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyele';
import { Layout } from './Layout';
import { Loader } from './Loader/Loader';

export const App = () => {
  const isLoading = useSelector(state => state.contacts.isLoading);

  return (
    <Layout>
      <GlobalStyle />
      {isLoading && <Loader />}
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Layout>
  );
};
