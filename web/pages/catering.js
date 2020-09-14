import groq from "groq";
import client from "../client";
import FindUs from "./components/FindUs";
import Layout from "./components/Layout";
import CateringEventForm from "./components/CateringEventForm";

const CateringPage = (props) => {
  return (
    <Layout props={props}>
      <h1>Catering </h1>
      <p>
        Vi har en stor erfarenhet av catering till både små och stora
        tillställningar. Vi tar uppdrag för filmproduktioner, företag, privata
        fester och kalas, studentfirande, bröllop, begravningar och allt
        däremellan. Vi har också utformat en coronavänlig catering med små
        mingeltallrikar istället för större bufféer. Skicka gärna en förfrågan
        så kan vi se hur vi kan hjälpa er.
      </p>
      <CateringEventForm />
    </Layout>
  );
};

const query = groq`{
    "footer": (*[_type == 'footer']),
    "navigation": (*[_type== 'navigation'])
  }`;

CateringPage.getInitialProps = async function () {
  const res = await client.fetch(query);

  return res;
};

export default CateringPage;
