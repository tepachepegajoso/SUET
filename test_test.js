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

test('Mi primer test', async t => {
    // Agregar el elemento SVG directamente en el DOM para el botón +
    await t.eval(() => {
        const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svgElement.setAttribute('viewBox', '0 0 16 16');
        svgElement.setAttribute('class', 'bi bi-plus');
        document.body.appendChild(svgElement);

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
        ;


});

