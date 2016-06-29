require('./style.css');
require('./interfaces');

define(['jquery', './displayTime'], function($: any, displayTime: DisplayTime) {
    $(document).ready(function() {

        let now : string = displayTime.getDisplayTime();

        let helloMsg = 'Hello World it\'s ' + now;


        $('#app').html('<h1> ' + helloMsg + '</h1>');
    });

});