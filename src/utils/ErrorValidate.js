export const ErrorValidate = (error) => {
  let result = '';
  if (error === 'auth/invalid-email') {
    result = 'Formato de correo inválido';
  }

  if (error === 'auth/weak-password') {
    result = 'La contraseña es muy corta';
  }

  if (error === 'auth/email-already-in-use') {
    result = 'Este usuario ya está registrado';
  }
  return result;
};
