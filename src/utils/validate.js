export const checkValidateData = (formEnteries) => {
  const { username, email, password } = formEnteries;
  if (username) {
    const isNameValid = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/.test(username);
    if (!isNameValid) return "Name is not valid";
  }
  const isEmailValid = /^[\w\-.]+@([\w-]+\.)+[\w-]{2,}$/gm.test(email);
  const isPasswordValid =
    /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);
  if (!isEmailValid) return "Email is not valid";
  if (!isPasswordValid) return "Password is not valid";
  if (isEmailValid && isPasswordValid) return null;
};
