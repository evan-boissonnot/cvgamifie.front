import { Component, OnInit, Input } from '@angular/core';
import { Quest } from 'src/app/core/models/quest';

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.sass']
})
export class QuestComponent implements OnInit {
  @Input()
  quest: Quest;

  constructor() { }

  ngOnInit(): void {
  }

}
