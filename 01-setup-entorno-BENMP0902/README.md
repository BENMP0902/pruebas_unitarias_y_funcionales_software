# 01_Setup_Entorno

1. Instala Node y NPM
2. Inicializa un nuevo proyecto de node e instala jest
```bash
npm init -y
npm install --save-dev jest
```
3. Modifica `package.json` para que incluya este comando `test`:
```json
"scripts": {
  "test": "jest"
}
```
4. Crea un archivo `sumar.test.ts` y agrega este contenido
```typescript
test('prueba falsa', () => {
  expect(true).toBe(true);
});
```
5. Ejecuta la prueba con teste comando
```bash
npm test
```
