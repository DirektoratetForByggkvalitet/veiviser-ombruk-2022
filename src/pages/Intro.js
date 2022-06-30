import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Primitives } from 'losen';
import { IntroMain } from '../primitives/IntroMain';

function Intro({ close, data: { $computed, ...data } }) {
  if (Object.keys(data).length > 0) {
    close();
  }
  return (
    <Primitives.Wizard>
      <IntroMain>
        <Primitives.Heading.H1>Skal du selge gamle byggevarer?</Primitives.Heading.H1>
        <Primitives.Paragraphs.Lead>
        Finn kravene som gjelder for å omsette en gammel byggevare på nytt. Svar på spørsmålene for å finne ut om dokumentasjonen er i orden, eller om det er noe som mangler. 
        </Primitives.Paragraphs.Lead>
        <Primitives.Paragraphs.Lead>
        <h2>Før du begynner</h2> 
        Før du begynner er det nyttig at du vet: 
        <ul>
          <li>hvor gammel byggevaren er</li>
          <li>om du har produktdokumentasjon, sertifisering eller godkjenning eller annen dokumentasjon fra da byggevaren først ble omsatt (FDV-dokumentasjon kan si noe om opprinnelsen til produktet)</li>
          <li>andre opplysninger om behandlingen av byggevaren fra rivingsprosessen</li>
        </ul>
        Før byggevarer blir demontert fra et eksisterende byggverk skal det gjennomføres en kartlegging av farlig avfall og bygningsfraksjoner som må fjernes. Byggevarer som er farlig avfall, kan ikke ombrukes, men skal leveres som farlig avfall til godkjent mottak.
        <h2>Nyttige lenker for deg som ønsker å ombruk en byggevare</h2>  
        <ul> 
          <li> <a href='https://vcob.dk/vcob/cirkulaert-byggeri/byggevarer/materialeatlas/' target='_blank'>"Materialatlas"</a> laget av det danske Videncenter for Cirkulær Økonomi i Byggeriet</li>
          <li> <a href='https://www.sintefbok.no/book/index/1320/ombruk_av_byggematerialer_veileder_for_dokumentasjon_av_ytelser' target='_blank'>Veileder for dokumentasjon av ytelser ved ombruk av byggematerialer</a> av SINTEF Community</li>
        </ul>
        

        </Primitives.Paragraphs.Lead>
        <Primitives.Button.MainButton type="button" onClick={() => close()}>
          Start veiviseren
        </Primitives.Button.MainButton>
        <h3>Gi oss tilbakemelding!</h3>
        Har du tilbakemeldinger eller forslag til forbedringer, eller har du funnet feil eller mangler? Send oss en henvendelse på <a href='Mailto:post@dibk.no' target='_blank'>post@dibk.no</a>.
      </IntroMain>
    </Primitives.Wizard>
  );
}

Intro.propTypes = {
  close: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export default connect(state => ({ data: state['@WIZARD_STATE'] }))(Intro);
