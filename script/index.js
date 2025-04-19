const bookServiceButton = document.getElementById('book-service-button');
const bookingServicesSection = document.querySelector('.booking-services-section');
const leftSection = document.querySelector('.left-section')


bookServiceButton.addEventListener('click', ()=>{
  leftSection.scrollIntoView({
    behavior:'smooth'
  })
});