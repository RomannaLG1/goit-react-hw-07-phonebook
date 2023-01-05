import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { TitleContactList, TitlePrimary, Wrapper } from './Styles/App.styled';

export const App = () => {
  return (
    <Wrapper>
      <TitlePrimary>Phonebook</TitlePrimary>
      <ContactForm  />
      <TitleContactList>Contacts</TitleContactList>
      <Filter />
      <ContactList />
    </Wrapper>
  );
};
