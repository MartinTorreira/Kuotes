const TimePicker = ({ value, onChange }) => {
    return (
      <input
        className="text-gray-900 dark:text-gray- bg-gray-200 border-2 border-gray-400 text-gray-900 text-sm rounded focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-[#29292E] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 input-field"
        type="time"
        value={value}
        onChange={onChange}
        required
      />
    );
  };

  export default TimePicker;