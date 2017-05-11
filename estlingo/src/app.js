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
            { route: 'selectEquivalent',           name: 'selectEquivalent',         moduleId: 'selectEquivalent/selectEquivalent', nav: true },
            { route: 'selectEquivalent1',           name: 'selectEquivalent1',         moduleId: 'selectEquivalent1/selectEquivalent1', nav: true },
            { route: 'selectEquivalent2',           name: 'selectEquivalent2',         moduleId: 'selectEquivalent2/selectEquivalent2', nav: true },
            { route: 'selectEquivalent3',           name: 'selectEquivalent3',         moduleId: 'selectEquivalent3/selectEquivalent3', nav: true },
            { route: 'selectEquivalent4',           name: 'selectEquivalent4',         moduleId: 'selectEquivalent4/selectEquivalent4', nav: true },
            { route: 'selectEquivalent5',           name: 'selectEquivalent5',         moduleId: 'selectEquivalent5/selectEquivalent5', nav: true },
            { route: 'selectEquivalent6',           name: 'selectEquivalent6',         moduleId: 'selectEquivalent6/selectEquivalent6', nav: true },
            { route: 'selectEquivalent7',           name: 'selectEquivalent7',         moduleId: 'selectEquivalent7/selectEquivalent7', nav: true },
            { route: 'typeEquivalent',              name: 'typeEquivalent',            moduleId: 'typeEquivalent/typeEquivalent', nav: true },
            { route: 'colours',             name: 'colours',            moduleId: 'colours/colours', nav: true },
            { route: 'numbers',             name: 'numbers',            moduleId: 'numbers/numbers', nav: true },
            { route: 'days',                name: 'days',               moduleId: 'days/days', nav: true },
            { route: 'months',              name: 'months',             moduleId: 'months/months', nav: true },
            { route: 'human',               name: 'human',              moduleId: 'human/human', nav: true },
            { route: 'kitchen',             name: 'kitchen',            moduleId: 'kitchen/kitchen', nav: true },
            ]);
    }

    logOut(){
        AureliaCookie.delete('isLoggedIn');
        window.location.href = "http://localhost:9000/#/register";
    }
}
