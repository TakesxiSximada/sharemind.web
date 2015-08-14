// -*- coding: utf-8 -*-
require('./main.styl');

var Vue = require('vue');
var app = new Vue({
    el: '#app',
    data: {
        view: 'page-a',
    },
    components: {
        'page-a': function (){
            console.log('grejogiahog');
        },
        'page-b': function (){
            console.log('grejogiahog');
        },
    },
});


function route () {
    app.view = window.location.hash.slice(1) || 'page-a'

}

window.addEventListener('hashchange', route)
window.addEventListener('load', route)
