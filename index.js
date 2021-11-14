// Input: cookie name (string), cookie value (string), cookie age in days (int)
// Output: sets cookie
function setCookie(name, value, ageInDays) {
  if (typeof name !== 'string') {
    console.error('Cookie name must be a string.');
    return;
  }
  if (typeof value !== 'string') {
    console.error('Cookie value must be a string.');
    return;
  }
  if (!Number.isInteger(ageInDays)) {
    console.error('Age in days must be an integer.');
    return;
  }
  const DAY_IN_MS = 24 * 60 * 60 * 1000;
  const now = new Date();
  const expirationDate = new Date(now.getTime() + ageInDays * DAY_IN_MS).toUTCString();
  document.cookie = `${name}=${value};expires=${expirationDate};path=/`;
}

// Input: cookie name (string)
// Output: cookie value (string) or nothing if no cookie is found
function getCookie(name) {
  if (typeof name !== 'string') {
    console.error('Cookie name must be a string.');
    return;
  }
  const decodedCookie = decodeURIComponent(document.cookie);
  const fields = decodedCookie.split(';');
  for (let i = 0; i < fields.length; i++) {
    let field = fields[i];
    // Remove any spaces at the beginning of field
    while (field.charAt(0) == ' ') {
      field = field.substring(1);
    }
    // When field starts with cookie name immediately followed by `=`
    if (field.indexOf(name + '=') == 0) {
      return field.substring(name.length + 1, field.length);
    }
  }
  console.warn('No cookie with the specified name was found.');
  return;
}
