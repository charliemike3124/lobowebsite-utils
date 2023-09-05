"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerHelper = void 0;
const enums_1 = require("../enums");
exports.ServerHelper = {
    formLoboConfigKey(websiteName, feature) {
        return `${websiteName}.loboconfig.${feature}`;
    },
    formImageCacheKey(websiteName, id, compressedWidth = 0) {
        return `${websiteName}.${enums_1.Feature.images}.${id}.${compressedWidth}`;
    },
    formGalleryCacheKey(websiteName, id, key, compressedWidth = 0) {
        return `${websiteName}.${enums_1.Feature.images}.${id}.${key}.${compressedWidth}`;
    },
};
