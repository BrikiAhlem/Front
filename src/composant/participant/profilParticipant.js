import React from 'react';
import NavBar from '../participant/NavBar';
import SearchBar from '../participant/SearchBar';
import ProfileMenu from '../participant/ProfileMenu';
import SideBar from '../participant/SideBar';

import ModifierModal from './ModifierModal';

const ProfilParticipant = () => {
  return (
    <> 
    <div>
      <NavBar />
      <SearchBar />
      <ProfileMenu />
      </div>
      <div>
        <SideBar />
        <ModifierModal />
      </div>
      </>
    
  );
};

export default ProfilParticipant;
