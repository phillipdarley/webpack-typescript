import {ActionItem, ActionItemImpl} from './actionItem';
import $ = require("jquery");
import {getFutureDay} from './dateHelper';
import _ = require('underscore');

require('./style.less');

//mustache style template placehodlers
_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

let actionItem1 = new ActionItemImpl('get milk', false);
let actionItem2 = new ActionItemImpl('rule the world', false, getFutureDay(1));

let items = [actionItem1,actionItem2];

console.log(actionItem1.getDisplayDueDate());

function isFalseReallyFalse(){
    return false;
}


$(document).ready(function(){

    let htmlStr = '<h1> TODO items </h1><ul>';

    let template = _.template('<li>Item description: {{description}} dueDate: {{dueDate}} actioned: {{actioned}}</li>');

    for(let item of items){
        htmlStr += template({description: item.description, dueDate: item.getDisplayDueDate(),actioned: item.actioned });
    }

    htmlStr += '</ul>';

    $('#app').html(htmlStr);

});




