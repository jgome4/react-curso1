import { getUser } from "../src/05-funciones"

describe('prueba 05 funciones', ()=>
{
    test('el objeto debe ser igual', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser()
        console.log(user)
        console.log(testUser)
        expect(testUser).toEqual(user)
    })
} )