import {DataSharingService} from '../../services/data-sharing.service';
import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {MyImage} from '../../domain/myImage';
import {Constants} from '../../utils/constants';
import {HttpClient} from '@angular/common/http';
import {NgbCarousel} from '@ng-bootstrap/ng-bootstrap';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit, AfterViewInit {

  @ViewChild('myCarousel') myCarousel: NgbCarousel;
  images: MyImage[];

  ngOnInit() {
    this.images = Constants.IMG_LIST;
  }

  constructor(private dataSharingService: DataSharingService,
    private _http: HttpClient) {
  }
  
  ngAfterViewInit() {
    this.dataSharingService.image.subscribe(img => {
      this.myCarousel.select(img.getName());
    });
  }

}
