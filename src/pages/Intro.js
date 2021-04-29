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
        <Primitives.Heading.H1>Skal du selge gamle byggevarer på nytt?</Primitives.Heading.H1>
        <Primitives.Paragraphs.Lead>
        Finn kravene som gjelder for å omsette en gammel byggevare på nytt. Svar på spørsmålene for å finne ut om dokumentasjonen er i orden, eller om det er noe som mangler. 
        </Primitives.Paragraphs.Lead>
        <Primitives.Paragraphs.Lead>
        <h3>Før du begynner</h3> 
        Før du begynner er det nyttig at du vet: 
        <ul>
          <li>hvor gammel byggevaren er</li>
          <li>om byggevaren har stått i et norsk byggverk eller kommer fra utlandet</li>
          <li>om du har produktdokumentasjon, sertifisering eller godkjenning eller annen dokumentasjon fra da byggevaren først ble omsatt (FDV-dokumentasjon kan si noe om opprinnelsen til produktet)</li>
          <li>andre opplysninger om behandlingen av byggevaren fra rivingsprosessen</li>
        </ul>
        <h3>Skillet mellom omsetning og bruk av byggevaren</h3> 
        Det er forskjell på kravene til omsetning og salg av byggevarene og kravene til bruk av byggevarer i byggverk. 
        <p><img src="https://dibk.no/globalassets/5.-nye-sider-om-byggevarer/byggevarer---hovedside/bildeom.jpg"/></p>
        <p>I denne veiviseren er fokuset på kravene til omsetning/salg av brukte byggevarer.</p>
        

        </Primitives.Paragraphs.Lead>
        <Primitives.Button.MainButton type="button" onClick={() => close()}>
          Start veiviseren
        </Primitives.Button.MainButton>
      </IntroMain>
    </Primitives.Wizard>
  );
}

Intro.propTypes = {
  close: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export default connect(state => ({ data: state['@WIZARD_STATE'] }))(Intro);
