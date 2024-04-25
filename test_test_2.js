//                     ______
//                  .-"      "-.
//                 /            \
//                |              |
//                |,  .-.  .-.  ,|
//           /\   | )(__/  \__)( |
//         _ \/   |/     /\     \|
//        \_\/    (_     ^^     _)   .-==/~\
//       ___/_,__,_\__|IIIIII|__/__)/   /{~}}
//       ---,---,---|-\IIIIII/-|---,\'-' {{~}
//                  \          /     '-==\}/
//       jMG         `--------`
//FLUJO => ||
import { Selector } from 'testcafe';

fixture('Getting Started')
    .page('https://suet.cu.cl.sre.gob.mx/login');



test('test asi bien pinche loco', async t => {
    // Agregar el elemento SVG directamente en el DOM para el botón +
    await t.eval(() => {
        const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svgElement.setAttribute('viewBox', '0 0 16 16');
        svgElement.setAttribute('class', 'bi bi-plus');
        document.body.appendChild(svgElement);

        const inputFile = document.createElement('input');
        inputFile.setAttribute('type', 'file');
        inputFile.setAttribute('name', 'file');
        inputFile.setAttribute('class', 'el-upload__input');
        document.body.appendChild(inputFile);

        const passwordInput = document.createElement('input');
        passwordInput.setAttribute('type', 'password');
        passwordInput.setAttribute('autocomplete', 'off');
        passwordInput.setAttribute('placeholder', 'Contraseña');
        passwordInput.setAttribute('class', 'el-input__inner');
        document.body.appendChild(passwordInput);

    });

    await t
        .wait(1000)
        .click('.el-input__suffix') // 
        .click(Selector('.el-scrollbar').withText('Usuario y Contraseña')) //Tipo de auntenticación
        .typeText(Selector('input[placeholder="Usuario"]'), 'jmalvarez') // USER
        .typeText(Selector('input[placeholder="Contraseña"]'), 'Abcdefg1234567#') // PASSWORD
        .click(Selector('.btn-basic-inline-secondary3')) //Ingresar
        .click(Selector('button[type="primary"]')) //Botón oficina
        .click(Selector('.enlace-secondary1').withText('Asignar turno')) //Asignar turno
        .click(Selector('svg[data-v-3712e5cf].bi.bi-box-arrow-in-up')) //Seleccionar turno sin cita
        .typeText(Selector('input.el-input__inner'), 'COVA870223MDFRLN05') //CURP
        .click(Selector('.btn-basic-inline-positive').withText('Buscar')) 
        .wait(1000)
        .click(Selector('.btn-navegacion-inline-positive.btn-navegacion-small'))
        .wait(1000)
        .click(Selector('.el-checkbox__label').withText('Pasaporte Ordinario')) // Hacer clic en el checkbox
        .click(Selector('.btn-basic-inline-secondary2').withText('Validar')) //Validar
        .click(Selector('.btn-basic-inline-positive').withText('Generar turno')) //Generar Turno
        //COMENTARIO
        .click(Selector('i.flaticon-home-2'))
        .click(Selector('.enlace-secondary1').withText('Ventanilla de documentación')) //Ventanilla Documentación 
        .click(Selector('button.btn.btn-positive-confirm.btn-small2').withText('Aceptar'))
        .click(Selector('.el-checkbox__label').withText('Omitir la Validación automática'))
        .wait(1000)
        .click(Selector('span').withText('Aceptar'))
        .wait(500)
        .click(Selector('input.el-input__inner').withAttribute('placeholder', 'Seleccionar el estado civil'))
        .wait(200)
        .click(Selector('span').withText('Soltero(a)')) //Opción Estado Civil
        .click(Selector('button.btn-navegacion-inline-positive').withAttribute('title', 'Siguiente'))
        .click(Selector('span').withText('Cerrar'))
        .click(Selector('input.el-input__inner').withAttribute('placeholder', 'Subtipo trámite'))
        .wait(200)
        .click(Selector('span').withText('Extravío')) //Opción Renovación sin documento 
        .click(Selector('input.el-input__inner').withAttribute('placeholder', 'Vigencia'))
        .wait(200)
        .click(Selector('span').withText('10 años')) //Opción Vigencia
        .click(Selector('.bi.bi-check'))
        .wait(600)
        //MODULO
        .click(Selector('.btn-basic-inline-positive.btn-sm.btn-small'))
        .wait(600)
        .click(Selector('input.el-input__inner').withAttribute('placeholder', 'Municipio'))
        .wait(200)
        .click(Selector('span').withText('Coyoacán')) //Alcaldía en datos personaless
        .wait(200)
        .click(Selector('.bi.bi-chevron-right'))
        .wait(600)
        .click(Selector('.bi.bi-chevron-right'))
        //Seccion de domicilio actual => Eliminar cuando ya no aparezca FOLIO DE LA MUERTE
        .click(Selector('.btn.btn-default'))
        .wait(200)
        .click(Selector('.bi.bi-chevron-right'))
        .wait(600)
        .click(Selector('.bi.bi-chevron-right'))
        .wait(600)
        .click(Selector('input.el-input__inner').withAttribute('placeholder', 'Parentesco'))
        .wait(200)
        .click(Selector('span').withText('Conocida(o)'))
        .click(Selector('span[aria-hidden="true"]').withText('¿Mismo domicilio del solicitante?')) //SWITCH
        .typeText(Selector('#phone'), '5555555555555555')
        .wait(200)
        .click(Selector('.bi.bi-chevron-right'))
        .wait(600)
        //Fotocopia de acta de nacimiento certificada por notario público en México.
        //Licencia de manejo de localidad de circunscripción vigente/vencida
        .typeText(Selector('input.el-input__inner').withAttribute('placeholder', 'Seleccionar').nth(0), 'Fotocopia de acta de nacimiento certificada por notario público en México.')
        .click(Selector('span').withText('Fotocopia de acta de nacimiento certificada por notario público en México.'))
        .typeText(Selector('input.el-input__inner').withAttribute('placeholder', 'Seleccionar').nth(1), 'Licencia de manejo de localidad de circunscripción vigente/vencida')
        .click(Selector('span').withText('Licencia de manejo de localidad de circunscripción vigente/vencida'))
        .wait(200)
        .click(Selector('.bi.bi-check'))
        .wait(600)
        //.click(Selector('path[d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4zM393.4 288H328v112c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V288h-65.4c-14.3 0-21.4-17.2-11.3-27.3l105.4-105.4c6.2-6.2 16.4-6.2 22.6 0l105.4 105.4c10.1 10.1 2.9 27.3-11.3 27.3z"]'))
        .click(Selector('.el-tooltip.btn-navegacion-inline-positive'))
        .wait(1000)
        .click(Selector('.el-button').withText('Cargar fotografía')) // Hacer clic en el botón "Cargar fotografía"
        //.agregarElementoFile() // Agregar el elemento file al DOM
        .setFilesToUpload('input[type="file"].el-upload__input', ['./foto.jpg']) // Seleccionar el archivo a cargar
        .wait(2000) // Espera 2 segundos para asegurarse de que el botón esté completamente cargado
        .click(Selector('button.btn-basic-inline-positive.btn-small').withText('Confirmar'))
        .wait(200)
        .typeText('.el-input__inner[type="password"]', 'Abcdefg1234567#')
        .click(Selector('.btn-basic-inline-positive').withText('Autorizar'))
        ;


});