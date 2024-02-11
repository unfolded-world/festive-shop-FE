import { Component, Input } from '@angular/core';
import { ItemDetails } from 'src/app/core/interfaces/interfaces';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent {

  @Input() itemDetails: ItemDetails

}
