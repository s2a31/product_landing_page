const submit = document.querySelector('#submit');

function handleSubmitButton(event) {
  event.preventDefault();
  alert('Order Confirmed!');
}

submit.addEventListener('click', handleSubmitButton);
