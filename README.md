# LoboWebsites Types, Models and Utils Package

This is a package containing common types, enums, and models used across LoboWebsite projects.

## Installation

You can install this package using npm:

npm i lobowebsites-utils

## Usage

```typescript
import { Feature, FirebaseImage, LoboImage, GalleryImage } from 'lobowebsites-utils';

// Use the types, enums, and models in your code
const image: FirebaseImage = {
  id: 1,
  name: 'example.jpg',
  // ...
};

console.log(Feature.images); // "images"
```
