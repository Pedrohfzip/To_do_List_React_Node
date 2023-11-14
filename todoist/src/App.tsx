import "./App.css";
import { useState } from "react";
//components
// import Form from "./components/Form";
// import GridNotes from "./components/GridNotes";

type Note = {
  id: number;
  title: string;
  content: string;
};
const App = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("titles: ", title);
    console.log("content: ", content);

    const newNote: Note = {
      id: notes.length + 1,
      title: title,
      content: content,
    };

    setNotes([newNote, ...notes]);
    setTitle("");
    setContent("");
  };
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState<Note[]>([
    {
      id: 1,
      title: "Title 1",
      content: "content 1",
    },
    {
      id: 2,
      title: "Title 2",
      content: "content 2",
    },
  ]);
  return (
    <div className="app-container">
      <form className="note-form" onSubmit={(event) => handleSubmit(event)}>
        <input
          value={title}
          onChange={(title) => setTitle(title.target.value)}
          placeholder="title"
          required
        />
        <textarea
          value={content}
          onChange={(content) => setContent(content.target.value)}
          placeholder="Content"
          rows={10}
          required
        ></textarea>
        <button type="submit">Add note</button>
      </form>
      <div className="notes-grid">
        {notes.map((note) => (
          <div key={note.id} className="note-item">
            <div className="notes-header">
              <button>X</button>
            </div>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
