import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';

export const ThreeDBackground = () => {
  const mountRef = useRef(null);
  const [rotationSpeed, setRotationSpeed] = useState(0.005);
  const [scaleFactor, setScaleFactor] = useState(1);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // alpha: true for transparent background
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(0, 5, 5).normalize();
    scene.add(directionalLight);

    const geometry = new THREE.IcosahedronGeometry(1.5, 1);
    const material = new THREE.MeshStandardMaterial({
      color: 0x88CCFF,
      wireframe: true,
      transparent: true,
      opacity: 0.7
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    camera.position.z = 5;
    const animate = () => {
      requestAnimationFrame(animate);
      if (mesh) {
        mesh.rotation.x += rotationSpeed * 0.5;
        mesh.rotation.y += rotationSpeed;
        mesh.scale.set(scaleFactor, scaleFactor, scaleFactor);
      }
      renderer.render(scene, camera);
    };
    animate();
    const handleResize = () => {
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [rotationSpeed, scaleFactor]);

  const mouse = useRef({ x: 0, y: 0 });
  const onMouseMove = useCallback((event) => {
    mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;

    setRotationSpeed(0.005 + (mouse.current.x * 0.005));
    setScaleFactor(1 + (mouse.current.y * 0.1));
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, [onMouseMove]);


  return <div ref={mountRef} className="absolute inset-0 z-0 opacity-20" />;
};