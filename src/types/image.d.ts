/**
 * tsconfig.json내 typeRoots와 이어지는 파일, 특정 파일이나 타입을 인식 못할 시 인식 지원처리.
 * "typeRoots": ["node_modules/@types", "src/types"],
 * */

declare module "*.jpg";
declare module "*.jpeg";
declare module "*.png";
declare module "*.gif";
declare module "*.svg";

// svg URL화, component화 처리.
declare module "*.svg?url" {
  const content: any;
  export default content;
}

declare module "*.svg" {
  import React = require("react");

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

// declare module "*.svg" {
//   import React = require("react");
//   export const ReactComponent: React.FunctionComponent<
//     React.SVGProps<SVGSVGElement>
//   >;
//   const src: string;
//   export default src;
// }
