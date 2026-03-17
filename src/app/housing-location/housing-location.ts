import { Component, input } from '@angular/core';
import { housingLocationInfo } from '../housinglocationinfo';
import { RouterOutlet, RouterModule, RouterLink } from '@angular/router';
@Component({
  selector: 'app-housing-location',
  imports: [RouterLink, RouterOutlet, RouterModule],
  templateUrl: './housing-location.html',
  styleUrl: './housing-location.css',
})
export class HousingLocation {
housingLocation = input.required<housingLocationInfo>();
}
