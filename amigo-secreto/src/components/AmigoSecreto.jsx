import { useState } from 'react';

export default function AmigoSecreto() {
  const [nombres, setNombres] = useState([]);
  const [resultado, setResultado] = useState(null);
  const [nombre, setNombre] = useState('');
  const [error, setError] = useState('');

  const agregarNombre = () => {
    if (nombre.trim() === '') {
      setError('El nombre no puede estar vacío.');
      return;
    }
    if (nombres.includes(nombre)) {
      setError('Este nombre ya está en la lista.');
      return;
    }
    setNombres([...nombres, nombre]);
    setNombre('');
    setError('');
  };

  const realizarSorteo = () => {
    if (nombres.length < 2) {
      alert('Debe haber al menos 2 participantes.');
      return;
    }
    let seleccionado = nombres[Math.floor(Math.random() * nombres.length)];
    setResultado(seleccionado);
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-6">
      <div className="w-full max-w-md p-6 bg-white shadow-2xl rounded-2xl text-center">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6">🎁 Amigo Secreto</h1>
        <div className="mb-4">
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Añadir nombre"
            className="border rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          <button onClick={agregarNombre} className="mt-3 px-5 py-2 bg-blue-600 text-white font-bold rounded-lg shadow-md transition-transform transform hover:scale-105">Agregar</button>
        </div>
        <ul className="mb-4 text-gray-700">
          {nombres.map((n, i) => (
            <li key={i} className="p-2 bg-gray-200 rounded-lg mb-1">{n}</li>
          ))}
        </ul>
        <button onClick={realizarSorteo} className="px-5 py-2 bg-green-500 text-white font-bold rounded-lg shadow-md transition-transform transform hover:scale-105">Sortear</button>
        <div className="mt-6">
          {resultado && (
            <p className="text-xl font-bold text-gray-800 bg-yellow-200 p-3 rounded-lg">🎉 El amigo secreto es: {resultado} 🎉</p>
          )}
        </div>
      </div>
    </div>
  );
}
