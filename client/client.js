
// TODO: set good colors...
var colors = {
    "undefined":  '#f33',
  	"object":     '#999',
    "boolean":    '#f33',
    "number":     '#1FB2F7',
    "string" :    '#0f0',
  	"function":   '#ccc',
  	"xml"  :      '#aaa'
}



 lastWorking = "";

 process = function(val) {
    if (!val) {
        // todo: show instructions, with a fade
        $("#intro").show();
        return false;
    }

    // hide instructions
    $("#intro").hide();
    var worked=false;
    try {
        var res = eval(val);
        var type = typeof(res);
        $('#response .res').css('color', colors[type]);
        
        
        
         if((type == 'number') && $('#roundNumbers').is(':checked') ){ //ad a setting to disable that
            res= Math.round(res*100)/100;
          }
        
        if((type == 'number') && $('#formatNumbers').is(':checked') ){ //ad a setting to disable that
          res= addCommas(res);
        }
        
        $('#response .res').text(res);
        console.log(res); //for pro users, lets you see objects
        lastWorking = val;
        worked = true;
    } catch (err) {
        $('form').removeClass('valid').addClass('error');
        $('#lastWorking span').text(lastWorking);
    }

    

    if (worked) {
        $('form').addClass('valid').removeClass('error');
    } else {
        //todo: do not show lastWorking if it's not set yet
        $('form').removeClass('valid').addClass('error');
    }
    
    
    // TODO
    //according to response type (NUMBER, DATE, BOOL), set a color on the text!
    
    
    
}


 clean = function() {
    $("#target").val('').focus();
    lastWorking = "";
    process('');
    $("#response .res").html(''); //clear results
}



// number formatting

function addCommas(nStr)
{
	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}



