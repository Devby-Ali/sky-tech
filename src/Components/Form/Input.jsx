import React, { useEffect, useReducer } from "react";
import validators from "../../validators/validator";

const inputReducer = (state, action) => {
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

export default function Input(props) {
  const [mainInput, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
  });

  const { value, isValid } = mainInput;
  const { id, onInputHandler } = props;

  useEffect(() => {
    onInputHandler(id, value, isValid);
  }, [value]);

  const onChangeHandler = (event) => {
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
}
