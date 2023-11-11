import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

const NewProject = ({ onSave, onCancel, ...props }) => {
  const title = useRef();
  const desc = useRef();
  const dueDate = useRef();
  const modal = useRef(); // allows us to use the exposed methods in the modal
  // e.g. modal.current.open

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDesc = desc.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDesc.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return; // early return
    }

    onSave({
      title: enteredTitle,
      desc: enteredDesc,
      dueDate: enteredDueDate,
    });
  }

  function handleCancel() {
    onCancel();
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops ... looks like you forgot to enter a value. <br />
          Please make sure you provide a valid input for each field.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={title} label="Title" />
          <Input ref={desc} label="Description" isTextArea />
          <Input type="date" ref={dueDate} label="Due Date" />
        </div>
      </div>
    </>
  );
};

export default NewProject;
