const newsletterForm = document.getElementById('newsletter-form');
const notification = document.querySelector('.p-non-active');

newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  notification.classList.add('p-active');
  
  setTimeout(()=>{
    notification.classList.remove('p-active');
  }, 3000)
})
