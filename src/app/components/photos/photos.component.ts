import { DataSharingService } from '../../services/data-sharing.service';
import { Component, OnInit } from '@angular/core';
import { MyImage } from '../../domain/myImage';
import { Constants } from '../../utils/constants';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  
  imageName: string;
  imageDesc: string;

  images: MyImage[];

  ngOnInit() {
    this.images = Constants.IMG_LIST;
  }

  constructor(private dataSharingService: DataSharingService,
    private _http: HttpClient) {
    this.dataSharingService.image.subscribe(img => {
      this.imageName = 'assets/img/' + img.getName();
      this.imageDesc = img.getDesc();
    });
  }

}
