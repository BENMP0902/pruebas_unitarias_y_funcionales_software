# Pruebas Unitarias y Funcionales de Software

Repositorio académico enfocado en la implementación de estrategias de **Quality Assurance (QA)**, **Testing Automatizado** y **Mejores Prácticas de Ingeniería de Software**.

---

## 📋 Descripción del Proyecto

Este repositorio aloja una colección progresiva de prácticas y módulos de código desarrollados durante el estudio de **Ingeniería de Software**.  
El objetivo principal es dominar los conceptos de **pruebas automatizadas** para construir software **robusto, escalable y mantenible**.

---

## 📂 Estructura del Repositorio

El proyecto está organizado en módulos que representan hitos de aprendizaje:

### 1️⃣ Fundamentos

**Ubicación:** `01-setup-entorno-BENMP0902/`

- Introducción teórica a la calidad de software.
- Pirámide de Testing y costos de regresión.
- Configuración inicial del entorno **Node.js + TypeScript**.

---

### 2️⃣ API REST Evolutiva

**Ubicación:** `02-entorno-jest-primer-test-BENMP0902/`

Proyecto principal que contiene una API REST completa con la siguiente arquitectura:

```
src/
 ├── controllers/   # Controladores de endpoints
 ├── services/      # Lógica de negocio desacoplada
 ├── routes/        # Definición de endpoints (GET, POST)

tests/              # Pruebas unitarias con Jest y Supertest
coverage/           # Reportes de cobertura de código
```

---

## 📝 Notas e Infografías

**Ubicación:** `notas/`

Material de apoyo visual para el estudio:

- Infografía Tema 1: Introducción
- Infografía Tema 2: Arquitectura y Jest
- Infografía Tema 3: Diseño y HTTP Codes
- Infografía Tema 4: Cobertura y Refactor

---

## 🚀 Guía de Ejecución Rápida

Para ejecutar el proyecto principal (**Módulo 02**):

### Instalar dependencias
```bash
cd 02-entorno-jest-primer-test-BENMP0902
npm install
```

### Correr pruebas automatizadas
```bash
npm test
```

### Verificar cobertura de código
```bash
npm test -- --coverage
```

### Iniciar servidor de desarrollo
```bash
npm start
```

---

## 🛠️ Stack Tecnológico

- **Runtime:** Node.js  
- **Lenguaje:** TypeScript (Strict Mode)  
- **Framework Web:** Express.js  
- **Testing:** Jest + Supertest  
- **Control de Versiones:** Git  

---

## 👤 Autor

**Benjamín MP**  
Estudiante de Ingeniería de Software
