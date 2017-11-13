import obj from "./say-hello";

{
    const $ = require('jquery');
    //const obj = require('./say-hello');

    const sayHello = () => {
        console.log('suh dud');
    };

    //nameDoesMatter();
    console.log(obj);
    sayHello();

    $(document).ready(() => {
        $('#dom-test').html('You will only see this text if DOM is successfully modified with jquery! Yay!');
    });
}
