import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { AdminComponent } from './components/admin/admin.component';
import { EmailsenderComponent } from './components/emailsender/emailsender.component';
import { RegistationComponent } from './components/registation/registation.component';
import { GetApiComponent } from './components/get-api/get-api.component';
import { VideosComponent } from './components/videos/videos.component';

export const routes: Routes = [
    {
        path:"user",
        component:UserComponent
    },
    {
        path:"admin",
        component:AdminComponent
    },
    {
        path:"emailsender",
        component:EmailsenderComponent
    },
    {
        path:"registation",
        component:RegistationComponent
    },
    {
        path:"get-api",
        component:GetApiComponent
    },
    {
        path:"videos",
        component:VideosComponent
    }
];
