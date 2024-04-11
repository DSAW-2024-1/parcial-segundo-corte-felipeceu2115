import express from 'express';

const usuarios = [
  { nombre: 'Samuel', apellido: 'Acero García' },
  { nombre: 'Darek', apellido: 'Aljuri Martínez' },
  { nombre: 'Juan Felipe', apellido: 'Cepeda Uribe' },
  { nombre: 'Ana María', apellido: 'Chaves Pérez' },
  { nombre: 'Carlos David', apellido: 'Cruz Pavas' },
  { nombre: 'Diego Norberto', apellido: 'Díaz Algarín' },
  { nombre: 'Jorge Esteban', apellido: 'Díaz Bernal' },
  { nombre: 'David Esteban', apellido: 'Díaz Vargas' },
  { nombre: 'Juan José', apellido: 'Forero Peña' },
  { nombre: 'Santiago', apellido: 'Gutiérrez de Piñeres Barbosa' },
  { nombre: 'Samuel Esteban', apellido: 'López Huertas' },
  { nombre: 'Michael Steven', apellido: 'Medina Fernández' },
  { nombre: 'Katherin Juliana', apellido: 'Moreno Carvajal' },
  { nombre: 'Juan Pablo', apellido: 'Moreno Patarroyo' },
  { nombre: 'Nicolás Esteban', apellido: 'Muñoz Sendoya' },
  { nombre: 'Santiago', apellido: 'Navarro Cuy' },
  { nombre: 'Juan Pablo', apellido: 'Parrado Morales' },
  { nombre: 'Daniel Santiago', apellido: 'Ramírez Chinchilla' },
  { nombre: 'Juan Pablo', apellido: 'Restrepo Coca' },
  { nombre: 'Gabriela', apellido: 'Reyes González' },
  { nombre: 'Juan José', apellido: 'Rodríguez Falla' },
  { nombre: 'Valentina', apellido: 'Ruiz Torres' },
  { nombre: 'Mariana', apellido: 'Salas Gutiérrez' },
  { nombre: 'Sebastián', apellido: 'Sánchez Sandoval' },
  { nombre: 'Josué David', apellido: 'Sarmiento Guarinzo' },
  { nombre: 'Santiago', apellido: 'Soler Prado' },
  { nombre: 'María Fernanda', apellido: 'Tamayo López' },
  { nombre: 'Deivid Nicolás', apellido: 'Urrea Lara' },
  { nombre: 'Andrés', apellido: 'Azcona' }
];

const router = express.Router();

router.get('/', (req, res) => {
  let count = req.query.count || usuarios.length;
  const sort = req.query.sort || 'ASC';
  let sortedUsers = [...usuarios];

  if (sort === 'ASC') {
    sortedUsers.sort((a, b) => a.apellido.localeCompare(b.apellido));
  } else if (sort === 'DESC') {
    sortedUsers.sort((a, b) => b.apellido.localeCompare(a.apellido));
  }

  const filtroUsuarios = sortedUsers.slice(0, Number(count));

  res.send(filtroUsuarios);
});