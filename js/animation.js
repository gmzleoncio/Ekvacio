 $(function() {
// run the currently selected effect
function runEffect() {
	$("#logo").hide();
	$("#logo").fadeIn(3000);
}

function fadingGrades(){
	$("#g1").hide();
	$("#g2").hide();
	$("#g1").fadeIn(3000);
	$("#g2").fadeIn(3000);
}

function getIncog(){
	var spinner = $( "#spinner" ).spinner();
	sessionStorage.inco = spinner.spinner("value");
	screen.lockOrientation('landscape');
}

function getGrades(a){
	sessionStorage.grado = a;
}

	$('#t3').on('click',runEffect);
	$('#t2').on('click',fadingGrades);
	$('#setIncog').on('click',getIncog);
	document.getElementById("g1").onclick = function(){getGrades(2);}
	document.getElementById("g2").onclick = function(){getGrades(3);}
});

