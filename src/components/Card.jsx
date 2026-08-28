function Card({
  title,
  value,
  description,
  icon,
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">

      <div className="flex items-start justify-between">

        {/* Text */}
        <div>

          <p className="text-sm font-medium text-gray-500">
            {title}
          </p>

          <h3 className="mt-2 text-2xl font-bold text-gray-800">
            {value}
          </h3>

          <p className="mt-1 text-xs text-gray-500">
            {description}
          </p>

        </div>

        {/* Icon */}
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
          {icon}
        </div>

      </div>

    </div>
  );
}

export default Card;