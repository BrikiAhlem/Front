import React from 'react';
import { MDBInputGroup, MDBBtn } from 'mdb-react-ui-kit';

const SearchBar = () => {
  return (
    <div>
      <MDBInputGroup
        material
        containerClassName="mb-3 mt-3"
        prepend="Rechercher"
        inputs={
          <>
            <input type="text" className="form-control" />
            <MDBBtn color="primary">Go</MDBBtn>
          </>
        }
      />
    </div>
  );
};

export default SearchBar;
