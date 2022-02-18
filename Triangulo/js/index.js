        var a, b, c, resultado;
        function triangulo() {
        a=parseFloat(document.meuformulario.ladoa.value);
        b=parseFloat(document.meuformulario.ladob.value);
        c=parseFloat(document.meuformulario.ladoc.value);
        if (a<b+c && b<a+c && c<a+b) {
        if (a==b && b==c) {
        resultado='TRIANGULO EQUILÁTERO';}
        else {
        if (a==b || a==c || c==b) {
        resultado='TRIANGULO ISÓSCELES';}
        else {
        resultado='TRIANGULO ESCALENO';}
        }
        }
        else {
        resultado='NÃO É UM TRIANGULO.';
        }
        document.meuformulario.saida.value = resultado;
        }
 