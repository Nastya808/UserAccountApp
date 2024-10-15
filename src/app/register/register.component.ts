// register.component.ts
import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})

export class RegisterComponent {
  user: User = { username: '', password: '', email: '' };

  constructor(private userService: UserService) {}

  register() {
    this.userService.register(this.user).subscribe(response => {
      alert(response);
    }, error => {
      alert('Registration failed: ' + error.error);
    });
  }
}
