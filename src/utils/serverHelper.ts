import { Feature } from '../enums';

export const ServerHelper = {
  formLoboConfigKey(websiteName: string, feature: Feature) {
    return `${websiteName}.loboconfig.${feature}`;
  },
  formImageCacheKey(websiteName: string, id: string, compressedWidth: number = 0) {
    return `${websiteName}.${Feature.images}.${id}.${compressedWidth}`;
  },
  formGalleryCacheKey(websiteName: string, id: string, key: string, compressedWidth: number = 0) {
    return `${websiteName}.${Feature.gallery}.${id}.${key}.${compressedWidth}`;
  },
};
