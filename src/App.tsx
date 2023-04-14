import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import Box from "./components/Box";

const App = (): JSX.Element => {
  return (
    <Canvas camera={{ position: [0, 0, 2] }}>
      <Box position={[-0.75, 0, 0]} name="A" wireframe={false} />
      <Box position={[0.75, 0, 0]} name="B" wireframe={true} />
    </Canvas>
  );
};

export default App;
