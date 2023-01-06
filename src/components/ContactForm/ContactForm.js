import { AiOutlinePlus } from 'react-icons/ai';
import { Formik } from 'formik';
import {
  ErrorMsgName,
  ErrorMsgPhone,
  FormBtn,
  FormStyled,
  Input,
  Label,
} from './ContactForm.styled';
import { BsTelephoneForwardFill, BsPersonSquare } from 'react-icons/bs';
import * as yup from 'yup';
import 'yup-phone';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from '../../redux/operations';

const valName = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

export const ContactForm = () => {
  const startValues = {
    name: '',
    number: '',
  };

  const schema = yup.object().shape({
    name: yup
      .string()
      .min(2, 'Too Short!')
      .max(10, 'Too Long!')
      .matches(
        valName,
        'Name may contain only letters, apostrophe, dash and spaces'
      )
      .required(),
    number: yup.string().phone('UA').required(),
  });

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  // +380989809898
  const addNewContact = ({name, number}) => {
    console.log('form', name, number);
    contacts.find(
      contact => contact.name === name
    )
      ? alert(`${name} is already in contacts`)
      : dispatch(addContact({name, number}));
  };

  const handleSubmit = (value, { resetForm }) => {
    addNewContact(value);
    resetForm();
  };

  return (
    <Formik
      initialValues={startValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormStyled>
        <Label htmlFor="name">
          <BsPersonSquare size="30" />
          <Input type="text" name="name" placeholder="Name" autocomplite="on" />
          <ErrorMsgName name="name" component="div" />
        </Label>

        <Label htmlFor="tel">
          <BsTelephoneForwardFill size="30" />
          <Input type="tel" name="number" placeholder="Phone" />
          <ErrorMsgPhone name="number" component="span" />
        </Label>
        <FormBtn type="submit">
          <AiOutlinePlus size="30" />
          Add contact
        </FormBtn>
      </FormStyled>
    </Formik>
  );
};
