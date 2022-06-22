import { getSaludo } from "../src/02-template-string"

describe('Pruebas 02-templeate', () => {
    test('GetSaludo debe retornar Hola Juan', () => {

        const nombre='Juan'
        const message=getSaludo(nombre)
        expect(message).toBe(`Hola ${nombre}`)
    })
})
