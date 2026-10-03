'use strict';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.btn-primary').onclick = () => {
    document.querySelector('.alert').classList.add('alert-primary');
    document.querySelector('.alert').textContent =
      'A simple primary alert—check it out!';
  };
  document.querySelector('.btn-secondary').addEventListener('click', () => {
    document.querySelector('.alert').classList.add('alert-primary');
    document.querySelector('.alert').textContent =
      'A simple secondary alert—check it out!';
  });
  document.querySelector('.btn-success').addEventListener('mouseover', () => {
    document.querySelector('.alert').classList.add('alert-primary');
    document.querySelector('.alert').textContent =
      'A simple success alert—check it out!';
  });
  document.querySelector('.btn-success').addEventListener('mouseout', () => {
    document.querySelector('.alert').classList.remove('alert-primary');
    document.querySelector('.alert').textContent = '';
  });
  document.querySelector('.btn-danger').addEventListener('focus', () => {
    document.querySelector('.alert').classList.add('alert-danger');
    document.querySelector('.alert').textContent =
      'A simple danger alert—check it out!';
  });
  document.querySelector('.btn-danger').addEventListener('focusout', () => {
    document.querySelector('.alert').classList.remove('alert-danger');
    document.querySelector('.alert').textContent = '';
  });
  document.querySelector('.btn-dark').addEventListener('click', event => {
    toggleMode(event.currentTarget);
  });
  document.querySelector('.btn-light').addEventListener('click', event => {
    toggleMode(event.currentTarget);
  });
  if (document.body.classList.contains('dark-mode')) {
    document.querySelector('.btn-dark').style.display = 'none';
  } else {
    document.querySelector('.btn-light').style.display = 'none';
  }
  document.querySelector('.btn-info').addEventListener('keypress', (event) => {
    if(event.key === 'Enter') {
      event.preventDefault();
      document.querySelector('.alert').classList.add('alert-info');
      document.querySelector('.alert').textContent = 'A simple info alert—check it out!';
    }
  });
  document.querySelectorAll('.card').forEach(card => {
      console.log(card.querySelector('.card-title'));
      card.querySelector('.add-to-cart').addEventListener('click', (event) => {
        console.log(event.currentTarget.closest('.card').querySelector('.card-title').textContent);
      });
  });
});

function toggleMode(btn) {
  document.body.classList.toggle('dark-mode');
  btn.style.display = 'none';
  if (btn.classList.contains('btn-dark')) {
    document.querySelector('.btn-light').style.display = 'inline-block';
  }
  if (btn.classList.contains('btn-light')) {
    document.querySelector('.btn-dark').style.display = 'inline-block';
  }
}
