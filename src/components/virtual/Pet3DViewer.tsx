'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface Pet3DViewerProps {
  petName: string;
  species: 'dog' | 'cat';
  outfit: {
    id: string;
    name: string;
    icon: string;
    category: string;
    color: string;
  };
  className?: string;
}

export default function Pet3DViewer({
  petName,
  species,
  outfit,
  className = ''
}: Pet3DViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const petGroupRef = useRef<THREE.Group | null>(null);
  const outfitGroupRef = useRef<THREE.Group | null>(null);
  const animationIdRef = useRef<number | null>(null);
  
  const [isLoaded, setIsLoaded] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);

  // 初始化 Three.js 场景
  useEffect(() => {
    if (!containerRef.current) return;

    // 创建场景
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);
    sceneRef.current = scene;

    // 创建相机
    const camera = new THREE.PerspectiveCamera(
      45,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 1, 5);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // 创建渲染器
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 添加光源
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0xffffff, 0.4);
    pointLight.position.set(-5, 5, -5);
    scene.add(pointLight);

    // 创建地面
    const groundGeometry = new THREE.CircleGeometry(3, 32);
    const groundMaterial = new THREE.MeshStandardMaterial({
      color: 0x8BC34A,
      roughness: 0.8,
      metalness: 0.1
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -1;
    ground.receiveShadow = true;
    scene.add(ground);

    // 创建宠物模型
    const petGroup = createPetModel(species);
    petGroupRef.current = petGroup;
    scene.add(petGroup);

    // 创建装扮模型
    const outfitGroup = new THREE.Group();
    outfitGroupRef.current = outfitGroup;
    scene.add(outfitGroup);

    // 应用装扮
    applyOutfit(outfit);

    // 添加鼠标交互
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      setAutoRotate(false);
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging || !petGroupRef.current) return;

      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      petGroupRef.current.rotation.y += deltaX * 0.01;
      petGroupRef.current.rotation.x += deltaY * 0.01;

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
      setAutoRotate(true);
    };

    const onWheel = (e: WheelEvent) => {
      if (!cameraRef.current) return;
      e.preventDefault();
      cameraRef.current.position.z += e.deltaY * 0.01;
      cameraRef.current.position.z = Math.max(3, Math.min(8, cameraRef.current.position.z));
    };

    containerRef.current.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    containerRef.current.addEventListener('wheel', onWheel, { passive: false });

    // 动画循环
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      if (petGroupRef.current && autoRotate) {
        petGroupRef.current.rotation.y += 0.005;
      }

      // 宠物呼吸动画
      if (petGroupRef.current) {
        const time = Date.now() * 0.001;
        petGroupRef.current.position.y = Math.sin(time * 2) * 0.05;
      }

      renderer.render(scene, camera);
    };

    animate();
    setIsLoaded(true);

    // 清理函数
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      
      if (containerRef.current) {
        containerRef.current.removeEventListener('mousedown', onMouseDown);
        containerRef.current.removeEventListener('wheel', onWheel);
      }
      
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (renderer.domElement && containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      renderer.dispose();
      scene.clear();
    };
  }, [species]);

  // 应用装扮
  useEffect(() => {
    if (!outfitGroupRef.current) return;
    applyOutfit(outfit);
  }, [outfit]);

  // 创建宠物模型
  const createPetModel = (species: 'dog' | 'cat'): THREE.Group => {
    const petGroup = new THREE.Group();

    // 根据物种选择颜色
    const bodyColor = species === 'dog' ? 0xD2B48C : 0xFFA500;

    // 身体
    const bodyGeometry = new THREE.CapsuleGeometry(0.4, 0.8, 4, 8);
    const bodyMaterial = new THREE.MeshStandardMaterial({
      color: bodyColor,
      roughness: 0.7,
      metalness: 0.1
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.y = 0;
    body.castShadow = true;
    body.receiveShadow = true;
    petGroup.add(body);

    // 头部
    const headGeometry = species === 'dog' 
      ? new THREE.BoxGeometry(0.6, 0.5, 0.5)
      : new THREE.SphereGeometry(0.35, 16, 16);
    const headMaterial = new THREE.MeshStandardMaterial({
      color: bodyColor,
      roughness: 0.7,
      metalness: 0.1
    });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    head.position.set(0, 0.6, 0.35);
    head.castShadow = true;
    petGroup.add(head);

    // 眼睛
    const eyeGeometry = new THREE.SphereGeometry(0.08, 16, 16);
    const eyeMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 });
    
    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    leftEye.position.set(-0.15, 0.65, 0.6);
    petGroup.add(leftEye);
    
    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    rightEye.position.set(0.15, 0.65, 0.6);
    petGroup.add(rightEye);

    // 鼻子
    const noseGeometry = new THREE.SphereGeometry(0.06, 16, 16);
    const noseMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 });
    const nose = new THREE.Mesh(noseGeometry, noseMaterial);
    nose.position.set(0, 0.55, 0.7);
    petGroup.add(nose);

    // 耳朵
    if (species === 'dog') {
      const earGeometry = new THREE.CapsuleGeometry(0.1, 0.2, 4, 8);
      const earMaterial = new THREE.MeshStandardMaterial({
        color: bodyColor,
        roughness: 0.7
      });

      const leftEar = new THREE.Mesh(earGeometry, earMaterial);
      leftEar.position.set(-0.25, 0.85, 0);
      leftEar.rotation.z = Math.PI / 4;
      leftEar.rotation.x = -Math.PI / 6;
      petGroup.add(leftEar);

      const rightEar = new THREE.Mesh(earGeometry, earMaterial);
      rightEar.position.set(0.25, 0.85, 0);
      rightEar.rotation.z = -Math.PI / 4;
      rightEar.rotation.x = -Math.PI / 6;
      petGroup.add(rightEar);
    } else {
      // 猫耳朵 - 三角形
      const earShape = new THREE.Shape();
      earShape.moveTo(0, 0.2);
      earShape.lineTo(0.15, 0);
      earShape.lineTo(0, -0.1);
      earShape.lineTo(-0.15, 0);
      earShape.lineTo(0, 0.2);

      const earGeometry = new THREE.ExtrudeGeometry(earShape, {
        depth: 0.05,
        bevelEnabled: false
      });
      const earMaterial = new THREE.MeshStandardMaterial({
        color: bodyColor,
        roughness: 0.7
      });

      const leftEar = new THREE.Mesh(earGeometry, earMaterial);
      leftEar.position.set(-0.3, 0.9, 0);
      leftEar.rotation.x = Math.PI / 2;
      petGroup.add(leftEar);

      const rightEar = new THREE.Mesh(earGeometry, earMaterial);
      rightEar.position.set(0.3, 0.9, 0);
      rightEar.rotation.x = Math.PI / 2;
      petGroup.add(rightEar);
    }

    // 尾巴
    const tailCurve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(0, -0.2, -0.4),
      new THREE.Vector3(0, -0.1, -0.7),
      new THREE.Vector3(0, 0.1, -0.9)
    );
    const tailGeometry = new THREE.TubeGeometry(tailCurve, 20, 0.05, 8, false);
    const tailMaterial = new THREE.MeshStandardMaterial({
      color: bodyColor,
      roughness: 0.7
    });
    const tail = new THREE.Mesh(tailGeometry, tailMaterial);
    tail.castShadow = true;
    petGroup.add(tail);

    // 四肢
    const legGeometry = new THREE.CylinderGeometry(0.08, 0.06, 0.4, 8);
    const legMaterial = new THREE.MeshStandardMaterial({
      color: bodyColor,
      roughness: 0.7
    });

    const frontLeftLeg = new THREE.Mesh(legGeometry, legMaterial);
    frontLeftLeg.position.set(-0.2, -0.6, 0.2);
    frontLeftLeg.castShadow = true;
    petGroup.add(frontLeftLeg);

    const frontRightLeg = new THREE.Mesh(legGeometry, legMaterial);
    frontRightLeg.position.set(0.2, -0.6, 0.2);
    frontRightLeg.castShadow = true;
    petGroup.add(frontRightLeg);

    const backLeftLeg = new THREE.Mesh(legGeometry, legMaterial);
    backLeftLeg.position.set(-0.2, -0.6, -0.2);
    backLeftLeg.castShadow = true;
    petGroup.add(backLeftLeg);

    const backRightLeg = new THREE.Mesh(legGeometry, legMaterial);
    backRightLeg.position.set(0.2, -0.6, -0.2);
    backRightLeg.castShadow = true;
    petGroup.add(backRightLeg);

    // 脚掌
    const pawGeometry = new THREE.CapsuleGeometry(0.08, 0.1, 4, 8);
    const pawMaterial = new THREE.MeshStandardMaterial({
      color: 0x8B4513,
      roughness: 0.8
    });

    const pawPositions: [number, number, number][] = [
      [-0.2, -0.85, 0.2],
      [0.2, -0.85, 0.2],
      [-0.2, -0.85, -0.2],
      [0.2, -0.85, -0.2]
    ];

    pawPositions.forEach(pos => {
      const paw = new THREE.Mesh(pawGeometry, pawMaterial);
      paw.position.set(pos[0], pos[1], pos[2]);
      paw.castShadow = true;
      petGroup.add(paw);
    });

    return petGroup;
  };

  // 应用装扮
  const applyOutfit = (outfit: Pet3DViewerProps['outfit']) => {
    if (!outfitGroupRef.current) return;

    // 清除之前的装扮
    while (outfitGroupRef.current.children.length > 0) {
      outfitGroupRef.current.remove(outfitGroupRef.current.children[0]);
    }

    if (outfit.id === 'none') return;

    const outfitColor = new THREE.Color(outfit.color);

    switch (outfit.category) {
      case '头饰':
        createHat(outfitColor);
        break;
      case '服装':
        createClothing(outfitColor);
        break;
      case '配饰':
        createAccessory(outfitColor);
        break;
      case '全套':
        createFullOutfit(outfitColor);
        break;
    }
  };

  // 创建帽子
  const createHat = (color: THREE.Color) => {
    const hatGroup = new THREE.Group();

    // 帽子主体
    const hatGeometry = new THREE.CylinderGeometry(0.35, 0.45, 0.2, 16);
    const hatMaterial = new THREE.MeshStandardMaterial({
      color: color,
      roughness: 0.6
    });
    const hat = new THREE.Mesh(hatGeometry, hatMaterial);
    hat.position.set(0, 1, 0.35);
    hat.castShadow = true;
    hatGroup.add(hat);

    // 帽檐
    const brimGeometry = new THREE.CylinderGeometry(0.5, 0.5, 0.05, 16);
    const brim = new THREE.Mesh(brimGeometry, hatMaterial);
    brim.position.set(0, 0.9, 0.35);
    brim.castShadow = true;
    hatGroup.add(brim);

    outfitGroupRef.current?.add(hatGroup);
  };

  // 创建服装
  const createClothing = (color: THREE.Color) => {
    const clothingGroup = new THREE.Group();

    // 衣服主体
    const clothingGeometry = new THREE.CylinderGeometry(0.45, 0.5, 0.6, 16);
    const clothingMaterial = new THREE.MeshStandardMaterial({
      color: color,
      roughness: 0.6
    });
    const clothing = new THREE.Mesh(clothingGeometry, clothingMaterial);
    clothing.position.set(0, -0.1, 0);
    clothing.castShadow = true;
    clothingGroup.add(clothing);

    // 袖子
    const sleeveGeometry = new THREE.CylinderGeometry(0.12, 0.1, 0.3, 8);
    
    const leftSleeve = new THREE.Mesh(sleeveGeometry, clothingMaterial);
    leftSleeve.position.set(-0.5, 0.1, 0);
    leftSleeve.rotation.z = Math.PI / 4;
    leftSleeve.castShadow = true;
    clothingGroup.add(leftSleeve);

    const rightSleeve = new THREE.Mesh(sleeveGeometry, clothingMaterial);
    rightSleeve.position.set(0.5, 0.1, 0);
    rightSleeve.rotation.z = -Math.PI / 4;
    rightSleeve.castShadow = true;
    clothingGroup.add(rightSleeve);

    outfitGroupRef.current?.add(clothingGroup);
  };

  // 创建配饰
  const createAccessory = (color: THREE.Color) => {
    const accessoryGroup = new THREE.Group();

    // 项圈
    const collarGeometry = new THREE.TorusGeometry(0.3, 0.05, 8, 16);
    const collarMaterial = new THREE.MeshStandardMaterial({
      color: color,
      roughness: 0.6
    });
    const collar = new THREE.Mesh(collarGeometry, collarMaterial);
    collar.position.set(0, 0.2, 0.35);
    collar.rotation.x = Math.PI / 2;
    collar.castShadow = true;
    accessoryGroup.add(collar);

    // 铃铛
    const bellGeometry = new THREE.SphereGeometry(0.08, 16, 16);
    const bellMaterial = new THREE.MeshStandardMaterial({
      color: 0xFFD700,
      metalness: 0.8,
      roughness: 0.2
    });
    const bell = new THREE.Mesh(bellGeometry, bellMaterial);
    bell.position.set(0, 0.05, 0.35);
    bell.castShadow = true;
    accessoryGroup.add(bell);

    outfitGroupRef.current?.add(accessoryGroup);
  };

  // 创建全套装扮
  const createFullOutfit = (color: THREE.Color) => {
    createHat(color);
    createClothing(color);
    createAccessory(color);
  };

  return (
    <div className={`relative ${className}`}>
      <div 
        ref={containerRef} 
        className="w-full h-full min-h-[400px] bg-gradient-to-br from-sky-100 to-blue-200 rounded-lg overflow-hidden cursor-grab active:cursor-grabbing"
      />
      
      {/* 加载指示器 */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/80">
          <div className="text-gray-500">加载 3D 宠物...</div>
        </div>
      )}

      {/* 控制提示 */}
      {isLoaded && (
        <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-2 rounded-lg text-sm backdrop-blur-sm">
          <div>🖱️ 拖动旋转</div>
          <div>⭕ 滚轮缩放</div>
          <div>✨ 自动旋转</div>
        </div>
      )}
    </div>
  );
}
