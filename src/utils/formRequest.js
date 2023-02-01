export const isValidationError = (status, message = '入力値が不正です') => {
  if (status === 422) alert(message);
};
