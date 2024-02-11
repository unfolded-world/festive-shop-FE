import { Component } from '@angular/core';
import { ItemDetails } from 'src/app/core/interfaces/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public itemsList: ItemDetails[] = [
    {
      name: 'Simple rakhi',
      description: 'A simple rakhi',
      price: '50',
      imageUrl: '../../../assets/rakhi_pics/19882.jpg',
      _id: '001'
    },
    {
      name: 'Golden rakhi',
      description: 'A golden rakhi',
      price: '100',
      imageUrl: '../../../assets/rakhi_pics/ashwini-chaudhary-monty-m9rw_cTRVyI-unsplash.jpg',
      _id: '001'
    }
  ]

}
