import { useEffect, useState } from "react";

const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true);
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [inputValid, setInputValid] = useState(false);
  const [emailHelperTextError, setEmailHelperTextError] = useState("");
  const [passwordHelperTextError, setPasswordHelperTextError] = useState("");
  //Паттерны валидации
  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "isEmpty":
          value ? setEmpty(false) : setEmpty(true);
          break;

        case "isPassword":
          /* eslint-disable */
          const passwordRe =
            /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{7,}$/;
          /* eslint-enable */
          passwordRe.test(value) ? setIsPassword(false) : setIsPassword(true);
          break;
        case "isEmail":
          /* eslint-disable */
          const emailRe =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          /* eslint-enable */
          emailRe.test(String(value).toLowerCase())
            ? setIsEmail(false)
            : setIsEmail(true);
          break;
      }
    }
  }, [value, validations]);
  //Проверка email и создание текста ошибки
  useEffect(() => {
    if (!isEmpty && isEmail) {
      setEmailHelperTextError("email is not correct");
    } else {
      setEmailHelperTextError("");
    }
  }, [isEmpty, isEmail]);
  //Проверка password и создание текста ошибки
  useEffect(() => {
    if (!isEmpty && isPassword) {
      setPasswordHelperTextError("password not correct");
    } else {
      setPasswordHelperTextError(false);
    }
  }, [isEmpty, isPassword]);
  //Валидация кнопки
  useEffect(() => {
    if (isEmpty || isPassword || isEmail) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [isEmpty, isPassword, isEmail]);

  return {
    isEmpty,
    isEmail,
    isPassword,
    emailHelperTextError,
    passwordHelperTextError,
    inputValid,
  };
};

export { useValidation };
