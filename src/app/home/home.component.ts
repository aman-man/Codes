import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
// export Feature Interface {

// }
export class HomeComponent implements OnInit {
  featureList: any = [
    {
      title: 'Angular Grid',
      subtitle: 'FEATURE',
      route: 'grid-view',
      imgSrc: '../../assets/000061.jpg',
      detail: 'Representation of list of Data in grid list view'
    },
    {
      title: 'Graph & charts',
      subtitle: 'FEATURE',
      route: 'graph-view',
      imgSrc: '../../assets/000061.jpg',
      detail: 'Representation of list of Data in Graphical view'
    },
    {
      title: 'HandsonTable',
      subtitle: 'FEATURE',
      route: 'handsontable-view',
      imgSrc: '../../assets/000061.jpg',
      detail: 'Representation of list of Data in excel tabbular view'
    },
    {
      title: 'Calander',
      subtitle: 'FEATURE',
      route: 'calander-view',
      imgSrc: '../../assets/000061.jpg',
      detail: 'Calander with event binding view'
    },
    {
      title: 'File Uploader',
      subtitle: 'FEATURE',
      route: 'upload-view',
      imgSrc: '../../assets/000061.jpg',
      detail: 'Multiple file uploading support'
    }
  ];
  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }
  navigate(path: string) {
    console.log('route: ', path);
    this.route.navigate([path]);
  }

}
