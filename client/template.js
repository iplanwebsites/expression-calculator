 
 /* Template.hello.greeting = function () {
    return "Welcome to calc.";
  };*/
/*

 */
Template.form.rendered = function () {
   //
   //  alert('ok')
    $("#target").focus().select();
    bindAction(); 
};




Template.infos.events({
  'click .example' : function (e) {
   // alert('d')
     var val = $(e.currentTarget).text(); //todo: sanitize
      $("#target").val(val).focus();
     process(val); //maybe not necessary
  }
});

 

function bindAction(){
  $('#revert').click(function () {
      $("#target").val(lastWorking).focus();
      process(lastWorking);
  });
  
 
   

  $('#clear').click(function () {
      clean();
  });


  $("#target").keyup(function () { 
     var val = $(this).val(); 
      process(val);
  });
  //$("#target").change(process);
  $("form").submit(function () {
      process();
      return false;
  });
  
}

/*
if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
*/