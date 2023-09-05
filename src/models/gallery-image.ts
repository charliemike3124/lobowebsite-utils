import { StringObject, NumberObject } from '../types';

export type GalleryImage = {
  id: number;
  name: string;
  description: string;
  order: number;
  urls: StringObject;
  sizes: StringObject;
  metadata: Object;
  versions?: NumberObject;
  urlsLowquality?: StringObject;
  ignore?: Object;
};
