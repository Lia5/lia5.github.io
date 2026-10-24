'use strict';

const modal = document.getElementById('regModal');
const openBtn = document.getElementById('openModalBtn');
const loginBtn = document.getElementById('loginBtn');
const closeBtn = document.getElementById('closeModalBtn');
const cancelBtn = document.getElementById('cancelModalBtn');
const form = document.getElementById('regForm');

function setAuthorizedUI() {
  if (openBtn) {
    openBtn.disabled = true;
  }

  let authMsg = document.getElementById('authMessage');
  if (!authMsg) {
    authMsg = document.createElement('span');
    authMsg.id = 'authMessage';
    authMsg.style.marginLeft = '10px';
    authMsg.style.color = 'green';
    authMsg.textContent = 'Користувач вже авторизований';
    openBtn.after(authMsg);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const isAuthorized = localStorage.getItem('isAuthorized') === 'true';

  if (isAuthorized) {
    console.log('Користувач вже авторизований');
    setAuthorizedUI();
  } else {
    console.log('Користувач не авторизований');
  }
});

loginBtn.addEventListener('click', (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  localStorage.setItem('isAuthorized', 'true');

  setAuthorizedUI();

  form.reset();
  modal.close();
});

openBtn.addEventListener('click', () => {
  modal.showModal();
});

closeBtn.addEventListener('click', () => {
  modal.close();
});

cancelBtn.addEventListener('click', () => {
  form.reset();
  modal.close();
});

modal.addEventListener('click', event => {
  if (event.target === modal) {
    modal.close();
  }
});
