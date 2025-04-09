import { Component } from '@angular/core';
import { ListComponent } from '../../components/list/list.component';
import { GetAllStatsService } from '../../services/get-all-stats.service';
import { GetAllStatsBusinessService } from '../../services/get-all-stats-business.service';

@Component({
  selector: 'app-list.page',
  imports: [ListComponent],
  templateUrl: './list.page.component.html',
  styleUrl: './list.page.component.css',
  providers: [GetAllStatsService, GetAllStatsBusinessService]
})
export class ListPageComponent {

}
