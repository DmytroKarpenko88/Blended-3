import { Section, Container, CountryInfo, Loader, GoBack } from 'components';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { fetchCountry } from 'service/country-service';

export const Country = () => {
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(false);

  const { countryId } = useParams();
  const location = useLocation();
  useEffect(() => {
    setLoading(true);
    fetchCountry(countryId)
      .then(result => setCountry(result))
      .finally(() => setLoading(false));
  }, [countryId]);

  if (!country) return;

  return (
    <Section>
      <Container>
        <GoBack path={location?.state?.from ?? '/'} />
        <CountryInfo {...country} />
        {loading && <Loader />}
      </Container>
    </Section>
  );
};
