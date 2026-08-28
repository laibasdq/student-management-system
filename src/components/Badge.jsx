function Badge({ status, variant }) {
  const badgeType = variant || status;

  const styles = {
    Active: "bg-green-100 text-green-700",
    Inactive: "bg-red-100 text-red-700",
    Pending: "bg-yellow-100 text-yellow-700",

    Success: "bg-green-100 text-green-700",
    Danger: "bg-red-100 text-red-700",
    Warning: "bg-yellow-100 text-yellow-700",
    Info: "bg-blue-100 text-blue-700",
    Primary: "bg-blue-100 text-blue-700",
    Secondary: "bg-gray-100 text-gray-700",
  };

  const badgeStyle =
    styles[badgeType] || "bg-gray-100 text-gray-700";

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${badgeStyle}`}
    >
      {status || variant}
    </span>
  );
}

export default Badge;