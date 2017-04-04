export class App {

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
