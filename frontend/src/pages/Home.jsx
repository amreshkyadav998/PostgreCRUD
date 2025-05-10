import React, { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Link } from 'react-router-dom';
import { useFrame } from '@react-three/fiber';

const Box = () => {
  const meshRef = useRef();

  // Animate box rotation
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="indigo" roughness={0.3} metalness={0.6} />
    </mesh>
  );
};

const Home = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div>
          <h1 className="text-5xl font-bold text-indigo-700 mb-6">Welcome to Product Manager</h1>
          <p className="text-gray-700 mb-6 text-lg">
            Manage your products seamlessly with powerful features like create, update, and delete.
          </p>
          <div className="flex gap-4">
            <Link
              to="/products"
              className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition duration-200 shadow"
            >
              View Products
            </Link>
            <Link
              to="/add"
              className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition duration-200 shadow"
            >
              Add Product
            </Link>
          </div>
        </div>

        {/* Three.js Canvas */}
        <div className="w-full h-96 bg-gray-100 rounded-lg shadow-lg">
          <Canvas camera={{ position: [5, 5, 5] }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <OrbitControls enableZoom={false} />
            <Box />
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default Home;
