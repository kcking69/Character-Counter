const textarea = document.querySelector('textarea');
const remaining = document.getElementById('remain');
const total = document.getElementById('total');

textarea.addEventListener('keydown', (e) => {
  total.innerHTML = textarea.value.length;
  remaining.innerHTML = textarea.maxLength - total.innerHTML;
});
