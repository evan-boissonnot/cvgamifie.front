import { Component, OnInit, Input } from '@angular/core';
import { Mission } from 'src/app/core/models/mission';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.sass']
})
export class MissionComponent implements OnInit {
  @Input()
  mission: Mission;

  constructor() { }

  ngOnInit(): void {
  }

}
