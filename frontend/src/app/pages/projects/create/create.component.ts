import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ProjectService } from 'src/app/services/project.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  data: any = [];
  submitForm = new FormGroup({
    nameProject: new FormControl(''),
    teamSize: new FormControl(''),
    nameLeader: new FormControl(''),
  });
  constructor(
    private projectService: ProjectService,
    private route: Router,
    private userService: UserService
  ) {}
  ngOnInit(): void {
    this.userService.getWithRole(1).subscribe((data) => {
      console.log(data.data);
      this.data = data.data;
    });
  }
  onSubmit() {
    const nameProject = this.submitForm.controls.nameProject.value;
    const teamSize = this.submitForm.controls.teamSize.value;
    const nameLeader = this.submitForm.controls.nameLeader.value;
    const newData = {
      name_leader: nameLeader,
      name_project: nameProject,
      team_size: teamSize,
    };

    this.projectService.addProject(newData).subscribe((data) => {
      this.route.navigate(['/project']);
      console.log(data);
    });
  }
}
