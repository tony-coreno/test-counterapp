import '@testing-library/jest-dom';

describe('Pruebas en Template String', () => { 
    
    test('String vs Template', () => { 
        
        const nombre = 'Hola Tony';

        const nombre2 = `Hola Tony`;

        expect(nombre).toBe(nombre2);


     })

 })