$(document).ready(function(){
		$('button').click(function () {
			$('input[name="order[]"]').map(function () {
				$(this).val($(this).attr('title') + ' - ' + $(this).val());
				alert($(this).val());
			});
		});
});
