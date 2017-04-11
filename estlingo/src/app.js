import {AureliaCookie} from 'aurelia-cookie';

export class App {
    
    isLoggedIn=false;
    
    constructor(){
        if (AureliaCookie.get('isLoggedIn')=="true"){
            this.isLoggedIn = AureliaCookie.get('isLoggedIn'); console.log("isLoggedIn: " + this.isLoggedIn);
        }else{
            console.log("isLoggedIn: not defiend");
            window.location.href = "http://localhost:9000/#/register";
        }
    }

    configureRouter(config, router) {
        this.router = router;
        config.title = 'Estlingo';
        config.map([
            { route: ['', 'register'],   name: 'register',       moduleId: 'register/register'},
            { route: 'games',            name: 'games',          moduleId: 'games/games',   nav: true },
            { route: 'about',            name: 'about',          moduleId: 'about/about',   nav: true },
            { route: 'home',             name: 'home',           moduleId: 'home/home',     nav: true },
            { route: 'selectEquivalent1',           name: 'selectEquivalent1',         moduleId: 'selectEquivalent1/selectEquivalent1', nav: true },
            { route: 'selectEquivalent2',           name: 'selectEquivalent2',         moduleId: 'selectEquivalent2/selectEquivalent2', nav: true },
            ]);
    }

    logOut(){
        AureliaCookie.delete('isLoggedIn');
        window.location.href = "http://localhost:9000/#/register";
    }
}
