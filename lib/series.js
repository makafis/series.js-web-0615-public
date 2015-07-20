'use strict';

var Series = function(numberInput){
  // add your solution here!
  var numberInputLength = numberInput.length;
  this.digits = numberInput.split("").map(function(item){
    return parseInt(item, 10); 
  });


  this.slices = function(number){
    var return_array = [];
    var splitNumbers = numberInput.split("").map(function(item){
    return parseInt(item, 10); 
  });


  var last_element;
  var temp_num = number;

  for (var i = 0; i < splitNumbers.length; i++)
  {
    return_array.push(splitNumbers.slice(i, temp_num)); 
    temp_num = temp_num+1;
   last_element = return_array[return_array.length - 1];
  
    if (last_element.length != number){
      var index_of = return_array.indexOf(last_element);
      return_array.splice(index_of,1);
    };
  };

    if (numberInputLength >= number){
      return return_array;
    } else {
      throw new Error("Slice size is too big.")
    };
  };
};


