https://www.youtube.com/playlist?list=PL3i9po_eXL_px7fJ7nv8MtfP1ZmKD8UMV

https://github.com/muhammadawaisshaikh/live-trade-portal

## If your Angular CLI installed in pc Apply this comands.

## Create new Angular App
ng new portfolio.

## Which stylesheet format would you like to use? 
"Sass (SCSS)".

## Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? 
"Yes".

## Create new Component
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


## lazy loading
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

## How to add Bootstrap?
npm install bootstrap

## Git Configuration
As you read briefly in Getting Started, you can specify Git configuration settings with the git config command. One of the first things you did was set up your name and email address:

$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com


///// START JAVASCRIPT ////////

what is Angular?
. A UI framework built by google.
. A component-based framework for building scalable app.
. Provided collection of libraries to cover features like Routing,Forms.

-> Framework Vs Liabraries?
what is Framework?
. Framework generally contains  set of liabraries.
. You can extend the frameworks.
. some example are Angular, .Net , ionic, Expressjs.

-> what is Liabraries?
. Libraries generally perform specific operation.
. you can combine multiple libraries to build apps.
. some example are React, MomentJS, Lodash.

-> Features of Angular.
. Template 
. Data Binding
. Forms 
. Routing 
. Observables
. PWA

-> Introduction to Typescript.
. why Typescript ?
. compiles to javascript.
. keeps your code evergreen 
. supported by all major libraries and FrameWorks.

-> installing and creating First Typescript program.
. install Node 
. Use latest version of Nodejs
. npm init to create a package.json
. intall Typescript "npm i typescript"
. initialize Typescript
. "tsc --init"


. javascript also has container called variables.
javascript k ander bhi ek container hota h jisko hum variable kehte hen.

.Different DataTypes can store in variables.
such as stting, number, array.

==> How to create API integration::
. any Folder you are applying 'api integration'.
. apply command in terminal like this "anisiqbal@MBP-Anis about % ng g s about/about".
. your service is create now.
. you see about services like files name is about.services.specs.ts and about.services.ts.
. you go to the file of "app.config.ts" and add "provideHttpClient()"like this ^^^^^^ 'see down'
                                                                               ||||||
   export const appConfig: ApplicationConfig = {               
  providers: [provideRouter(routes), provideClientHydration(), provideHttpClient()]
};                                                             ^^^^^^^^^^^^^^^^^^
                                                               |||||||||||||||||||



. why are using "provideHttpClient()"?
 mean you dont find any type of error in application.

. next you go to the file of "about.service.ts".
. and type 'HttpClient' automatically class is import. 
. "HttpClient" is class that agular is given.
. next create a 'constructor'.

    constructor(
     //// you create a any type of name like 'private http:'
     private http: HttpClient
  ) {}

. next create a 'function' in constructor.
like==> 

    ///// you create a function with the name of "getBannerData".

  getBannerData(){
    
  }


  .api integration hum services me karte hen.


  ....////// Services ////////.......

  API INTEGRATION

  First you create a folder with the name of 'Service'.
  why this folder is created.
 create a one Folder: Services
 create a  Files of all components. banner, about, contact-us

 Create a folder
 create a file of 'ng g s about/about'.

 ===> how to create Api in Firebase 1st step..

1. first open firebase
2. create Firebase application like your visual code application 
3. open realtime database see link like https://portfolio-app-b805f-default-rtdb.firebaseio.com/   after link see + button press and add api name in key only en enter direct.
4. copy link firbase see the top 
5. first you create post Api // 'data post hoga tabhi hum get karen ge naaa'.
6. then open 'body' and select "Raw".
7. and select "json".
8. create a new object and go website see what kind of data would you needed.

//// TOO much Experience i have no added "Entries" then i am using Values mean add for loop.///

 <!-- @for (item of experience; track item.companyName) {
                <div class="col-4">
                    <div class="experience-card">
                        <img [src]="item.image" alt="Experience Image">
                        <p>{{item.designation}}</p>
                        <h4>{{item.companyName}}</h4>
                        <p>{{item.tenure}}</p>
                    </div>
                </div>
            } @empty {
                <li>There are no items.</li>
            } -->


/////////////////// @For . Angular //////////////

<!-- @for (item of items; track item.name) {
<li>{{ item.name }}</li>
} @empty {
<li>There are no items.</li>
} -->


//////// how to add fontawsome in Angular ////////////

<!-- Add the FontAwesome CDN to index.html: You can include the FontAwesome icons by adding the CDN link to the <head> section of your index.html file.

Open the src/index.html file in your Angular project and add the following inside the <head> tag:

html
Copy code
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
This will load the FontAwesome stylesheet from the CDN and give you access to the icons.

Use FontAwesome icons in your components: In your Angular component template files (e.g., app.component.html), you can now use FontAwesome icons by simply referencing them with the appropriate class names. For example:

html
Copy code
<i class="fas fa-home"></i> Example of home icon
<i class="fab fa-github"></i> Example of GitHub logo -->




