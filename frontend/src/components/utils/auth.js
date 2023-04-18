const saveUser = (uid) => {
    localStorage.setItem('uid', uid.toString());
  };
  
  const getUser = () => {
    const uid = localStorage.getItem('uid');
    return uid ? parseInt(uid) : null;
  };
  
  const removeUser = () => {
    localStorage.removeItem('uid');
  };
  
  const isUserLoggedIn = () => {
    return !!getToken();
  };
  
  const storeToken = (token) => {
    localStorage.setItem('token', token);
  };
  
  const getToken = () => {
    return localStorage.getItem('token');
  };
  
  export { saveUser, getUser, removeUser, isUserLoggedIn, storeToken, getToken };