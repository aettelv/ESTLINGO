export class App {
    constructor() {
        this.message = 'Welcome to Estlingo!';
    }

    configureRouter(config, router) {
        this.router = router;
        config.title = 'Estlingo';
        config.map([
            { route: ['', 'home'],       name: 'home',       moduleId: 'home/index' },
            ]);
    }
}
