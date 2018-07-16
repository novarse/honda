import { MyImage } from '../domain/myImage';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Constants } from '../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  
  image: BehaviorSubject<MyImage> = new BehaviorSubject(Constants.IMG_LIST[0]);

  constructor() {}
  
  setImage(img: MyImage) {
    this.image.next(img);
  }
}
