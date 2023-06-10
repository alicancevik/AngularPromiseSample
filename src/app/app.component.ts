import { Component } from '@angular/core';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'promise-sample';
  

  constructor(private userService: UserService) {
    
    this.list();
  }

  list(){
    this.userService.list()
                  .then((response) => {
                    console.log("response");
                    console.log(response);
                  })
                  .catch((error) => {
                    console.error(error);
                  });
  }
}
