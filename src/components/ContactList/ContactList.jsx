import { useSelector, useDispatch } from 'react-redux';
import { selectedContacts, selectedFilter } from 'redux/contact-selectors';
import { deleteContact } from 'redux/contacts-slice';
import { List, Button } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectedContacts);
  const filter = useSelector(selectedFilter);
  const dispatch = useDispatch();

  const filterList = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

  return (
    <ul>
      {filterList.map(({ id, name, number }) => (
        <List key={id}>
          <span>
            {name}: {number}
          </span>
          <Button
            type="button"
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            Delete
          </Button>
        </List>
      ))}
    </ul>
  );
};
