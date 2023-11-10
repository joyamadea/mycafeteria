import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class NavbarComponent {
  items: any;
  
  constructor(
    private router: Router,
    private user: UserService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: '/'
      },
      {
          label: 'Cart',
          icon: 'pi pi-fw pi-shopping-cart',
          routerLink: '/cart'
      }
  ];
  }

  goToOrders() {
    this.router.navigateByUrl('/order');
  }

  confirmLogout() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          // this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
        this.logout();
      }
  });
  }

  logout() {
    this.user.logout();
    this.router.navigateByUrl('/login');
  }
}
