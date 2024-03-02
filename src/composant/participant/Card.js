import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';

const Card = () => {
  return (
    <MDBCard style={{ width: '18rem' }}>
      <MDBCardBody>
        <MDBCardTitle>Titre de la carte</MDBCardTitle>
        <MDBCardText>
          Une petite description de la carte. Vous pouvez ajouter plus de détails ici.
        </MDBCardText>
        <MDBBtn color="primary">Voir plus</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
};

export default Card;
