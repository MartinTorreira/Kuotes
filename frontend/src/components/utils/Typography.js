export const lowerCaseExceptFirst = (str) => {
    if (typeof str !== "string" || str.length < 1) return "";
    return str.charAt(0) + str.slice(1).toLowerCase();
}

export const getImportanceColor = (importance) => {
    switch (importance) {
        case 'CRITICAL':
            return "text-red-800 dark:text-red-500";
        case 'IMPORTANT':
            return 'text-yellow-800 dark:text-yellow-500';
        case 'MEDIUM':
            return 'text-blue-800 dark:text-blue-500 ';
        case 'LOW':
            return 'text-green-800 dark:text-green-500 ';
        default:
            return 'text-gray-800 dark:text-gray-500 ';
    }
};

export const importanceBg = (importance) => {
    switch (importance) {
        case 'CRITICAL':
            return "bg-red-400 dark:bg-red-800/40 text-gray-700 dark:text-gray-300";
        case 'IMPORTANT':
            return 'bg-yellow-500 dark:bg-yellow-800/40 text-gray-700 dark:text-gray-300';
        case 'MEDIUM':
            return 'bg-green-400 dark:bg-green-800/40 text-gray-700 dark:text-gray-300 ';
        case 'HIGH':
            return 'bg-blue-300 dark:bg-blue-800/40 text-gray-700 dark:text-gray-300';
        case 'LOW':
            return 'bg-gray-300 dark:bg-gray-600/40  text-gray-700 dark:text-gray-300';
        default:
            return 'bg-gray-500 dark:bg-gray-800/40 text-gray-700 dark:text-gray-300';
    }
};