import moment = require("moment");
import {getFutureDay} from './dateHelper';

const DAYS_IN_FUTURE = 10;

export interface ActionItem{
    description : string;
    dueDate: Date;
    createdDate: Date;
    actioned: boolean;
    getDisplayDueDate() : string;

}

export class ActionItemImpl implements ActionItem{



    description : string;
    actioned : boolean;
    createdDate : Date;
    dueDate: Date;

    constructor(description: string, actioned: boolean, dueDate?: Date){
        this.description = description;
        this.actioned = actioned;
        this.dueDate = dueDate;
        this.createdDate = new Date();

        if(dueDate == undefined){
            this.dueDate = getFutureDay(DAYS_IN_FUTURE);
        }
        else{
            this.dueDate = dueDate;
        }
    }

    getDisplayDueDate() : string {
        let formattedDueDate :string = moment(this.dueDate).fromNow();
        return formattedDueDate;
    }

}