import { useEffect, useState } from "react";
import { Note as NoteModel } from "./models/note";
import Note from "./components/Note";
import * as NotesApi from "./network/notes_api"
import RoundedIconButton from "./components/RoundedIconButton";
import AddNoteDialog from "./components/AddNoteDialog";

function App() {
  const [notes, setNotes] = useState<NoteModel[]>([]);

  const [showAddNoteDialog, setShowAddNoteDialog] = useState(true);

  useEffect(() => {
    async function loadNotes() {
      try {
        const notes = await NotesApi.fetchNotes();
        setNotes(notes)
      } catch (error) {
        console.error(error);
        alert(error);
      }
    }
    loadNotes();
  }, []); // Recomposotion key lol like jetpack compose

  return (
    <div className="w-full">
      <header className="items-center flex flex-row h-16 px-4 bg-slate-700">
        <RoundedIconButton className="flex justify-center items-center ml-auto h-10 w-10 bg-slate-300 rounded-full"/>
      </header>
      <section className="p-4 grid content-center sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {
          notes.map(note => (
            <Note note={note} key={note._id} className="border-slate-500 border-2 h-48 min-w-150 cursor-pointer rounded-md bg-slate-200 hover:bg-slate-300 hover:translate transition ease-out duration-500 hover:translate-x-1 hover:translate-y-1"/>
          ))
        }
      </section>
      { showAddNoteDialog &&
        <AddNoteDialog/>
      }
    </div>
  );
}

export default App;
