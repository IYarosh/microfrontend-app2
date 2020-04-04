console.log('Test log from app2');

let domElement

export function bootstrap(props) {
    console.log('App 2 bootstrap. Props:', props);
    return Promise
        .resolve()
        .then(() => {
            domElement = document.createElement('div');
            domElement.id = 'app2';
            document.body.appendChild(domElement);
        })
}

export function mount(props) {
    console.log('App 2 mount. Props:', props);
    return Promise
        .resolve()
        .then(() => {
            domElement.textContent = 'App 2 is mounted!';
        })
}

export function unmount(props) {
    console.log('App 2 unmount. Props:', props);
    return Promise
        .resolve()
        .then(() => {
            domElement.textContent = '';
        })
}