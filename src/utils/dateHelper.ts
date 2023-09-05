export const DateHelper = {
  getCurrentUTCTimestamp() {
    return new Date().getTime();
  },

  timestampToDate(timestamp: number): Date {
    return new Date(timestamp);
  },

  formatDate(date: Date, format: string) {
    const getMonthName = (month: number, length: 'long' | 'short') => {
      const options: Intl.DateTimeFormatOptions = { month: length };
      return new Intl.DateTimeFormat('en-US', options).format(new Date(2000, month - 1));
    };

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return format
      .replace(/YYYY/g, year.toString())
      .replace(/YY/g, year.toString().slice(-2))
      .replace(/MMMM/g, getMonthName(month, 'long'))
      .replace(/MMM/g, getMonthName(month, 'short'))
      .replace(/MM/g, month.toString().padStart(2, '0'))
      .replace(/M/g, month.toString())
      .replace(/DD/g, day.toString().padStart(2, '0'))
      .replace(/D/g, day.toString())
      .replace(/HH/g, hours.toString().padStart(2, '0'))
      .replace(/H/g, hours.toString())
      .replace(/mm/g, minutes.toString().padStart(2, '0'))
      .replace(/m/g, minutes.toString())
      .replace(/ss/g, seconds.toString().padStart(2, '0'))
      .replace(/s/g, seconds.toString());
  },
};
