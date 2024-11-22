import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: '',
        loadComponent: ()=> import("../app/components/homepage/homepage.component").then(c => c.HomepageComponent)
    },
    {
        path: 'homepage',
        loadComponent: ()=> import("../app/components/homepage/homepage.component").then(c => c.HomepageComponent)
    },    
    {
        path: 'contact-us',
        loadComponent: ()=> import("../app/components/contact-us/contact-us.component").then(c => c.ContactUsComponent)
                       
    },
];


