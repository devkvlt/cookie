document.getElementById('set-button').addEventListener('click', () => {
  const key = document.getElementById('set-key').value;
  const value = document.getElementById('set-value').value;
  const age = parseInt(document.getElementById('set-age').value); // setCookie expects an int
  setCookie(key, value, age);
});

document.getElementById('get-button').addEventListener('click', () => {
  const key = document.getElementById('get-key').value;
  const value = getCookie(key);
  value && (document.getElementById('get-value').innerText = value);
});
