import { DataSharingService } from '../../services/data-sharing.service';
import { Component, OnInit } from '@angular/core';
import { MyImage } from '../../domain/myImage';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  
  imageName: string;
  imageDesc: string;

  constructor(private dataSharingService: DataSharingService) { 
    this.dataSharingService.image.subscribe(img => {
      this.imageName = 'assets/img/' + img.getName();
      this.imageDesc = img.getDesc();
    });
  }

  ngOnInit() {
    
  }

}
