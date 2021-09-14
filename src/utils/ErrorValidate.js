export const ErrorValidate = (errorcito) => {
  let result = 'Nel pastel';
  if (errorcito === 'auth/invalid-email') {
    result = 'Tu Correo esta invalido y feo';
  }
  return result;
};
