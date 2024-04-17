
// Replace  2024-04-24T12:32:00 to 24/04/2024 12:32h
export const dateConverter = (param) =>  {
    const formattedDate = new Date(param).toLocaleString('es-ES', {
     day: '2-digit',
     month: '2-digit',
     year: 'numeric',
     hour: 'numeric',
     minute: '2-digit',
     hour12: false,
   }) + "h";

   return formattedDate
 };