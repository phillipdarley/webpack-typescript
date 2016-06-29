define('./displayTime', ['moment'], function(moment: any) {

    return {
        getDisplayTime: function getDisplayTime() : string{
            let now :string = moment().format('MMMM Do YYYY, h:mm:ss a');
            return now;
        }
    };

});