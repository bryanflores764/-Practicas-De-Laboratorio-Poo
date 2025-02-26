const Auto={
    Marca:'toyota',
    Modelo:'Corolla',
    Año:2022,
    Encendido:false,
    Info: function(){ return `Este coche es un ${this.Marca} ${this.Modelo} ${this.Año}`},
    
    Encender: function(){
     this.Encendido ? console.log(`El Auto ya esta encendido`):console.log(`Encendiendo Auto`);Auto.Encendido=true;

    },
     
    Apagar:function(){
        if(this.Encendido){
            console.log(`Auto Apagado`)
            this.Encendido=false
        }else{
            console.log(`El auto ya esta`)
        }

       

    },

    
}




console.log(Auto.Info())
console.log(Auto.Encender())
console.log(Auto.Apagar())