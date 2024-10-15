import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User = { username: '', email: '', firstName: '', lastName: '', password: '' };
  userId: number = 1; 

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUserProfile(this.userId).subscribe(response => {
      this.user = response;
    });
  }

  updateProfile() {
    this.userService.updateUserProfile(this.userId, this.user).subscribe(response => {
      alert('Profile updated successfully!');
    }, error => {
      alert('Update failed: ' + error.error);
    });
  }
}
