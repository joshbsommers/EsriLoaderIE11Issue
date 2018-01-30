import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { loadModules } from 'esri-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  public map: any;
  public esriConfig: any;

  @ViewChild('map') private mapViewEl: ElementRef;


  public ngOnInit() {
    this.esriConfig = {
      url: 'https://js.arcgis.com/3.23/'
    };

    loadModules(["esri/map"], this.esriConfig).then(([Map
    ]) => {
      this.map = new Map(this.mapViewEl.nativeElement, {
        basemap: "topo",
        center: [-15.469, 36.428],
        zoom: 3
      });
      

    });

  }
}
