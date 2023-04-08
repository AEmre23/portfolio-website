export function calculateRelativeDate({ day, month, year, language }) {
  const startDate = new Date(`${month} ${day}, ${year}`);
  const currentDate = new Date();

  // Calculate the difference in months between the start date and current date
  const diffInMonths =
    (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
    (currentDate.getMonth() - startDate.getMonth());

  // Calculate the number of years and months
  const diffInYears = Math.floor(diffInMonths / 12);
  const diffInRemainingMonths = diffInMonths % 12;

  // Create the duration text
  let durationText;
  if (language === "tr") {
    durationText = `${diffInYears} yıl, ${
      diffInRemainingMonths === 0 ? 1 : diffInRemainingMonths
    } aydır frontend geliştirici olarak çalışıyorum.`;
  } else {
    durationText = `I have been working as a frontend developer for ${diffInYears} year`;
    if (diffInRemainingMonths > 0) {
      durationText += ` and ${diffInRemainingMonths} month.`;
    }
  }

  return durationText;
}
