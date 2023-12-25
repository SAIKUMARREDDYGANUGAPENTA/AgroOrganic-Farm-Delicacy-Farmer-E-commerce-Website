import React  from 'react';
import './assets/CSS/Test.css'; // Assuming you have a separate CSS file for styling
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';

export const Test = () => {
  // const [isDropdownOpen, setDropdownOpen] = useState(false);

  // const openDropdown = () => {
  //   setDropdownOpen(true);
  // };

  // const closeDropdown = () => {
  //   setDropdownOpen(false);
  // };

  // return (
  //   <div className="navbar">
  //     <div className="nav-item">Home</div>
  //     <div className="nav-item">About</div>

  //     {/* Dropdown Button */}
  //     <div
  //       className="nav-item dropdown"
  //       onMouseEnter={openDropdown}
  //       onMouseLeave={closeDropdown}
  //     >
  //       Products
  //       {isDropdownOpen && (
  //         <div className="dropdown-content">
  //           <div className="dropdown-item">Product 1</div>
  //           <div className="dropdown-item">Product 2</div>
  //           <div className="dropdown-item">Product 3</div>
  //         </div>
  //       )}
  //     </div>

  //     <div className="nav-item">Contact</div>
  //   </div>
  //);
    return (
      <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol lg="6" className="mb-4 mb-lg-0">
              <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
                <MDBRow className="g-0">
                  <MDBCol md="4" className="gradient-custom text-center text-white"
                    style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                      alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
                    <MDBTypography tag="h5">Marie Horwitz</MDBTypography>
                    <MDBCardText>Web Designer</MDBCardText>
                    <MDBIcon far icon="edit mb-5" />
                  </MDBCol>
                  <MDBCol md="8">
                    <MDBCardBody className="p-4">
                      <MDBTypography tag="h6">Information</MDBTypography>
                      <hr className="mt-0 mb-4" />
                      <MDBRow className="pt-1">
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Email</MDBTypography>
                          <MDBCardText className="text-muted">info@example.com</MDBCardText>
                        </MDBCol>
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Phone</MDBTypography>
                          <MDBCardText className="text-muted">123 456 789</MDBCardText>
                        </MDBCol>
                      </MDBRow>
  
                      <MDBTypography tag="h6">Information</MDBTypography>
                      <hr className="mt-0 mb-4" />
                      <MDBRow className="pt-1">
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Email</MDBTypography>
                          <MDBCardText className="text-muted">info@example.com</MDBCardText>
                        </MDBCol>
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Phone</MDBTypography>
                          <MDBCardText className="text-muted">123 456 789</MDBCardText>
                        </MDBCol>
                      </MDBRow>
  
                      <div className="d-flex justify-content-start">
                        <a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
                        <a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
                        <a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
                      </div>
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    );
  };



