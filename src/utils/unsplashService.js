import Unsplash, { toJson } from 'unsplash-js';

export default class UnsplashService {

  constructor() {
    this.service = new Unsplash({
      applicationId: '202fb05f7b1b707380ebcc900f8c6c0b36e618369aa89b03a9653157028f9bbf',
      secret: 'bc316b3b239c7b5718dd504fd6b61fdd6f5b192593c404ca85b3b25a21cdbe3b'
    });
  }

  searchPhotos(query) {
    return this.service.search.photos(query, 1).then(toJson);
  }
}