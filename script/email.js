import { cart, fullName, emailID } from "./add-items.js";

let CartArray, userName, userEmail;

document.getElementById('send-mail-button').addEventListener('click', () => {
  CartArray = [...cart];
  userName = fullName;
  userEmail = emailID;
  console.log(userName, userEmail);

})

function generateEmailBody(cartItems) {
  let total = 0;

  const rows = cartItems.map(item => {
    total += item.price;
    return `
      <tr>
        <td style="padding: 8px; border: 1px solid #ccc;">${item.name}</td>
        <td style="padding: 8px; border: 1px solid #ccc; text-align: center;">₹${item.price}</td>
      </tr>`;
  }).join('');

  return `
    <h2>Service Summary</h2>
    <table style="border-collapse: collapse; width: 100%; font-family: Arial, sans-serif;">
      <thead>
        <tr>
          <th style="padding: 8px; border: 1px solid #ccc; background-color: #f5f5f5;">Service</th>
          <th style="padding: 8px; border: 1px solid #ccc; background-color: #f5f5f5;">Price</th>
        </tr>
      </thead>
      <tbody>
        ${rows}
      </tbody>
    </table>

    <hr />
    
   <table>
    <tbody>
      <tr>
        <td style="font-weight: bold; color: green; font-size: 1rem; width: 100%; padding: 8px;">Total Amount</td>
        <td style="font-weight: bold; color: green; font-size: 1rem; width: 100%; padding-right:5vw; white-space: nowrap;">₹${total}</td>
      </tr>
    </tbody>
   </table>
  `;
}

document.addEventListener('DOMContentLoaded', function () {
  emailjs.init({
    publicKey: 'HNJvSiEifSB2hIjne'
  });

  document.getElementById('booking-form').addEventListener('submit', function (event) {

    event.preventDefault();

    const emailBody = generateEmailBody(CartArray);

    const templateParams = {
      to_email: "amareshsahoo441@gmail.com",
      user_name: userName,
      message_html: emailBody
    };


    emailjs.send('service_hpznhhj', 'template_cokmoqh', templateParams)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }).catch((error) => {
        console.error('FAILED...', error);
        alert('Failed to send email. Please try again.');
      });
  });
});