import { Injectable } from '@angular/core';
import {
  Storage,
  getDownloadURL,
  ref,
  uploadBytes,
} from '@angular/fire/storage';
@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private storage: Storage) {}

  async guardarImg(img) {
    const imgRef = ref(this.storage, `img/${new Date().getTime()}`);
    await uploadBytes(imgRef, img);
    const re: string = await getDownloadURL(imgRef);
    return re;
  }
}
