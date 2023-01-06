import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { TitleContactList, TitlePrimary, Wrapper } from './Styles/App.styled';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";
import { selectError, selectIsLoading } from "redux/selectors";
import Loader from './Loader';


export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Wrapper>
      <TitlePrimary>Phonebook</TitlePrimary>
      <ContactForm  />
      <TitleContactList>Contacts</TitleContactList>
      <Filter />

      {isLoading && !error && <Loader/>}
      <ContactList />
    </Wrapper>
  );
};
