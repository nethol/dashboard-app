import {Component, OnInit} from '@angular/core';
import { ServiceStat } from 'src/app/shared/classes/servicestat';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {

  clicsequrProd: ServiceStat = {
    nom: 'clicSéqur',
    environment: 'Production',
    statut: false
  };

  constructor() {
   
  }

  ngOnInit() {
  }

}
