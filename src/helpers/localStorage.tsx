export const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const loadFromLocalStorage = (key, value) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};
