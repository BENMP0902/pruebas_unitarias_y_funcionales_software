// Importamos supertest, que es una herramienta que nos ayuda a probar APIs
// Es como un navegador virtual que puede hacer peticiones a nuestra aplicación
import request from "supertest";

// Importamos nuestra aplicación para poder probarla
// Es como traer toda nuestra aplicación para ver si funciona correctamente
import app from "../src/app";

// describe nos ayuda a agrupar pruebas relacionadas
// En este caso, todas las pruebas que verifiquen la ruta GET /tareas
describe("GET /tareas", () => {
  // it define una prueba individual
  // El texto describe lo que esperamos que haga nuestra API
  it("Debe responder con un arreglo de tareas", async () => {
    // Hacemos una petición GET a /tareas usando supertest
    // Es como si un navegador visitara http://localhost:3000/tareas
    const response = await request(app).get("/tareas");

    // Verificamos que la respuesta sea correcta:
    // 1. El código de estado debe ser 200 (todo salió bien)
    expect(response.status).toBe(200);
    
    // 2. La respuesta debe ser un arreglo
    expect(Array.isArray(response.body)).toBe(true);
    
    // 3. El arreglo debe tener al menos una tarea
    expect(response.body.length).toBeGreaterThan(0);
    
    // 4. La primera tarea debe tener una propiedad 'titulo'
    expect(response.body[0]).toHaveProperty("titulo");
    
    // 5. La primera tarea debe tener una propiedad 'completada'
    expect(response.body[0]).toHaveProperty("completada");

    // 6. La primera tarea debe tener una propiedad 'descripcion'
    expect(response.body[0]).toHaveProperty("descripcion");
  });
}); // <--- ¡AQUÍ FALTABA ESTO! Cerramos el bloque GET antes de abrir el POST


// Agrupamos las pruebas relacionadas con la creacion de tareas
describe("POST /tareas", () => {
  
  // PRUEBA 1: CASO DE EXITO
  it("Debe crear una tarea cuando se envía título y descripción", async () => {
    // Preparamos los datos que vamos a enviar (el input)
    const nuevaTarea = {
      titulo: "Aprender mocks",
      descripcion: "Estudiar mocks y stubs en Jest"
    };

    // Hacemos la peticion POST simulanda enviada (.send) los datos
    const response = await request(app).post("/tareas").send(nuevaTarea);

    // Verificamos que el servidor responda "201 Created"
    expect(response.status).toBe(201);

    // Verificamos que la respuesta tenga un ID (generado por el servidor)
    expect(response.body).toHaveProperty("id");

    // Verificamos que el titulo y descripcion guardados coincidan con los enviados
    expect(response.body.titulo).toBe(nuevaTarea.titulo);
    expect(response.body.descripcion).toBe(nuevaTarea.descripcion);

    // Verificamos que por default la tarea no este completada
    expect(response.body.completada).toBe(false);
  });

  // PRUEBA 2: CASO DE ERROR (Validación)
  it("Debe responder con 400 si falta algún campo obligatorio", async () => {
    // Preparamos unos datos inválidos (falta la descripción)
    const tareaInvalida = {
      titulo: "Tarea sin descripción"
    };

    // Enviamos la petición con datos incompletos
    const response = await request(app).post("/tareas").send(tareaInvalida);

    // Esperamos un error 400 (Bad Request)
    expect(response.status).toBe(400);
    
    // Esperamos que la API nos devuelva un mensaje explicando el error
    expect(response.body).toHaveProperty("mensaje");
    
    // Verificamos que el mensaje mencione la palabra "obligatorios"
    // (usamos una expresión regular /.../i para ignorar mayúsculas/minúsculas)
    expect(response.body.mensaje).toMatch(/obligatorios/i);
  });
});