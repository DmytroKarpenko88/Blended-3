import { Section, Container, CountryInfo, Loader } from 'components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCountry } from 'service/country-service';



export const Country = () => {

  const[country, setCountry] = useState(null);

  const { countryId } = useParams();
 
  useEffect(() => {
    fetchCountry(countryId).then(result => setCountry(result))
  }, [countryId]);

  if(!country) return;



  return (
    <Section>
      <Container>
        <CountryInfo {...country} />
      </Container>
    </Section>
  );
};
