 $(function() {
// run the currently selected effect
function runEffect() {
$("#logo").hide();
$("#logo").fadeIn(2000);
}
$('#t3').on('click',runEffect);
		
});

