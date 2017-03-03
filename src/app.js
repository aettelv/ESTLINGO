export class App {
    constructor() {
        this.message = 'This is message from app.js! Website elements do NOT go here! ';
    }

    configureRouter(config, router) {
        this.router = router;
        config.title = 'Estlingo';
        config.map([
            { route: ['', 'home'],       name: 'home',       moduleId: 'home/index' },
            { route: 'games',            name: 'games',      moduleId: 'games/games',   nav: true },
            { route: 'about',            name: 'about',      moduleId: 'about/about',   nav: true },
            { route: 'register',            name: 'register',      moduleId: 'register/register',   nav: true },
            ]);
    }
}
