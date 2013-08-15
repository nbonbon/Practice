$(document).ready(function(){
    $('form').submit(function(event) {
    	addTo(event);
    });
	
	$('#addButton').on('click', function(event) {
		addTo(event);
	});
	
	$('#removeAll').on('click', function(event) {
		event.preventDefault();
		var reply = confirm("Are you sure you want to delete ALL todo items?");
		if(reply === true) {
			$('.item').remove();
		} 
    });
});

var onDeleteButtonClicked = function(event) {
    event.preventDefault();
	var reply = confirm("Are you sure you want to delete this todo item?");
	if(reply === true) {
		$(this).closest('.item').remove();
	} 
};

var onEditButtonClicked = function(event) {
    event.preventDefault();
	var reply = prompt("Enter new text: ");
	if(reply) {
		$(this).closest('.item').find('.txt').text(reply);
	}
};

var onCheckButtonClicked = function(event) {
	 event.preventDefault();
	 $(this).closest('.item').toggleClass('done');
};

function addTo(event) {
	event.preventDefault();
        var toAdd = $('#addition').val();
		if(toAdd.length > 0) {
			var outter = $('<div class="outter"></div>').append('<div class="txt">' + toAdd + '</div>');
			var listItem = $('<div class="item"></div>');
			var img = $('<img class="delete" alt="Delete" title="Delete" src="del.ico">').click(onDeleteButtonClicked);
			var img1 = $('<img class="edit" alt="Edit" title="Edit" src="pen1.ico">').click(onEditButtonClicked); 
			var img2 = $('<img class="check" alt="Mark Done" title="Mark Done" src="check.ico">').click(onCheckButtonClicked); 
			outter.append(img2);
			outter.append(img1);
			outter.append(img);
			listItem.append(outter);
			$('#list').append(listItem);
			$('#addition').val("");
		} else {
			alert("Cannot add empty list item!");
		}
}