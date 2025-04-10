import rules from "./rules";
import regex from "./regex";
import ValidationRule from "./ValidationRule";

const validators = (value: string, validations: ValidationRule[]): boolean => {
  const validationResults: boolean[] = [];

  for (const validator of validations) {
    if (validator.value === rules.requiredValue) {
      if (value.trim().length === 0) {
        validationResults.push(false);
      }
    }
    if (validator.value === rules.minValue) {
      if (validator.min !== undefined && value.trim().length < validator.min) {
        validationResults.push(false);
      }
    }
    if (validator.value === rules.maxValue) {
      if (validator.max !== undefined && value.trim().length > validator.max) {
        validationResults.push(false);
      }
    }
    if (validator.value === rules.emailValue) {
      if (!regex.testEmail(value)) {
        validationResults.push(false);
      }
    }
    if (validator.value === rules.mobileNumberValue) {
      if (!regex.testMobileNumber(value)) {
        validationResults.push(false);
      }
    }
  }

  if (validationResults.length) {
    return false;
  } else {
    return true;
  }
};

export default validators;
