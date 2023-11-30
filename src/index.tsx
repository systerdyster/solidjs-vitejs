import { Todo } from 'scripts/todo/Todo';
import { render } from 'solid-js/web';

class BootstrapMittVedum {
    constructor() {
        console.info('Init...');
        this.initApp();
    }

    async initApp() {
        const mountPoint = document.getElementById('app');
        if (mountPoint) {
            render(() => <Todo {...mountPoint.dataset} />, mountPoint);
        }
    }
}

new BootstrapMittVedum();