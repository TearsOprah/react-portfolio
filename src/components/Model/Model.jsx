import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import './Model.scss';

export default function ModelViewer() {
  const containerRef = useRef(null);

  useEffect(() => {
    let camera, scene, renderer, model;
    const container = containerRef.current;

    // Инициализация сцены, камеры и рендерера
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(70, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 3; // Отдалить камеру от модели
    camera.position.y = 1; // Сместить позицию камеры вниз
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.clientWidth , container.clientHeight);
    renderer.setClearAlpha(0); // Установка прозрачности фона
    container.appendChild(renderer.domElement);

    // Загрузка 3D-модели
    const loader = new GLTFLoader();
    loader.load('/3d/smol_ame_in_an_upcycled_terrarium_hololiveen.glb', (gltf) => {
      model = gltf.scene;
      scene.add(model);
    });

    // Добавление света
    const light = new THREE.DirectionalLight(0xffffff);
    light.position.set(1, 1, 1).normalize();
    scene.add(light);

    // Функция для обновления сцены и анимации
    const animate = () => {
      requestAnimationFrame(animate);
      if (model) {
        model.rotation.y += 0.0005; // Анимация вращения модели
      }
      renderer.render(scene, camera);
    };

    // Функция для обновления размеров камеры и рендерера при изменении размеров окна
    const handleResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
      camera.position.z = 3; // Сохранить отдаление камеры при изменении размеров окна
    };

    // Вызов функций при монтировании и размонтировании компонента
    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div className="model-viewer" ref={containerRef} />;
}
