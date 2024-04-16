export const lowerCaseExceptFirst = (str) => {
    if (typeof str !== "string" || str.length < 1) return "";
    return str.charAt(0) + str.slice(1).toLowerCase();
}