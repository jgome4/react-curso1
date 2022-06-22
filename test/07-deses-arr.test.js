import { retornaArreglo } from "../src/07-deses-arr";

describe('prueba 07', ()=>{
    test('debe ser texto y numero', ()=>{
        const [ letras, numeros ] = retornaArreglo(); 
       // console.log(texto)
        expect (letras).toBe('ABCx')

    })
})