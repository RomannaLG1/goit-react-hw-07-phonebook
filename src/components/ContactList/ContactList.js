import { ContactListItem } from 'components/ContactListItem';
import { ContactListStyled } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';


export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  console.log(contacts);
  // const filterName = useSelector(selectFilters);
  // const toNormalizedFilter = filterName.toLowerCase();
  // const filterContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(toNormalizedFilter)
  // );

  return (
    <ContactListStyled>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem key={id} name={name} number={number} id={id}></ContactListItem>
      ))}
    </ContactListStyled>
  );
};
