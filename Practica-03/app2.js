class Calcualdora{
    static sumar(a,b){
        return a+b;
    }

    restar(a,b){
        return a-b
    }

    static dividir(a,b){
        if(b!=0){
            return a/b
 
 
        }else{
            console.log(`Infinito`)
        }
    }
}

console.log(Calcualdora.sumar(4,5))
// console.log(Calcualdora.restar(6,5))
console.log(Calcualdora.dividir(4,5))