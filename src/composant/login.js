import React from 'react';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
  MDBCard,
  MDBCardBody
} from 'mdb-react-ui-kit';
import { faFacebookF, faGoogle, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Login() {
  return (
    <MDBCard className='mx-auto mt-5' style={{ maxWidth: '28rem' }}>
      <MDBCardBody>
        <form>
          <MDBInput className='mb-3' size='sm' type='email' id='form2Example1' label='Email address' />
          <MDBInput className='mb-3' size='sm' type='password' id='form2Example2' label='Password' />

          <MDBRow className='mb-3'>
            <MDBCol className='d-flex justify-content-center'>
              <MDBCheckbox id='form2Example3' label='Remember me' defaultChecked />
            </MDBCol>
            <MDBCol>
              <a href='#!'>Forgot password?</a>
            </MDBCol>
          </MDBRow>

          <MDBBtn type='submit' className='mb-3' block>
            Sign in
          </MDBBtn>

          <div className='text-center'>
            <p>
              Not a member? <a href='#!'>Register</a>
            </p>
            <p>or sign up with:</p>

        

<MDBBtn floating color='secondary' className='mx-1'>
  <FontAwesomeIcon icon={faFacebookF} />
</MDBBtn>

<MDBBtn floating color='secondary' className='mx-1'>
  <FontAwesomeIcon icon={faGoogle} />
</MDBBtn>

<MDBBtn floating color='secondary' className='mx-1'>
  <FontAwesomeIcon icon={faTwitter} />
</MDBBtn>

<MDBBtn floating color='secondary' className='mx-1'>
  <FontAwesomeIcon icon={faGithub} />
</MDBBtn>



          </div>
        </form>
      </MDBCardBody>
    </MDBCard>
  );
}
