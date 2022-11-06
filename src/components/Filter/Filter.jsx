import { useDispatch } from 'react-redux';
import { Label, Input } from './Filter.styled';
import { setFilter } from 'redux/filter-slice';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleInput = event => {
    const { value } = event.target;
    dispatch(setFilter(value.toLowerCase()));
  };
  return (
    <>
      <Label>Find contacts by name</Label>
      <Input type="text" onChange={handleInput} />
    </>
  );
};
