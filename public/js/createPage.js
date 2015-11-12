$(document).ready(init);

function init() {
  $('#submit').click(submitClicked);
  $('#cancel').click(cancelClicked);
}

function submitClicked() {
  var obj = {};
  obj.name = $('#name').val();
  obj.email = $('#email').val();
  obj.phone = $('#phone').val();
  obj.addr = $('#addr').val();
  obj.group = $('#group').val();

  $('input').each(function(i,el){
    $(el).val('');    
  });

  $.post('/create',obj)
  .done(function(data){
    alert('Contact added successfully.'); //implement sweetalert
  })
  .fail(function(data){
    console.log('failed:', data);
  });
  
}