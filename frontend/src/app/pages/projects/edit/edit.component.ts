import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';

import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  data:any = []
constructor(private projectService:ProjectService, private route: ActivatedRoute){

}
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.projectService.getOneProject(id).subscribe(data =>{
     this.data = data.data
    })
  }
  onSubmit(){

  }
}
