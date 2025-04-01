const REGEX_PATTERNS = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  MOBILE: /^09[0-9]{9}$/,
} as const;

const testEmail = (value: string): boolean => {
  return REGEX_PATTERNS.EMAIL.test(value);
};

const testMobileNumber = (value: string): boolean => {
  const mobileNumbersPattern = /^(\+98|0)?9\d{9}$/g;
  return mobileNumbersPattern.test(value);
};

const testCodeMelli = (value: string): boolean => {
  const emailPattent = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/g;
  emailPattent.test(value);
  return false;
};

export default {
  testEmail,
  testCodeMelli,
  testMobileNumber,
};
