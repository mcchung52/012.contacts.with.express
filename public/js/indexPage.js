$(document).ready(init);

function init() {
  //$('#create').click(createClicked);
  $('.edit').click(editClicked);
  $('.del').click(delClicked);
}

function editClicked(e) {
  console.log('edit clicked');
  var $tr = $(e.target).closest('tr');
  var trIdx = $tr.index();

  $.post('/edit/'+trIdx)
  .done(function(data){

  })
  .fail(function(data){

  });
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