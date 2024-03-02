import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';

const SideBar = () => {
  return (
    <MDBCard style={{ width: '15rem' }}>
      <MDBCardBody>
        <img
          src="https://via.placeholder.com/150"
          alt="profile"
          style={{ width: '80px', height: '80px', borderRadius: '50%', marginBottom: '1rem' }}
        />
        <MDBCardTitle>Nom Prénom</MDBCardTitle>
        <MDBCardText>Email@example.com</MDBCardText>
        <MDBBtn color="primary">Modifier</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
};

export default SideBar;
