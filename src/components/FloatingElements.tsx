import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const FloatingElements: React.FC<{ position: 'left' | 'right' }> = ({ position }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    
    const currentMount = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(300, 300);
    currentMount.appendChild(renderer.domElement);

    // Create shapes representing data visualization elements
    const shapes: THREE.Mesh[] = [];
    
    // Analytics Cube (representing data blocks)
    const cubeGeometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
    const cubeMaterial = new THREE.MeshPhongMaterial({
      color: position === 'left' ? '#4C51BF' : '#6B46C1', // Indigo/Purple
      wireframe: true,
      transparent: true,
      opacity: 0.7,
    });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.x = position === 'left' ? -1.5 : 1.5;
    shapes.push(cube);
    scene.add(cube);

    // Circular Graph (representing pie charts)
    const circleGeometry = new THREE.TorusGeometry(1.05, 0.15, 16, 32);
    const circleMaterial = new THREE.MeshPhongMaterial({
      color: position === 'left' ? '#3182CE' : '#805AD5', // Blue/Purple
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    const circle = new THREE.Mesh(circleGeometry, circleMaterial);
    shapes.push(circle);
    scene.add(circle);

    // Bar Chart representation
    const barGeometry = new THREE.CylinderGeometry(0.3, 0.3, 2.25, 8);
    const barMaterial = new THREE.MeshPhongMaterial({
      color: position === 'left' ? '#38B2AC' : '#D53F8C', // Teal/Pink
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });
    const bar = new THREE.Mesh(barGeometry, barMaterial);
    bar.position.x = position === 'left' ? 1.5 : -1.5;
    bar.rotation.x = Math.PI / 4;
    shapes.push(bar);
    scene.add(bar);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0x404040, 1.2);
    scene.add(ambientLight);

    // Add directional light
    const light = new THREE.DirectionalLight(0xffffff, 1.2);
    light.position.set(5, 5, 5);
    scene.add(light);

    camera.position.z = 6;

    // Animation
    let frame = 0;
    const animate = () => {
      frame = requestAnimationFrame(animate);

      shapes.forEach((shape, index) => {
        // Slower rotation for better visibility of larger shapes
        shape.rotation.x += 0.003 * (index + 1);
        shape.rotation.y += 0.005 * (index + 1);
        
        // Increased amplitude of floating effect
        shape.position.y = Math.sin(Date.now() * 0.001 + index * Math.PI / 2) * 0.4;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(frame);
      currentMount?.removeChild(renderer.domElement);
    };
  }, [position]);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'absolute',
        top: '50%',
        [position]: '5%',
        transform: 'translateY(-50%)',
        width: '300px',
        height: '300px',
        zIndex: 1,
        pointerEvents: 'none',
      }}
    />
  );
};

export default FloatingElements; 