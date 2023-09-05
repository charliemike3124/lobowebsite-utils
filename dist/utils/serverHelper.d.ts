import { Feature } from '../enums';
export declare const ServerHelper: {
    formLoboConfigKey(websiteName: string, feature: Feature): string;
    formImageCacheKey(websiteName: string, id: string, compressedWidth?: number): string;
    formGalleryCacheKey(websiteName: string, id: string, key: string, compressedWidth?: number): string;
};
