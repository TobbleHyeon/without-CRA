import React, { useEffect, useRef } from "react";
import { MeshProps, useFrame } from "@react-three/fiber";

const Box = (props: MeshProps): JSX.Element => {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state, delta) => {
    ref.current.rotation.x += 1 * delta;
    ref.current.rotation.y += 0.5 * delta;
    ref.current.position.y = Math.sin(state.clock.getElapsedTime());
    // ref.current.position.y = Math.sin(state.clock.getElapsedTime()) / 2;
  });

  console.log(ref);

  return (
    <mesh {...props} ref={ref}>
      <boxGeometry />
      <meshBasicMaterial color={0x00ff00} wireframe />
    </mesh>
  );
};

export default Box;
