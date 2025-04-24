import { serviceList } from "./database/services.js";

const addButtons = document.querySelectorAll('.add-items-button');
const tbody = document.querySelector('tbody');
const tbodySection = document.querySelector('.tbody-section');

const emptyCartSection = document.querySelector('.empty-cart-section-active');
const totalAmount = document.querySelector('.total-amount #price span');

const inputTags = document.querySelectorAll('.book-now-section input');
const bookNowButton = document.querySelector('.book-now-non-active');
const form = document.querySelector('form')

const warning = document.querySelector('.warning-not-active');
export const emailSent = document.querySelector('.email-not-sent');

export let cart = [];

export function getfullName() {
  return document.getElementById('fullName');
}

export function getEmailId() {
  return document.getElementById('emailID');
}



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
        inp.focus();
      })
    })

    emptyCartSection.classList.add('empty-cart-section-not-active');
    emptyCartSection.classList.remove('empty-cart-section-active');
    tbodySection.style.overflow = 'auto';

    inputTagsEnabler();
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

    warning.classList.remove('warning-active');
    warning.classList.add('warning-not-active');
  }
}


function bookNowButtonsEnabler() {
  if (cart.length === 0) {

    bookNowButton.classList.add('book-now-non-active')
    bookNowButton.classList.remove('book-now-active')

    bookNowButton.addEventListener('click', () => {
      warning.classList.add('warning-active');
      warning.classList.remove('warning-not-active');
    })
  }
  else {
    bookNowButton.classList.remove('book-now-non-active')
    bookNowButton.classList.add('book-now-active')

    bookNowButton.addEventListener('click', () => {
      warning.classList.add('warning-not-active');
      warning.classList.remove('warning-active');
    })
  }
}

function totalAmountSetter() {
  let sum = 0;
  cart.forEach(service => {
    sum += service.price;
  });

  return sum;
}

//add items
addButtons.forEach(btn =>
  btn.addEventListener('click', () => {

    const service = serviceList.find(s => s.id === btn.id)

    //Add Items to the cart
    if (btn.innerText.includes('Add')) {
      if (!cart.some(e => e.id === btn.id)) {
        cart.push(service);
        btn.innerHTML = `Remove Item <i class="fa-solid fa-circle-minus fa-sm"></i>`
        btn.classList.add('remove-items-button');
      }
    }

    //Remove item from the cart
    else {
      let dummyCart = [...cart];
      cart = dummyCart.filter(ele => ele.id !== btn.id);

      btn.innerHTML = `Add Item <i class="fa-solid fa-circle-plus"></i>`
      btn.classList.add('add-items-button');
      btn.classList.remove('remove-items-button');
    }

    updateCart();
    checkEmptyCart();

  }
  ));


function updateCart() {

  tbody.innerHTML = ``;
  cart.forEach(service => {

    const row = document.createElement("tr");
    row.innerHTML = `
    <td class="item-sno">${cart.indexOf(service) + 1}</td>
    <td class="item-service-name">${service.name}</td>
    <td class="item-price"><i class="fa-solid fa-indian-rupee-sign fa-sm"></i>${service.price}</td>
    `;
    tbody.appendChild(row);
  })

  totalAmount.innerText = totalAmountSetter();
}




form.addEventListener('submit', e => {

  e.preventDefault();

  resetUserInterface();
  inputTagsEnabler();
})


function resetUserInterface() {
  const cartItems = [...cart];

  console.log(cartItems);

  cart = [];
  totalAmount.innerText = totalAmountSetter();
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
