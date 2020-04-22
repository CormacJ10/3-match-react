import React from "react";
import Unity, { UnityContent } from "react-unity-webgl";
 
const unityContent = new UnityContent(
  "Build/Web.json",
  "Build/UnityLoader.js"
);
 
const App = () => {
  return <Unity unityContent={unityContent} />;
}