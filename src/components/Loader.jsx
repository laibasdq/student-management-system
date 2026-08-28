function Loader({ text = "Loading..." }) {
  return (
    <div className="flex min-h-[400px] w-full items-center justify-center">
      <div className="flex flex-col items-center">

        {/* Spinner */}
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600"></div>

        {/* Text */}
        <p className="mt-4 text-sm font-medium text-gray-500">
          {text}
        </p>

      </div>
    </div>
  );
}

export default Loader;