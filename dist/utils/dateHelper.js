"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateHelper = void 0;
const date_fns_1 = require("date-fns");
exports.DateHelper = {
    getCurrentUTCTimestamp() {
        return new Date().getTime();
    },
    timestampToDate(timestamp) {
        let ts = timestamp;
        if (typeof timestamp === 'string') {
            ts = parseInt(timestamp);
        }
        return new Date(ts);
    },
    formatDate(date, stringFormat) {
        return (0, date_fns_1.format)(date, stringFormat);
    },
};
