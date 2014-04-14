// JavaScript Document
$(function(){
		var unknown = Number(sessionStorage.grado);
		aldoni(unknown);
		
		function aldoni(a){
			
			var tablo = '';
			tablo += '<ul>';
			var koeficientoj = ["X^3", "X^2", "X", "+", "= 0"];
			var legos = ["aX^2+bX+c=0", "aX^3+bX^2+cX+d=0"];
			//////////////////////////////////////
			if (a == 2){
				tablo += '<li>';
				for (var i = 0; i < 4; i++) {
					tablo+=  '<input type="number" class="elemento" value="0"><span class="coef3">' + koeficientoj[i+1] + '</span>';
					tablo+= '</li>';	
				}
				
			tablo+= '</ul>';

			document.getElementById('factors').innerHTML = tablo;
			document.getElementById('lego').innerHTML = '<h2>' + legos[0] + '</h2>';
			}
			//////////////////////////////////////
			if (a == 3){
				tablo += '<li>';
				for (var i = 0; i < 5; i++) {
					tablo+=  '<input type="number" class="elemento" value="0"><span class="coef3">' + koeficientoj[i] + '</span>';
					tablo+= '</li>';
				}
			tablo+= '</ul>';
			document.getElementById('factors').innerHTML = tablo;
			document.getElementById('lego').innerHTML = '<h2>' + legos[1] + '</h2>';
			}
		}
		
		function puraj(){
			
			var campos = document.getElementsByClassName('elemento');
			
			for (var i = 0; i < campos.length; i++) {
				campos[i].value = 0;
			}
			alert(""+campos.length);
		}
		
		document.getElementById("clearMatriz").onclick = function(){
			puraj();
		}
		
		
		
		
	});