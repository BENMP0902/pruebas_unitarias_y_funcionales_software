// Definimos un tipo para nuestras tareas para tener tipado estricto
type Tarea = {
    id: number;
    titulo: string;
    completada: boolean;
    descripcion: string;
};

// Simulamos una base de datos con este arreglo en memoria.
// Esta variable es privada para el módulo, nadie fuera de este archivo puede tocarla directamente.
let tareas: Tarea[] = [
    {
        id: 1,
        titulo: "Estudiar pruebas",
        completada: false,
        descripcion: "Estudiar pruebas unitarias usando Jest",
    },
    {
        id: 2,
        titulo: "Hacer ejercicio",
        completada: true,
        descripcion: "Correr 30 minutos a 10 km/h",
    },
];

// SERVICIO: Obtener tareas
// Esta funcion encapsula la lógica de acceso de datos.
// Si mañana cambiamos el arreglo por una base de datos SQL, solo cambiamos este archivo.
export function obtenerTodasLasTareas() {
    return tareas;
}

// SERVICIO: Crear tarea
// Recibe los datos sin ID, genera la lógica de negocio (crear ID) y guarda.
export function crearTarea(data: Omit<Tarea, "id">): Tarea {
    const nueva = {
        id: tareas.length + 1, // Lógica de generacion de ID
        ...data, // Copiamos los datos recibidos (título, descripcion, etc.)
    };

    tareas.push(nueva);
    return nueva;
}
    
    // UTILERÍA: Limpiar tareas
    // Esta funcion es vital para las pruebas unitarias, para resetear el estado entre tests.
    export function limpiarTareas() {
        tareas = [];
}
