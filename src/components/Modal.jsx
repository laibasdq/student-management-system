import { FiX, FiTrash2 } from "react-icons/fi";

function Modal({
  isOpen,
  onClose,
  onConfirm,
  title = "Delete Student?",
  message = "Are you sure you want to delete this student?",
}) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4">

      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">

        {/* Header */}
        <div className="flex items-start justify-between">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600">
              <FiTrash2 size={20} />
            </div>

            <h2 className="text-lg font-semibold text-gray-800">
              {title}
            </h2>

          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-gray-500 hover:bg-gray-100"
          >
            <FiX size={20} />
          </button>

        </div>

        {/* Message */}
        <p className="mt-4 text-sm leading-6 text-gray-500">
          {message}
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={onConfirm}
            className="rounded-lg bg-red-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-700"
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}

export default Modal;