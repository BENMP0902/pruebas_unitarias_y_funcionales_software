# Pruebas Unitarias y Funcionales de Software

Repositorio académico enfocado en la implementación de estrategias de **Quality Assurance (QA)**, **Testing Automatizado** y **Mejores Prácticas de Ingeniería de Software**.

---

## 📋 Descripción del Proyecto

Este repositorio aloja una colección progresiva de prácticas, ejercicios y módulos de código desarrollados durante el estudio de **Ingeniería de Software**. El objetivo principal es dominar los conceptos de **pruebas automatizadas** para construir software **robusto, escalable y mantenible**.

El enfoque abarca desde los fundamentos teóricos y la configuración de entornos, hasta la implementación de **pruebas unitarias**, **pruebas de integración** y **pruebas End-to-End (E2E)** en aplicaciones reales utilizando **TypeScript** y **Node.js**.

---

## 🛠️ Tecnologías y Herramientas

El stack tecnológico utilizado en este repositorio incluye:

- **Lenguaje:** TypeScript (Strict Mode)
- **Runtime:** Node.js
- **Framework de Testing:** Jest
- **Testing de API:** Supertest
- **Servidor Web:** Express.js
- **Control de Versiones:** Git & GitHub

---

## 📂 Estructura del Repositorio

El proyecto está organizado en **módulos numerados secuencialmente**, representando el avance incremental del conocimiento:

### 📁 01-setup-entorno
**Introducción y Fundamentos**

- Configuración inicial del entorno de desarrollo.
- Conceptos teóricos clave:
  - Pirámide de Testing.
  - Pruebas de regresión.
  - Costo del error en etapas tardías.
- Primeros pasos con TypeScript.

---

### 📁 02-entorno-jest-primer-test
**Configuración de Jest y Primer Endpoint**

- Inicialización del proyecto con npm.
- Configuración de `tsconfig.json`.
- Implementación de arquitectura MVC básica (Rutas y Controladores).
- Creación de API REST con Express (Endpoint `GET /tareas`).
- Escritura de pruebas unitarias para validar:
  - Contratos de API.
  - Códigos de estado HTTP.
- Manejo de asincronía en tests.

---

## 🚀 Guía de Instalación y Ejecución

> **Nota:** Este repositorio funciona como un **monorepo modular**, donde cada directorio es un proyecto independiente.

### Clonar el repositorio

```bash
git clone https://github.com/[TU_USUARIO]/prubeas_unitarias_y_funcionales_software.git
cd prubeas_unitarias_y_funcionales_software
```

---

### Ejecutar un módulo específico (Ejemplo: Módulo 02)

1. Navega al directorio del módulo:

```bash
cd 02-entorno-jest-primer-test-BENMP0902
```

2. Instala las dependencias:

```bash
npm install
```

---

### Ejecutar las pruebas

Para verificar el funcionamiento del código y ejecutar la suite de pruebas automatizadas:

```bash
npm test
```

---

### Iniciar el servidor de desarrollo (si aplica)

```bash
npm start
```

---

## 🧠 Metodología y Enfoque

Este repositorio sigue principios de **ingeniería de software moderna**:

- **Shift-Left Testing:** Integración de pruebas desde las etapas tempranas del desarrollo.
- **Clean Code:** Arquitectura separada por responsabilidades (Routes / Controllers).
- **Type Safety:** Uso estricto de TypeScript para prevenir errores en tiempo de compilación.
- **Testing como contrato:** Las pruebas definen el comportamiento esperado del sistema.

---

## 👤 Autor

**Benjamin MP**  
Estudiante de Ingeniería de Software
Hybridge Education
