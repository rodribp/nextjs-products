import Icon from "@/app/components/icons";

export default function SearchBar() {
  return (
    <form className="flex items-center max-w-sm mx-auto">
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <Icon name="shopping-bag" size={20} />
        </div>
        <input
          type="text"
          id="simple-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-light focus:border-primary-light block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search product name..."
          required
        />
      </div>
      <button
        type="submit"
        className="p-3 ms-2 text-sm font-medium text-white rounded-lg bg-gradient-to-r from-primary-dark to-primary-light"
      >
        <Icon name="search" size={20} color="white" />
        <span className="sr-only">Search</span>
      </button>
    </form>
  );
}
