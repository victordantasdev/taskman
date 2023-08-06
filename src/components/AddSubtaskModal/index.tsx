import { X } from "@phosphor-icons/react";

import { type AddSubtaskModalProps } from "./types";

export function AddSubtaskModal({
  open,
  subtaskName,
  onClose,
  setSubtaskName,
  addSubtask,
  subtaskNameError,
  setSubaskNameError,
}: AddSubtaskModalProps) {
  return (
    <>
      {open && (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-sm"
            onClick={(e) => {
              const isSafeArea = (e.target as Element).closest('[data-modal-safe-area="true"]');

              if (!isSafeArea) {
                onClose();
              }
            }}
          >
            <div className="relative w-[100%] pr-4 pl-4 my-6 mx-auto max-w-3xl">
              <div
                data-modal-safe-area
                className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none animate-fade animate-duration-300"
              >
                <div className="flex items-start justify-between p-5 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Add subtask
                  </h3>

                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={onClose}
                  >
                    <X size={24} color="#000" />
                  </button>
                </div>

                <div
                  className="w-full flex flex-col pl-6 pr-6"
                >
                  <input
                    type="text"
                    id="task-name"
                    value={subtaskName}
                    onChange={(e) => {
                      setSubtaskName(e.target.value);
                      setSubaskNameError(false);
                    }}
                    className={`border-2 p-2 rounded-md w-full ${subtaskNameError && 'border-red-500'}`}
                    placeholder="Subtask name *"
                    autoFocus
                  />
                  {subtaskNameError && <p className="text-red-500">Required field</p>}
                </div>

                <div className="flex items-center justify-end p-6 rounded-b">
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={addSubtask}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
}
