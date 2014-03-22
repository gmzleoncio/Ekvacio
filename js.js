// JavaScript Document
$(function(){
		var matrico=new Array();
		var ord = 0;
		
		function aldoni(a){
			ord = a;
			var tablo = '';
			tablo += '<li class="square">';
			var koeficientoj = ["X", "Y", "Z", "A", "B", "C", "D"];
			var legos = ["aX+bY=Z", "aX+bY+cZ=A", "aX+bY+cZ+dA=B", "aX+bY+cZ+dA+eB=C", "aX+bY+cZ+dA+eB+fC=D"];
			for (var i = 0; i < a-1; i++) {
				tablo+= '<ul>';
				for (var j = 0; j < a; j++) {
                	tablo+=  '<input type="number" class="elemento" value="0"><span class="coef7">' + koeficientoj[j] +'</span>';
				}
				tablo+= '</ul>';
			}
			tablo+= '</li>';
	
			document.getElementById('arang').innerHTML = tablo;
			document.getElementById('lego').innerHTML = '<h2>' + legos[ord-3] + '</h2>';
			document.getElementById('resol7').removeAttribute(disable);
		}
		
		function plenigi(ord){
			var campos = document.getElementsByClassName('elemento');
			
			for (var i = 0; i < ord-1; i++) {

                    matrico[i] = [];
					for (var j = 0; j < ord; j++) {
						matrico[i][j] = parseFloat(campos[ord * i + j].value);
					}
             }
		}
		
		function dett(ord){
			var matd=new Array();
			for (var i = 0; i < ord-1; i++) {
				matd[i] = [];
				for (var j = 0; j < ord-1; j++) {
					matd[i][j] = matrico[i][j];
				}
			}
			return matd;
		}
		
		function detj(a, ord){
			var matdj=new Array();
			for (var i = 0; i < ord-1; i++) {
				matdj[i] = [];
				for (var j = 0; j < ord-1; j++) {
					if (j !== a){
						matdj[i][j] = matrico[i][j];
					}
					else
					{
						matdj[i][a] = matrico[i][ord-1];
					}
				}
			}
			return matdj;
		}
		
		function determinanto(a) {
                var ordo = a.length;

                if (ordo === 1) {
                    return a[0][0];
                }

                if (ordo === 2) {
                    return a[0][0] * a[1][1] - a[0][1] * a[1][0];
                }

                var det = 0;

                for (var j = 0; j < ordo; j++) {
                    det += a[0][j] * cofaktor(a, 0, j);
                }

                return det;
            }

            function cofaktor(a, lin, kol) {
                var sub_matriz = [],
                    ordo = a.length,
                    m = 0;

                for (var i = 1; i < ordo; i++) {
                    sub_matriz[m] = [];

                    for (var j = 0; j < ordo; j++) {
                        if (j !== kol) {
                            sub_matriz[m].push(a[i][j]);
                        }
                    }
                    m++;
                }

                return (kol % 2 ? -1 : 1) * determinanto(sub_matriz);
            }
			
			function kalkulo(ord){
				var rezultoj=new Array();
				var koeficiento = ["X: ", "Y: ", "Z: ", "A: ", "B: ", "C: "];
				var mensaje = "";
				var d = determinanto(dett(ord));
				if (d !== 0){
					for (var i = 0; i < ord-1; i++){
						rezultoj[i] = koeficiento[i] + (determinanto(detj(i,ord)) / d).toFixed(2) + "\n";
					}
					for (var i = 0; i< ord-1; i++){
						mensaje += rezultoj[i];
					}
					alert (mensaje);
			}
				else
				{
					alert("Error Matemático");
				}
			}
			
		function komenco(a){
			plenigi(a);
			kalkulo(a);
		}
		
		document.getElementById("i6").onclick = function(){
			aldoni(7);
		}
			document.getElementById("i5").onclick = function(){
			aldoni(6);
		}
			document.getElementById("i4").onclick = function(){
			aldoni(5);
		}
			document.getElementById("i3").onclick = function(){
			aldoni(4);
		}
			document.getElementById("i2").onclick = function(){
			aldoni(3);
		}
			
		document.getElementById("resol7").onclick = function(){
			komenco(ord);
		}
	
	
		
	});