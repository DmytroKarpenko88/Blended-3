import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service/country-service';

export const CountrySearch = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const region = searchParam.get('region');
    if (!region) {
      return;
    }

    fetchByRegion(region).then(setCountries);
  }, [searchParam]);

  const onSubmit = region => {
    setSearchParam({ region });
  };

  return (
    <Section>
      <Container>
        <SearchForm onSubmit={onSubmit} />
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
