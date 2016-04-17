$(document).ready(function(){

  $('#list').sortable();

  function addTask() {
    var text = $('#new-task').val();
    $('#list').append('<li class="task"><input type="checkbox" class="done"/>' + text + ' <button class="delete">Remove</button></li>');
    $('li').fadeIn( 750 );
    $('#new-task').val('');

  }

  $("#add-task").hover(function(){
    $(this).addClass('motivate');
  },
    function(){
    $(this).removeClass('motivate');
    });

  var x = 0;

  var deleteTask = function(){

    $(this).parent().effect('explode');
    $(this).parent().remove();
    x++;
    $('#numberDone').html(x + " tasks completed!");

  };



  $(function(){
    $(document).on('click', '.done', completeTask);
    $(document).on('click', '.delete', deleteTask);
    $('#add-task').on('click', addTask);
  });



  function completeTask() {
    if ($(this).parent().css('textDecoration') == 'line-through'){
      $(this).parent().css('textDecoration', 'none');
      $(this).parent().css('color','black');
    } else {
      $(this).parent().css('textDecoration','line-through');
      $(this).parent().css('color','red');
    };
  };


});
