import React, { useState } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";

const initialValue = [
  {
    type: "paragraph",
    children: [{ text: "..." }],
  },
];

export default function Editor({ articleBody, setArticleBody }) {
  const [editorContent, setEditorContent] = useState([]);
  const [editor] = useState(() => withReact(createEditor()));

  const onChangeHandler = (event) => {
    console.log(event);
  };

  return (
    // Add the editable component inside the context.
    <Slate
      onChange={onChangeHandler}
      editor={editor}
      initialValue={initialValue}
    >
      <Editable />
    </Slate>
  );
}
