// Este documento serve de exemplo para como usar funções flechas

const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,15,19,21,32,41,54,61,68,72,80,99,112];

function soma(a,b){
    return a+b;
}

const soma2 = (a,b) => a+b



function numeroPrimo (num) {
    resultado = true;
    if(num !== 2 && num%2 == 0) {
        resultado = false   }
    else {
        for(count=2;count<=Math.sqrt(num);count+=1){
            if(num%count === 0) {   resultado = false     }
        }    }
    return resultado
}

const numeroPrimo2 = (num) => {
    if(num !== 2 && num%2 == 0) {return false}
    else {
        for(count=2;count<=Math.sqrt(num);count+=1){
            if(num%count === 0) {return false}
        }    }    
    return true 
}

/*
for (i=0; i<numeros.length; i++){
console.log(numeros[i]+" - "+numeroPrimo(numeros[i])+"||"+numeroPrimo2(numeros[i]))
}*/