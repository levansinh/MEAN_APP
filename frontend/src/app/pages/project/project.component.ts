import { Component ,OnInit} from '@angular/core';

import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  data:any = []
  constructor(private projectService:ProjectService){

  }
  ngOnInit(): void {
   this.projectService.getAllProject().subscribe(data=>{
    this.data= data.data
   })
  }

}
