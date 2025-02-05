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
  const [editor] = useState(() => withReact(createEditor()));


  return (
    // Add the editable component inside the context.
    <Slate editor={editor} initialValue={initialValue}>
      <Editable
        onChange={(event) => {
          console.log(event.key);
        }}
      />
    </Slate>
  );
}
