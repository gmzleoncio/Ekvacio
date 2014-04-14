 $(function() {
// run the currently selected effect
function runEffect() {
$("#logo").hide();
$("#logo").fadeIn(2000);
}

function getIncog(){
	var spinner = $( "#spinner" ).spinner();
	sessionStorage.inco = spinner.spinner("value");
	screen.lockOrientation('landscape');
	
}
$('#t3').on('click',runEffect);
$('#setIncog').on('click',getIncog);

});

