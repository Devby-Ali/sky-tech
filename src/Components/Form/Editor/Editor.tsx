import React, { useState, useCallback } from "react";
import { createEditor, Descendant, Element as SlateElement } from "slate";
import { Slate, Editable, withReact, ReactEditor } from "slate-react";

type CustomElement = {
  type: "paragraph";
  children: CustomText[];
};

type CustomText = {
  text: string;
};

type EditorProps = {
  value: string;
  setValue: (value: string) => void;
};

const initialValue: Descendant[] = [
  {
    type: "paragraph",
    children: [{ text: "..." }],
  },
];

const Editor: React.FC<EditorProps> = ({ value, setValue }) => {
  const [editor] = useState(() => withReact(createEditor()));

  // تبدیل string به Descendant
  const parseValue = useCallback((str: string): Descendant[] => {
    try {
      return JSON.parse(str);
    } catch {
      return initialValue;
    }
  }, []);

  // تعریف renderElement برای custom elements
  const renderElement = useCallback((props: any) => {
    switch (props.element.type) {
      case "paragraph":
        return <p {...props.attributes}>{props.children}</p>;
      default:
        return <p {...props.attributes}>{props.children}</p>;
    }
  }, []);

  // تعریف renderLeaf برای custom text
  const renderLeaf = useCallback((props: any) => {
    return <span {...props.attributes}>{props.children}</span>;
  }, []);

  // تعریف onChange handler
  const handleChange = useCallback(() => {
    const isAstChange = editor.operations.some(
      (op) => "set_selection" !== op.type
    );
    if (isAstChange) {
      // تبدیل محتوا به string
      const content = JSON.stringify(editor.children);
      setValue(content);
    }
  }, [editor, setValue]);

  return (
    <Slate
      editor={editor}
      initialValue={parseValue(value)}
      onChange={handleChange}
    >
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        placeholder="متن مقاله را وارد کنید..."
      />
    </Slate>
  );
};

export default Editor;
