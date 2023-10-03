import { format } from 'date-fns';

export const DateHelper = {
  getCurrentUTCTimestamp() {
    return new Date().getTime();
  },

  timestampToDate(timestamp: number | string): Date {
    let ts = timestamp;
    if (typeof timestamp === 'string') {
      ts = parseInt(timestamp);
    }
    return new Date(ts);
  },

  formatDate(date: Date, stringFormat: string): string {
    return format(date, stringFormat);
  },
};
