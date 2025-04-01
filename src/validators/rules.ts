import ValidationRule from "./ValidationRule";

const requiredValue = "REQUIRED_VALUE" as const;
const minValue = "MIN_VALUE" as const;
const maxValue = "MAX_VALUE" as const;
const emailValue = "EMAIL_VALUE" as const;
const mobileNumberValue = "MOBILE-NUMBER_VALUE" as const;


export const requiredValidator = (): ValidationRule => ({
  value: requiredValue,
});

export const minValidator = (min: number): ValidationRule => ({
  value: minValue,
  min,
});

export const maxValidator = (max: number): ValidationRule => ({
  value: maxValue,
  max,
});

export const emailValidator = (): ValidationRule => ({
  value: emailValue,
});


export const mobileNumberValidator = (): ValidationRule => ({
  value: mobileNumberValue,
});

export default { requiredValue, minValue, maxValue, emailValue, mobileNumberValue };
