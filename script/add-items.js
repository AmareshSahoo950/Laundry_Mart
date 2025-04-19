
const addButtons = document.querySelectorAll('.add-items-button');
const removeButtons = document.querySelectorAll('.remove-items-button');
const tbody = document.querySelector('tbody');
const tbodySection = document.querySelector('.tbody-section');

const emptyCartSection = document.querySelector('.empty-cart-section-active');
const totalAmount = document.querySelector('.total-amount #price span');

const inputTags = document.querySelectorAll('input');
const bookNowButton = document.querySelector('.book-now-non-active');
const form = document.querySelector('form')

const warning = document.querySelector('.warning-not-active');
const emailSent = document.querySelector('.email-not-sent');


let serviceList = [
  { id: 'dry-cleaning-1', name: 'Dry Cleaning', price: 200.00 },
  { id: 'wash-and-fold-2', name: 'Wash & Fold', price: 100.00 },
  { id: 'ironing-3', name: 'Ironing', price: 30.00 },
  { id: 'stain-removal-4', name: 'Stain Removal', price: 500.00 },
  { id: 'leather-and-suede-cleaning-5', name: 'Leather & Suede Cleaning', price: 999.00 },
  { id: 'wedding-dress-cleaning-6', name: 'Wedding Dress Cleaning', price: 2800.00 }
]

let cart = [];
let sno = 1, sum = 0;

checkEmptyCart();

function checkEmptyCart() {
  if (cart.length === 0) {
    emptyCartSection.classList.add('empty-cart-section-active');
    emptyCartSection.classList.remove('empty-cart-section-not-active');
    tbodySection.style.overflow = 'hidden';

    inputTagsEnabler();

    bookNowButtonsEnabler();


  } else {

    inputTags.forEach((inp) => {
      inp.addEventListener('click', () => {
        inp.disabled = false;
      })
    })

    warning.classList.remove('warning-active');
    warning.classList.add('warning-not-active');

    emptyCartSection.classList.add('empty-cart-section-not-active');
    emptyCartSection.classList.remove('empty-cart-section-active');
    tbodySection.style.overflow = 'auto';

    inputTagsEnabler();

    bookNowButton.classList.remove('book-now-non-active')
    bookNowButton.classList.add('book-now-active')

    bookNowButtonsEnabler();
  }

}

function inputTagsEnabler() {
  if (cart.length === 0) {
    inputTags.forEach((inp) => {
      inp.addEventListener('click', () => {
        inp.disabled = true;
        warning.classList.remove('warning-not-active');
        warning.classList.add('warning-active');
      })
    })
  }
  else {

    inputTags.forEach((inp) => {
      inp.disabled = false;
      inp.addEventListener('click', () => {
        inp.focus();
        warning.classList.remove('warning-active');
        warning.classList.add('warning-not-active');
      })
    });
  }
}


function bookNowButtonsEnabler() {
  if (cart.length === 0) {
    bookNowButton.addEventListener('click', () => {
      warning.classList.add('warning-active');
      warning.classList.remove('warning-not-active');
    })
  }
  else {
    bookNowButton.addEventListener('click', () => {
      warning.classList.add('warning-not-active');
      warning.classList.remove('warning-active');
    })
  }
}



addButtons.forEach(e => e.addEventListener('click', () => {

  if (e.innerText.includes('Add')) {

    e.innerHTML = `Remove Item <i class="fa-solid fa-circle-minus fa-sm"></i>`
    e.classList.add('remove-items-button');

    serviceList.forEach((service) => {
      if (e.id === service.id) {
        cart.push(service);

        checkEmptyCart();
        bookNowButtonsEnabler();
        inputTagsEnabler();

        tbody.innerHTML += `
          <tr>
          <td class="item-sno">${sno++}</td>
          <td class="item-service-name">${service.name}</td>
          <td class="item-price"><i class="fa-solid fa-indian-rupee-sign fa-sm"></i>${service.price}</td>
          </tr>
          `;

        sum += service.price;
        totalAmount.innerText = sum;
      }
    });
  }

}));

// addButtons.forEach(btn => {

  
// })



form.addEventListener('submit', e => {

  e.preventDefault();
  emailSent.classList.remove('email-not-sent');
  emailSent.classList.add('email-sent');

  setTimeout(() => {
    emailSent.classList.remove('email-sent');
    emailSent.classList.add('email-not-sent');
  }, 3000);

  resetUserInterface();
  inputTagsEnabler();
})


function resetUserInterface() {
  cart = [];
  sno = 1;
  sum = 0;
  totalAmount.innerText = sum;
  checkEmptyCart();

  inputTags.forEach(inp => {
    if (inp.type !== 'submit') {
      inp.value = ''
    }
  })

  addButtons.forEach(e => {
    e.innerHTML = `Add Item <i class="fa-solid fa-circle-plus fa-sm"></i>`
    e.classList.add('add-items-button');
    e.classList.remove('remove-items-button')
  })


}
