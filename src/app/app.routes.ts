import { Routes } from '@angular/router';
import { PortfolioPageComponent } from './portfolio/pages/portfolio-page/portfolio-page.component';
import { AdminLoginPageComponent } from './admin/pages/admin-login-page/admin-login-page.component';
import { MessagePageComponent } from './admin/pages/message-page/message-page.component';

export const routes: Routes = [
    { path: '', component: PortfolioPageComponent },
    { path: 'admin/login', component: AdminLoginPageComponent },
    { path: 'admin/message', component: MessagePageComponent },
    // { path: '', component: MessagePageComponent },
];
