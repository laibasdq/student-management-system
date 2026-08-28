```jsx
import { FiSearch } from "react-icons/fi";

function SearchBar({
  value,
  onChange,
  placeholder = "Search students...",
}) {
  return (
    <div className="relative w-full md:w-80">
      <div className="flex items-center rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 shadow-sm transition focus-within:border-blue-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100">
        
        <FiSearch
          size={20}
          className="shrink-0 text-blue-600"
        />

        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="ml-3 w-full bg-transparent text-sm text-gray-700 placeholder:text-gray-400 outline-none"
        />

      </div>
    </div>
  );
}

export default SearchBar;
```

