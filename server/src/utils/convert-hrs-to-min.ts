/**
 * This function is used to convert the String to hours, so I can use it in the database.
 * Example: 11:00 will be converted to ["11", "00"] = [11, 00]
 * 
 */
export function convertHrsStringToMin(hourString: string) {
  const [hours, minutes] = hourString.split(':').map(Number);
  const timeInMinutes = (hours * 60) + minutes;
  
  return timeInMinutes;
}