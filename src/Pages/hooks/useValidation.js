import { useEffect, useState } from "react";

const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true);
  const [minLengthError, setMinLemgthError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [inputValid, setInputValid] = useState(false);
  // const [helperTextError, setHelperTextError] = useState('');

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "minLength":
          value.length < validation[validations]
            ? setMinLemgthError(true)
            : setMinLemgthError(false);

          break;

        case "isEmpty":
          value ? setEmpty(false) : setEmpty(true);
          break;

        case "isEmail":
          const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
          re.test(String(value).toLowerCase())
            ? setEmailError(false)
            : setEmailError(true);
      }
    }
  }, [value, validations]);

  useEffect(() => {
    if (isEmpty || minLengthError || emailError) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [isEmpty, minLengthError, emailError]);

  return {
    isEmpty,
    minLengthError,
    emailError,
    inputValid,
  };
};

export { useValidation };
