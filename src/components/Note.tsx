import { Note as NoteModel } from "../models/note";
import { formatMongoDate } from "../utils/formatDate";

interface NoteProps {
    note: NoteModel,
    className?: string,
    key: string
}

const Note = ({ note, className, key }: NoteProps) => {

    const {
        title,
        text,
        createdAt,
        updatedAt
    } = note;

    let formatedUpdatedDate: string;

    if (updatedAt > createdAt) {
        formatedUpdatedDate = "Updated " + formatMongoDate(updatedAt);
    } else {
        formatedUpdatedDate = "Created " + formatMongoDate(createdAt);
    }

    return (
        <div className={`${className} flex flex-col`} key={`${key}`}>
            <div className="gradient-mask-b-60 overflow-hidden h-full m-2 mb-0.5">
                <h1 className="text-black text-base font-medium">Titre : {title}</h1>
                <h2 className="text-slate-600 text-sm font-normal mr-2 pt-1 whitespace-pre-line">Description : {text}</h2>
            </div>
            <div className="w-full p-2 bg-slate-300 rounded-b">
                <p className="text-slate-500 text-xs font-normal">{formatedUpdatedDate}</p>
            </div>
        </div>
    )
}

export default Note;