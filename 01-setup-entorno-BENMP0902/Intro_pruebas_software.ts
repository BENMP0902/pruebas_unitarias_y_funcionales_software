// Prueba de Software 

//Funcion sumar dos numeros
function sumar(a: number, b: number): number {
  return a + b;
}

// Prueba unitaria para la funcion sumar
test('Suma de 2 + 3 debe ser 5', () => {
  expect (sumar(2,3)).toBe(5);
});

// Simulacion de base de datos en memoria Instagram
test('devuelve todas las publicaciones guardadas aunque no tengan etiqueta', async () => {
  await guardarPost(userId, postId); // sin tag
  const guardadas = await obtenerPostsGuardados(userId);
  expect(guardadas).toContain(postId);
});

// Prueba de Todo list
test('nueva tarea debe tener completed en false', () => {
  const tarea = crearTarea('Estudiar pruebas');
  expect(tarea.completed).toBe(false);
});

// Pruebas unitarias(verifican funciones o componentes individuales)
test('La función normalizarTexto elimina espacios al inicio y fin de texto', () => {
  expect(normalizarTexto('  hola mundo  ')).toBe('hola mundo');
});

// Pruebas de integracion(Verifican como interactuan distintos modulos)
test('guardar pendiente persiste en la base de datos', async () => {
  await api.post('/pendientes', { titulo: 'Hacer ejercicio', completed: false });
  const pendientes = await db.getAllPendientes();
  expect(pendientes.length).toBeGreaterThan(0);
});

// Pruebas end-to-end(Simulan el comportamiento del usuario final)
it('permite crear y mostrar un pendiente', async () => {
  await page.goto('http://localhost:3000');
  await page.fill('#nuevo-pendiente', 'Estudiar pruebas de software');
  await page.click('#agregar');
  await expect(page.locator('.pendiente')).toContainText('Estudiar pruebas de software');
});