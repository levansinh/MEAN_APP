import { Component } from '@angular/core';
import {
  faHome,
  faBagShopping,
  faListCheck,
  faGear,
  faRightToBracket,
  faCircleInfo,
  faUser,
  faFaceSmile,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
})
export class AsideComponent {
  token: any = localStorage.getItem('token');

  sidebar: any = [
    [
      { name: 'Home', path: '/', icon: faHome },
      { name: 'Project', path: '/project', icon: faBagShopping },
      { name: 'Task', path: '/task', icon: faListCheck },
      { name: 'User', path: '/user', icon: faUser },
    ],
    [
      { name: 'Help', path: '/', icon: faCircleInfo },
      { name: 'Setting', path: '/', icon: faGear },

      {
        name: 'Information',
        path: `${this.token ? '/infomation' : '/'}`,
        icon: faFaceSmile,
      },

      {
        name: `${this.token ? 'Logout' : 'Login'}`,
        path: `${this.token ? '/logout' : '/login'}`,
        icon: faRightToBracket,
      },
    ],
  ];
}
