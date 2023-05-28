import {
  Container,
  SearchForm,
  Section,
  Loader,
  CountryList,
} from 'components';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service/country-service';

export const CountrySearch = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const region = searchParam.get('region');
    if (!region) {
      return;
    }
    setLoading(true);

    fetchByRegion(region)
      .then(setCountries)
      .finally(() => setLoading(false));
  }, [searchParam]);

  const onSubmit = region => {
    setSearchParam({ region });
  };

  return (
    <Section>
      <Container>
        <SearchForm onSubmit={onSubmit} />
        <CountryList countries={countries} />
        {loading && <Loader />}
      </Container>
    </Section>
  );
};
