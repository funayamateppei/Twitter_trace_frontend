export const setUser = user => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const getUser = () => {
  const user = localStorage.getItem('user');

  return JSON.parse(user);
};

export const getToken = () => getUser()?.token;

export const checkLogin = () => !!getToken();
