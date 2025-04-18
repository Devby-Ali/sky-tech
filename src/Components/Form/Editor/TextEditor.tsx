import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Code from "@tiptap/extension-code";
import Image from "@tiptap/extension-image";
import { useState } from "react";

const RichTextEditor = ({ onSave }) => {
  const [content, setContent] = useState("");

  const editor = useEditor({
    extensions: [StarterKit, Code, Image],
    content: content,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setContent(html);
    },
  });

  const addImage = (event) => {
    event.preventDefault()
    const url = prompt("آدرس تصویر را وارد کنید");
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    onSave({ content });
  };

  if (!editor) {
    return null;
  }

  return (
    <div className="editor-container flex flex-col gap-y-8">

      <div className="toolbar *:bg-white/15 flex gap-x-4 *:px-4 *:rounded-md">
        <button
          onClick={(e) => {
            e.preventDefault()
            editor.chain().focus().toggleBold().run()
          }}
          className={editor.isActive("bold") ? "active" : ""}
        >
          Bold
        </button>
        <button onClick={() => addImage(event)}>تصویر</button>
        <button onClick={() => editor.chain().focus().toggleCode().run()}>
          کد
        </button>
        {/* اضافه کردن دکمههای بیشتر */}
      </div>

      <EditorContent editor={editor} className="editor-content bg-white/15 max-w-180 rounded-md *:h-95 overflow-y-scroll" />

      <button onClick={() => handleSubmit(event)} className="submit-button bg-white/15 rounded-md py-3">
        ذخیره مقاله
      </button>
    </div>
  );
};

export default RichTextEditor;
