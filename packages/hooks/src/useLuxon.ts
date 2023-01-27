import { DateTime } from "luxon";

export default function uxeLuxon(currentLanguage: string) {
  function convertToDate(time: string) {
    return new Date(time);
  }

  function getUpdatedDate(updatedAt: string) {
    const date = convertToDate(updatedAt);

    return DateTime.local()
      .setLocale(currentLanguage)
      .minus({ days: date.getDay() })
      .toRelative() as string;
  }

  return {
    DateTime,
    convertToDate,
    getUpdatedDate,
  };
}
