export const logDate = (inputDate: Date): string => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = inputDate.getDate();
  const yearLastTwoDigits = inputDate.getFullYear() % 100;
  const month = months[inputDate.getMonth()];
  const hours = inputDate.getHours();
  const minutes = inputDate.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = (hours % 12 ?? 12).toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");

  return `${month} ${day.toString().padStart(2, "0")}, ${yearLastTwoDigits
    .toString()
    .padStart(2, "0")} - ${formattedHours}:${formattedMinutes}${ampm}`;
};
