import {Cookie} from 'aurelia-cookie';

export class App {
    
    isLoggedIn = false;
    
    constructor(){
        /*if (Cookie.get('isLoggedIn')==true){
            this.isLoggedIn = Cookie.get('isLoggedIn'); console.log("isLoggedIn: " + this.isLoggedIn);
        }else if(Cookie.get('isLoggedIn')==false){
            console.log("isLoggedIn: " + this.isLoggedIn);
        }else{
            console.log("isLoggedIn: not defiend");
        }*/
    }

    configureRouter(config, router) {
        this.router = router;
        config.title = 'Estlingo';
        config.map([
            { route: ['', 'register'],   name: 'register',       moduleId: 'register/register' },
            { route: 'games',            name: 'games',          moduleId: 'games/games',   nav: true },
            { route: 'about',            name: 'about',          moduleId: 'about/about',   nav: true },
            { route: 'home',             name: 'home',           moduleId: 'home/home',     nav: true },
            { route: 'select',           name: 'select',         moduleId: 'select/select', nav: true },
            ]);
    }
}
