import { MeshProps } from "@react-three/fiber";
import React from "react";

const Box = (props: MeshProps): JSX.Element => {
  console.log(props);
  return (
    <mesh position={props.position} name={props.name}>
      <boxGeometry />
      <meshBasicMaterial color={0x00ff00} wireframe={props.wireframe} />
    </mesh>
  );
};

export default Box;
