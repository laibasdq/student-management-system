import {
  FiLoader,
} from "react-icons/fi";

function Button({
  children,
  variant = "primary",
  size = "medium",
  type = "button",
  onClick,
  disabled = false,
  loading = false,
  className = "",
}) {
  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700",
    secondary:
      "bg-gray-100 text-gray-700 hover:bg-gray-200",
    success:
      "bg-green-600 text-white hover:bg-green-700",
    danger:
      "bg-red-600 text-white hover:bg-red-700",
    outline:
      "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50",
    ghost:
      "bg-transparent text-gray-600 hover:bg-gray-100",
  };

  const sizes = {
    small:
      "px-3 py-1.5 text-xs",
    medium:
      "px-4 py-2.5 text-sm",
    large:
      "px-6 py-3 text-base",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`flex items-center justify-center gap-2 rounded-lg font-medium transition ${variants[variant]} ${sizes[size]} ${
        disabled || loading
          ? "cursor-not-allowed opacity-50"
          : ""
      } ${className}`}
    >
      {loading && (
        <FiLoader
          size={16}
          className="animate-spin"
        />
      )}

      {loading ? "Loading..." : children}
    </button>
  );
}

export default Button;