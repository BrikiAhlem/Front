import React from 'react';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdb-react-ui-kit';

const ProfileMenu = () => {
  return (
    <div>
      <MDBDropdown>
        <MDBDropdownToggle color="primary" id="dropdownMenuButton1">
          Mon Profil
        </MDBDropdownToggle>
        <MDBDropdownMenu>
          <MDBDropdownItem href="#!">Paramètres</MDBDropdownItem>
          <MDBDropdownItem href="#!">Déconnexion</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
    </div>
  );
};

export default ProfileMenu;
