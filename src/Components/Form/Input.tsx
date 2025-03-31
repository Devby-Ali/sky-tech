import React, { ChangeEvent, useEffect, useReducer } from "react";
import validators from "../../validators/validator";

interface InputState {
  value: string;
  isValid: boolean;
}

interface ValidationRule {
  type: string;
  value?: number | string;
  message?: string;
}

type InputAction = {
  type: "CHANGE";
  value: string;
  validations: ValidationRule[];
};

interface InputProps {
  id: string;
  element?: "input" | "textarea";
  type?: "text" | "password" | "email" | "number" | "tel";
  placeholder?: string;
  className?: string;
  validations?: ValidationRule[];
  onInputHandler: (id: string, value: string, isValid: boolean) => void;
}

const inputReducer = (state: InputState, action: InputAction) => {
  switch (action.type) {
    case "CHANGE": {
      return {
        ...state,
        value: action.value,
        isValid: validators(action.value, action.validations),
      };
    }
    default: {
      return state;
    }
  }
};

const Input: React.FC<InputProps> = (props) => {
  const [mainInput, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
  });

  const { value, isValid } = mainInput;
  const { id, onInputHandler } = props;

  useEffect(() => {
    onInputHandler(id, value, isValid);
  }, [value]);

  const onChangeHandler = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch({
      type: "CHANGE",
      value: event.target.value,
      validations: props.validations,
    });
  };

  const element =
    props.element === "textarea" ? (
      <textarea
        className={props.className}
        placeholder={props.placeholder}
        onChange={onChangeHandler}
        value={mainInput.value}
      />
    ) : (
      <input
        className={`${props.className} ${
          mainInput.isValid
            ? "text-emerald-600 dark:text-emerald-400"
            : "text-red-600 dark:text-red-300"
        }`}
        type={props.type}
        placeholder={props.placeholder}
        onChange={onChangeHandler}
        value={mainInput.value}
      />
    );

  return <div>{element}</div>;
};

export default Input;
