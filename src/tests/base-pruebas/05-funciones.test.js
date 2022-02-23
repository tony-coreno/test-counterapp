import { getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe('Funciones', () => { 
    
    test('Debería regresar el nombre por argumento', () => { 

        const nombreActivo = getUsuarioActivo('Tony');

        console.log(nombreActivo);

        

     })
 })