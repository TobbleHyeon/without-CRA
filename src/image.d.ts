/**
 * tsconfig.json내 typeRoots와 이어지는 파일, 특정 파일이나 타입을 인식 못할 시 인식 지원처리.
 * "typeRoots": ["node_modules/@types", "src/types"],
 * */

declare module "*.jpg";
declare module "*.jpeg";
declare module "*.png";
declare module "*.gif";
