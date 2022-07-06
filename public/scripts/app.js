
// creates the drop down selector for voters asssigning preference to each choice in the poll
$(document).ready(function() {
  $(function(){ //slect by class
    var $select = $(".1-4");
    for (i=1;i<=4;i++){ //whenever it is less then 4 add 1
        $select.append($('<option></option>').val(i).html(i)) //add it to the html tag options(to increase how many options)
    }
  });

})



