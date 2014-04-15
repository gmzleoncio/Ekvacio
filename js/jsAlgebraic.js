// JavaScript Document
$(function(){
		var unknown = Number(sessionStorage.grado);
		var coef=new Array();
		var sol3 = new Array();
		var sol2 = new Array();
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
		
		function solvi(){
				var mensaje = '';
				var campos = document.getElementsByClassName('elemento');
				if (campos.length == 5){
					for (var i = 0; i<campos.length-1;i++){
						coef[i] = campos[i].value;	
					}
					var j = coef[1] / coef[0];
					var k = coef[2] / coef[0];
					var l = coef[3] / coef[0];
					var p = (-Math.pow(j,2))/3 - k;
					var q1 = (2 * Math.pow(j,3))/27;
					var q2 = (k*j)/3 + 1;
					var q = q1 - q2;
					
					var radical1 = (Math.pow(q,2))/4;
					var radical2 = (Math.pow(p,3))/27;
					var radical = radical1 + radical2;
					
					if (radical > 0){
						var b1a = Math.pow(q,2)/4;
						var b1b = Math.pow(p,3)/27;
						var b1 = b1a + b1b;
						var b1c = Math.sqrt(b1);
						var b1d = (-q/2 + b1c);
						var b1e = (-q/2 - b1c);
						z1a = Math.pow(b1d,(1/3));
						z1b = Math.pow(b1e,(1/3));
						z1 = z1a + z1b;
						
						var b2a = Math.pow((z1/2),2);
						var b2b = q/z1;
						var b2 = Math.sqrt(-(b2a + b2b));
						var z2R = -z1/2; 
						var z2I = b2;
						var z3R = -z1/2;
						var z3I = -b2
						
						var f = j/3;
						var x2R = z2R - f;
						var x3R = z3R - f;

						var x1 = (z1 - f).toFixed(2);
						var x2 =  x2R.toFixed(2) + " +i " + z2I.toFixed(2);
						var x3 = x3R + " -i " + z3I;
						sol3[0] = "X1: " + x1 + "\n";
						sol3[1] = "X2: " + x2 + "\n";
						sol3[2] = "X3: " + x3 + "\n"; 
						for (var i = 0; i < 3; i++){
						mensaje+=sol3[i];
						}
						alert(mensaje);
						
					}
					
					if (radical == 0){
						var b1a = Math.pow(q,2)/4;
						var b1b = Math.pow(p,3)/27;
						var b1 = b1a + b1b;
						var b1c = Math.sqrt(b1);
						var b1d = (-q/2 + b1c);
						var b1e = (-q/2 - b1c);
						z1a = Math.pow(b1d,(1/3));
						z1b = Math.pow(b1e,(1/3));
						z1 = z1a + z1b;
						
						var b2a = Math.pow((z1/2),2);
						var b2b = q/z1;
						var b2 = Math.sqrt(b2a + b2b);
						var z2 = -z1/2 + b2;
						var z3 = -z1/2 - b2;
						var f = j/3;
						var x1 = (z1-f).toFixed(2);
						var x2 = (z2-f).toFixed(2);
						var x3 = (z3-f).toFixed(2);
						
						sol3[0] = "X1: " + x1 + "\n";
						sol3[1] = "X2: " + x2 + "\n";
						sol3[2] = "X3: " + x3 + "\n"; 
						for (var i = 0; i < 3; i++){
						mensaje+=sol3[i];
						}
						alert(mensaje);
					}
					
					if (radical < 0){
						var thetaDen = 2 * Math.sqrt(-(Math.pow(p,3))/27);
						var theta = Math.acos(-q/thetaDen);
						var z1a= Math.cos(theta/3);
						var z2a = Math.cos((theta + (2*Math.PI))/3);
						var z3a = Math.cos((theta + (4*Math.PI))/3);
						var z1 = 2 * Math.sqrt(-p/3) * z1a;
						var z2 = 2 * Math.sqrt(-p/3) * z2a;
						var z3 = 2 * Math.sqrt(-p/3) * z3a;
						
						var f = j/3;
						var x1 = (z1-f).toFixed(2);
						var x2 = (z2-f).toFixed(2);
						var x3 = (z3-f).toFixed(2);
						
						sol3[0] = "X1: " + x1 + "\n";
						sol3[1] = "X2: " + x2 + "\n";
						sol3[2] = "X3: " + x3 + "\n"; 
						for (var i = 0; i < 3; i++){
						mensaje+=sol3[i];
						}
						alert(mensaje);
					}
				}
				
				if (campos.length == 4){
					for (var i = 0; i<campos.length-1;i++){
						coef[i] = campos[i].value;	
					}
					var a = coef[0];
					var b = coef[1];
					var c = coef[2];
					var radical = Math.pow(b,2) - (4 * a * c);
					
					if (radical > 0){
						var x1 = ((-b) + Math.sqrt(radical)) / (2*a);
						var x2 = ((-b) - Math.sqrt(radical)) / (2*a);
						sol2[0] = "X1: " + x1.toFixed(2) + "\n"; 
						sol2[1] = "X2: " + x2.toFixed(2) + "\n"; 
						for (var i = 0; i < 2; i++){
						mensaje+=sol2[i];
						}
						alert(mensaje);
					}
					
					if (radical == 0){
						var x1 = -b/(2*a);
						var x2 = -b/(2*a);
						sol2[0] = "X1: " + x1.toFixed(2) + "\n"; 
						sol2[1] = "X2: " + x2.toFixed(2) + "\n";
						for (var i = 0; i < 2; i++){
						mensaje+=sol2[i];
						}
						alert(mensaje);
					}
					if (radical < 0){
						var xR = -b/(2*a);
						var xI = Math.sqrt(-radical);
						sol2[0] = "X1: " + xR.toFixed(2) + " +i " + xI.toFixed(2);
						sol2[1] = "X2: " + xR.toFixed(2) + " -i " + xI.toFixed(2);
						for (var i = 0; i < 2; i++){
						mensaje+=sol2[i];
						}
						alert(mensaje);
					}
				}
		}
	});