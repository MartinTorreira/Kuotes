


const InputForm = ({ label, type, name, value, onChange, placeholder }) => {

    return(
        <div className="mb-5">
            <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
            <input 
                className="focus:outline-none dark:focus:ring-gray-100 focus:border-none text bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#181414] dark:border-gray-500 dark:placeholder-gray-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 input-field"
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    )

};

export default InputForm;