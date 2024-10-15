import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User = { username: '', password: '', email: '' };

  constructor(private userService: UserService) {}

  login() {
    this.userService.login(this.user).subscribe(response => {
      alert('Login successful!');
      console.log(response);
    }, error => {
      alert('Login failed: ' + error.error);
    });
  }
}
