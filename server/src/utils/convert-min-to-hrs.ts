/**
 * This function is used to convert the String to hours, so I can use it in the database.
 * Example: 1100 will be converted to 18:20 
 */

export function convertMinToHrs(min: number) {
  const hours = Math.floor(min / 60);
  const minutes = min % 60;

  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}