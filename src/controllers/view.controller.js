export const renderHome = (req, res) => {
  res.render('home', { title: 'Ecommerce' });
};

export const renderLogin = (req, res) => {
  res.render('login', { title: 'Login' });
};

export const renderReset = (req, res) => {
  const { token } = req.params;
  res.render('reset-password', { title: 'Reset Password', token });
};

export const renderRegister = (req, res) => {
  res.render('register', { title: 'Registro' });
};