$(document).ready(init);

var trIdx = -1;

function init() {
  //$('#create').click(createClicked);
  $('tbody').on('click','i.edit',editClicked);
  $('tbody').on('click','i.del',delClicked);
  $('#save').click(saveClicked);
  //$('#saveE').click(saveEditClicked);
}

function saveClicked() {  //modal dialog
  var obj = {};
  obj.name = $('#name').val();
  obj.email = $('#email').val();
  obj.phone = $('#phone').val();
  obj.addr = $('#addr').val();
  obj.group = $('#group').val();

  // $('input').each(function(i,el){
  //   $(el).val('');    
  // });
  if (trIdx == -1) { //using modal for create
    var $p = $('<p>');
    $.post('/create',obj)
    .done(function(data){
      var $tr = $('<tr>');
      var $name = $('<td>').addClass('name').text(obj.name);
      var $email = $('<td>').addClass('email').text(obj.email);
      var $phone = $('<td>').addClass('phone').text(obj.phone);
      var $addr = $('<td>').addClass('addr').text(obj.addr);
      var $group = $('<td>').addClass('group').text(obj.group);
      var $icon = $('<td>');
      var $editIcon = $('<i>').addClass('edit fa fa-pencil-square-o fa-lg'); 
      var $delIcon = $('<i>').addClass('del fa fa-trash-o fa-lg'); 
      $icon.append($editIcon, $delIcon); 
      $tr.append($name,$email,$phone,$addr,$group,$icon);
      $('.container tbody').append($tr);

      $p.text('Contact added successfully.');
      $('#msgModal .modal-body').empty().prepend($p);
      $('#msgModal').modal('show'); 
    })
    .fail(function(data){
      //console.log('failed:', data);
      $p.text('Contact not added.');
      $('#msgModal .modal-body').empty().prepend($p);
      $('#msgModal').modal('show');  
    });
  }
  else {            //using modal for edit
    var $p = $('<p>');
    $.post('/edit/'+trIdx,obj)
    .done(function(data){
      var $tr = $('.container tbody > tr:nth-child('+(trIdx+1)+')');
      $tr.children('.name').text(obj.name);
      $tr.children('.email').text(obj.email);
      $tr.children('.phone').text(obj.phone);
      $tr.children('.addr').text(obj.addr);
      $tr.children('.group').text(obj.group);
      $p.text('Contact updated successfully.');
      $('#msgModal .modal-body').empty().prepend($p);
      $('#msgModal').modal('show');
      trIdx = -1;
    })
    .fail(function(data){
      //console.log('failed:', data);
      $p.text('Contact not updated.');
      $('#msgModal .modal-body').empty().prepend($p);
      $('#msgModal').modal('show');
      trIdx = -1;
    });
  }

}

function editClicked(e) {
  var $tr = $(e.target).closest('tr');
  trIdx = $tr.index();

  $('#name').val($tr.children('.name').text());
  $('#email').val($tr.children('.email').text());
  $('#phone').val($tr.children('.phone').text());
  $('#addr').val($tr.children('.addr').text());
  $('#group').val($tr.children('.group').text());
  $('#addNew').modal('show'); 
}

function delClicked(e) {
  console.log('del clicked');
  var $tr = $(e.target).closest('tr');
  var trIdx = $tr.index();
  $.post('/delete/'+trIdx)
  .done(function(data){
    
  })
  .fail(function(data){
    
  });
}


// var $del = $('<i>');
//   $del.addClass('glyphicon-trash').addClass('glyphicon');
//   $tableChk.append($del);


// function clogRow(clog) { 
//   var $tr = $('<tr>'); 
//   var $name = $('<td>').addClass('name').text(clog.name) 
//   var $cost = $('<td>').addClass('cost').text(clog.cost) 
//   var $quality = $('<td>').addClass('quality').text(clog.quality) 
//   var $material = $('<td>').addClass('material').text(clog.material) 
//   var $editTd = $('<td>').addClass('edit text-center'); 
//   var $editIcon = $('<i>').addClass('fa fa-pencil-square-o fa-lg'); 
//   $editTd.append($editIcon); 
   
//   var $deleteTd = $('<td>').addClass('delete text-center'); 
//   var $deleteIcon = $('<i>').addClass('fa fa-trash-o fa-lg'); 
//   $deleteTd.append($deleteIcon); 
//   $tr.append($name, $cost, $quality, $material, $editTd, $deleteTd); 
//   return $tr; 
// } 