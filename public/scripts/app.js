// Client facing scripts here

// $( document ).ready(function() {
//   console.log('ready');
//   const dragArea = $(".choices")
//   // new Sortable(dragArea, {
//   //   animation:350
//   // })

//   const children = dragArea.children()
//   console.log(dragArea);
//   console.log(children);


// });
$(document).ready(function() {
  $(function(){ //slect by class
    var $select = $(".1-4");
    for (i=1;i<=4;i++){ //whenever it is less then 4 add 1
        $select.append($('<option></option>').val(i).html(i)) //add it to the html tag options(to increase how many options)
    }
    // $("form").submit((event) => {
    //   event.preventDefault();
    //   console.log(event.target);
    //   let vote = $('#vote').val();
    //   console.log("whats the vote", vote);
    // });

  });

  // $.ajax({
  //   data: data,
  //   success: success,
  //   dataType: dataType
  // });

})



