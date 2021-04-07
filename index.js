onload = () => {
    document.querySelector('#btn-0').onclick = () => digito(0);
    document.querySelector('#btn-1').onclick = () => digito(1);
    document.querySelector('#btn-2').onclick = () => digito(2);
    document.querySelector('#btn-3').onclick = () => digito(3);
    document.querySelector('#btn-4').onclick = () => digito(4);
    document.querySelector('#btn-5').onclick = () => digito(5);
    document.querySelector('#btn-6').onclick = () => digito(6);
    document.querySelector('#btn-7').onclick = () => digito(7);
    document.querySelector('#btn-8').onclick = () => digito(8);
    document.querySelector('#btn-9').onclick = () => digito(9);
    
    document.querySelector('#divid').onclick = () => operador('/');
    document.querySelector('#multi').onclick = () => operador('*');
    document.querySelector('#soma').onclick = () => operador('+');
    document.querySelector('#sub').onclick = () => operador('-');
        
    document.querySelector('#comma').onclick = virgula;
    document.querySelector('#clear').onclick = limpa;
    document.querySelector('#calcula').onclick = calcula;

}

let dValor = '0';
let newN = true ;
let valorAnt = 0;
let opPendente = null ;

const display = () => {
    let [Inteiro, Decimal] = dValor.split(',');
    let v = '';
    c = 0;

    for(let i = Inteiro.length -1; i >= 0; i--){
            if (++c > 3) {
                v = '.' + v ;
                c = 1 ;
            }
        v = Inteiro[i] + v;
    }

    v = v + ( Decimal ? ',' + Decimal : '' );
    
    document.querySelector('#display').innerText = v ;
}

const digito = (n) => {
    if (newN) {
        dValor = '' + n;
        newN = false ;
    } else {
        dValor += n ;
    }
  
  display();
}

const virgula = () => {
    if (newN) {
        dValor = '0'
        newN = false
    } else 
    if (dValor.indexOf(',')== -1) {        
        dValor += ','
    }

    display();
}

const limpa = () => {
    newN = true;
    valorAnt = 0;
    dValor = '0';
    opPendente = null ; 

    display();
} 

const valorAtual = () => parseFloat(dValor.replace(',','.'));

const operador = (op) => {
    calcula();
    valorAnt = valorAtual();
    opPendente = op;
    newN = true ;
}

const calcula = () => {
    if (opPendente !== null) {
        switch(opPendente) {
            case '/': resultado = valorAnt / valorAtual(); break;  
            case '*': resultado = valorAnt * valorAtual(); break;  
            case '+': resultado = valorAnt + valorAtual(); break;  
            case '-': resultado = valorAnt - valorAtual(); break;  
        }
        dValor = resultado.toString().replace('.',',') ;
    }

    newN = true ;
    opPendente = null;
    valorAnt = 0;
    
    display();
}