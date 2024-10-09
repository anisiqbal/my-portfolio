https://www.youtube.com/playlist?list=PL3i9po_eXL_px7fJ7nv8MtfP1ZmKD8UMV

https://github.com/muhammadawaisshaikh/live-trade-portal

-> If your Angular CLI installed in pc Apply this comands.

-> Create new Angular App
ng new portfolio.

-> Which stylesheet format would you like to use? "Sass (SCSS)".

->  Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? "Yes".

-> Create new Component
ng generate component homepage
or
ng g c header

<!-- -> how to add routing in components?
    . add <router-outlet />
    . go to app.routes.ts 
    {
        path: '',
        loadComponent: ()=> import("../app/components/homepage/homepage.component").then(c => c.HomepageComponent)
    },
    {
        path: 'homepage',
        loadComponent: ()=> import("../app/components/homepage/homepage.component").then(c => c.HomepageComponent)
    },
    {
        path: 'about',
        loadComponent: ()=> import("../app/components/about/about.component").then(c => c.AboutComponent)
    } -->


->   lazy loading
{
        path: 'contact-us',
        loadComponent: ()=> import("../app/components/contact-us/contact-us.component").then(c => c.ContactUsComponent)

},         

         ()=> This is lazy loading


      -> what is lazy loading?
         Two types of loading.   1. simple loading  2. lazy loading  
          
        Interview questions:

         1. simple loading::
         All components reload its mean 1 time your all components is reload its mean your webiste perform slowly.

         2. lazy loading::
         only one component reload in one time mean your your website performance working is good.



   

<!-- -> how to call component to another component?
you copy in selector value in header component just like this "selector: 'app-header'," then paste in 
app.component.html like <app-header></app-header> , then add " import header component" in app.component.ts and call to import same component. -->

-->How to add Bootstrap?
npm install bootstrap

--> Git Configuration
As you read briefly in Getting Started, you can specify Git configuration settings with the git config command. One of the first things you did was set up your name and email address:

$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com


