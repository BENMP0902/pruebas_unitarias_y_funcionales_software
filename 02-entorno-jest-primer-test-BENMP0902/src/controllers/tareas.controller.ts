// Necesitamos importar estos tipos de Express para poder trabajar con las peticiones HTTP
// Request: contiene toda la información que nos envía el cliente (como datos del formulario, parámetros, etc.)
// Response: nos permite enviar respuestas al cliente (como datos, mensajes de error, etc.)
import { Request, Response } from 'express';
// Importamos las funciones del servicio. El controlador ya no sabe que existe un arreglo 'tareas'.
import { obtenerTodasLasTareas, crearTarea } from "../services/tareas.service";

export function getTareas(req: Request, res: Response): void {
  // El controlador solo pide los datos al servicio y los envia.
  const tareas = obtenerTodasLasTareas();
  res.json(tareas);
}

export function postTarea(req: Request, res: Response): void {
  const { titulo, descripcion } = req.body;
  
  // Responsabilidad del controlador: Validar que la peticion HTTP sea correcta
  if (!titulo || !descripcion) {
    res.status(400).json({ mensaje: "Faltan campos obligatorios" });
    return;
  }

  // Delegamos la lógica de negocio del servicio
  const nueva = crearTarea({
    titulo,
    descripcion,
    completada: false,
  });

  // Responsabilidad del controlador: Responder con el código HTTP adecuado (201)
  res.status(201).json(nueva)
}
// Por ahora, en lugar de usar una base de datos, guardamos las tareas en un arreglo
// Tenemos un arreglo de objectos en donde cada objeto representa una tarea
// let tareas = [
//  { id: 1, titulo: "Estudiar pruebas", completada: false, descripcion: "Estudiar pruebas unitarias usando Jest" },
//  { id: 2, titulo: "Hacer ejercicio", completada: true, descripcion: "Correr 30 minutos a 10km/h" },];


/* // Esta función se ejecuta cuando alguien hace una petición GET a nuestra API
// Por ejemplo, cuando un navegador o una app móvil quiere ver la lista de tareas
// en el archivo app.ts vamos a usar esta función para obtener las tareas
export function obtenerTareas(req: Request, res: Response) {
  // Con res.json() convertimos nuestro arreglo de tareas a formato JSON
  // y lo enviamos como respuesta al cliente
  // Es como decir: "aquí tienes la lista de tareas que pediste"
  res.json(tareas);
}

// Nueva función para manejar la creación de tareas
export function crearTarea(req: Request, res: Response) {
  // Extraemos el título y la descripción del cuerpo de la petición (req.body)
  // req.body es el JSON que nos envía el cliente (Frontend o Postman)
  const { titulo, descripcion } = req.body;

  // Validación básica: Si falta alguno de los campos obligatorios,
  // detenemos la ejecución y respondemos con un error 400 (Bad Request).
  if (!titulo || !descripcion) {
    return res.status(400).json({ mensaje: "El título y la descripción son obligatorios" });
  }

  // Si todo está bien, creamos el objeto de la nueva tarea.
  // Generamos un ID simple sumando 1 al total actual (solo para este ejemplo en memoria)
  const nuevaTarea = {
    id: tareas.length + 1,
    titulo,
    descripcion,
    completada: false // Por defecto, una tarea nueva no está completada
  };

  // Guardamos la tarea en nuestro arreglo
  tareas.push(nuevaTarea);
  
  // Respondemos con código 201 (Created) y devolvemos la tarea creada
  // Es buena práctica devolver el objeto creado para que el cliente tenga el ID.
  res.status(201).json(nuevaTarea);
} */