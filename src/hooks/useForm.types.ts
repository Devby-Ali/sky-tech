export interface FormInput {
  value: string;
  isValid: boolean;
}

export interface FormInputs {
  [key: string]: FormInput;
}

export interface FormState {
  inputs: FormInputs;
  isFormValid: boolean;
}

export interface FormAction {
  type: "INPUT_CHANGE";
  inputID: string;
  value: string;
  isValid: boolean;
}
