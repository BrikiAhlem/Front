import React from 'react';
import {
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter,
  MDBBtn,
  MDBInput,
} from 'mdb-react-ui-kit';

const ModifierModal = ({ isOpen, toggleModal }) => {
  return (
    <MDBModal show={isOpen} tabIndex="-1" backdrop={false} fullHeight position="right">
      <MDBModalHeader>
        <h5>Modifier le profil</h5>
        <MDBBtn color="secondary" onClick={toggleModal}>
          Fermer
        </MDBBtn>
      </MDBModalHeader>
      <MDBModalBody>
        {/* Ajoutez vos champs de formulaire ici */}
        <MDBInput label="Nom" />
        <MDBInput label="Prénom" />
      </MDBModalBody>
      <MDBModalFooter>
        <MDBBtn color="primary" onClick={toggleModal}>
          Sauvegarder
        </MDBBtn>
        <MDBBtn color="secondary" onClick={toggleModal}>
          Annuler
        </MDBBtn>
      </MDBModalFooter>
    </MDBModal>
  );
};

export default ModifierModal;
