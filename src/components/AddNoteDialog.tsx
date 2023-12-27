const AddNoteDialog = () => {
    return ( 
        <dialog className="bg-black bg-opacity-50 w-screen h-screen overflow-y-auto overflow-x-hidden fixed top-0 left-0 z-50 justify-center items-center max-h-full" open>
            <div slot="headline">
                Dialog title
            </div>
            <form slot="content" id="form-id" method="dialog">
                A simple dialog with free-form content.
            </form>
            <div slot="actions">
                <button>Ok</button>
            </div>
        </dialog>
     );
}
 
export default AddNoteDialog;