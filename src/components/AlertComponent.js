import React from 'react';
import Swal from 'sweetalert2';
import Correct from '../Images/Group 396.png';

const CustomAlert = () => {
  Swal.fire({
    icon: 'html',
    // You can use the 'html' option to insert custom HTML for the icon
    html: `
      <img src="${Correct}" alt="Custom Icon" style="width: 70px; height: 70px;" />
      <div style="margin-top: 10px;">
        <span style="color: #62D2E9; font-size: 2rem;">Verify your Account</span>
        <p>We have sent you a confirmation message to your email</p>
      </div>
    `,
    customClass: {
      confirmButton: 'custom-ok-button-class',
      title: 'custom-title-class',
      text: 'custom-text-class',
    },
    showConfirmButton: false,
    timer: 3000,
  });
  return null;
};

export default CustomAlert;


