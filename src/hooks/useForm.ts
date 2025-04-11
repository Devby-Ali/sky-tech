import { useCallback, useReducer } from "react";
import { FormInputs, FormState, FormAction } from "./useForm.types";

const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case "INPUT_CHANGE": {
      let isFormValid = true;
      for (const inputID in state.inputs) {
        if (inputID === action.inputID) {
          isFormValid = isFormValid && action.isValid;
        } else {
          isFormValid = isFormValid && state.inputs[inputID].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputID]: {
            value: action.value,
            isValid: action.isValid,
          },
        },
        isFormValid: isFormValid,
      };
    }
    default: {
      return state;
    }
  }
};

export const useForm = <T extends FormState>(
  initInputs: FormInputs,
  initFormIsvalid: boolean
): [T, (id: string, value: string, isValid: boolean) => void] => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initInputs,
    isFormValid: initFormIsvalid,
  });

  const onInputHandler = useCallback(
    (id: string, value: string, isValid: boolean) => {
      dispatch({
        type: "INPUT_CHANGE",
        value,
        isValid,
        inputID: id,
      });
    },
    []
  );

  return [formState as T, onInputHandler];
};
