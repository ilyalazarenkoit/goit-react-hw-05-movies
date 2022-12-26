import { AiOutlineSearch } from 'react-icons/ai';
import { useState } from 'react';
import { FormStyled, ButtonSearch, InputSearch } from './SearchForm.styled';
import PropTypes from 'prop-types';

export const SearchForm = ({ onHandleSubmit }) => {
  const [query, setQuery] = useState('');

  const onChange = e => {
    setQuery(e.target.value.toLowerCase());
  };
  const onSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      return;
    }
    onHandleSubmit(query);
    setQuery('');
  };
  return (
    <FormStyled>
      <InputSearch onChange={onChange} value={query} type="text" />
      <ButtonSearch onClick={onSubmit}>
        <AiOutlineSearch />
      </ButtonSearch>
    </FormStyled>
  );
};
export default SearchForm;

SearchForm.propTypes = {
  onHandleSubmit: PropTypes.func,
};
