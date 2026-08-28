import { FiUsers, FiPlus } from "react-icons/fi";

function EmptyState({
  title = "No Students Found",
  description = "There are no students available right now.",
  buttonText = "Add Student",
  onButtonClick,
}) {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 bg-white p-8 text-center">

      {/* Icon */}
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-600">
        <FiUsers size={30} />
      </div>

      {/* Title */}
      <h2 className="mt-5 text-lg font-semibold text-gray-800">
        {title}
      </h2>

      {/* Description */}
      <p className="mt-2 max-w-md text-sm text-gray-500">
        {description}
      </p>

      {/* Button */}
      {onButtonClick && (
        <button
          type="button"
          onClick={onButtonClick}
          className="mt-5 flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          <FiPlus size={17} />
          {buttonText}
        </button>
      )}

    </div>
  );
}

export default EmptyState;