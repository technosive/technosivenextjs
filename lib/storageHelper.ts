import "client-only";

export function getLocalStorage(key: string, defaultValue: any) {
  const stickyValue = localStorage.getItem(key);

  return stickyValue !== null && stickyValue !== "undefined" && stickyValue
    ? JSON.parse(stickyValue)
    : defaultValue;
}

export function getLocalStoragePopUp(key: string, defaultValue: any) {
  const stickyValue = localStorage.getItem(key);

  // Check if stickyValue is not null and not 'undefined' before attempting to parse it
  return stickyValue !== null &&
    stickyValue !== "undefined" &&
    JSON.parse(stickyValue) === true
    ? false
    : defaultValue;
}

export function setLocalStorage(key: string, value: any) {
  localStorage.setItem(key, JSON.stringify(value));
}
