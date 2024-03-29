import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { BtnSearch, Select, SearchFormStyled } from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
  const [value, setValue] = useState('');
  const hendalCheange = e => {
    setValue(e.target.value);
  };

  const heandlSubmit = e => {
    e.preventDefault();

    if (!value) {
      alert('Select any region');
      return;
    }
    onSubmit(value);
    setValue('');
  };

  return (
    <SearchFormStyled onSubmit={heandlSubmit}>
      <BtnSearch type="submit">
        <FiSearch size="16px" />
      </BtnSearch>
      <Select
        aria-label="select"
        name="region"
        defaultValue="default"
        onChange={hendalCheange}
        required
      >
        <option value="default" disabled defaultValue="">
          Select a region and press enter
        </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </Select>
    </SearchFormStyled>
  );
};
