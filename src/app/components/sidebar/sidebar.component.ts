import { MyImage } from '../../domain/myImage';
import { DataSharingService } from '../../services/data-sharing.service';
import { Component, OnInit } from '@angular/core';
import { Constants } from '../../utils/constants';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  imgList: MyImage[];
  
  constructor(private dataSharingService: DataSharingService) {
  }

  ngOnInit() {
    this.imgList = Constants.IMG_LIST;
  }

  showImg(img: MyImage) {
    console.log('imgName = ' + img);
    this.dataSharingService.setImage(img);
  }
}
