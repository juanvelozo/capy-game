"use client";
import React, { Fragment } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export default function Home() {
  const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
    loaderUrl: "build/myunityapp.loader.js",
    dataUrl: "build/myunityapp.data",
    frameworkUrl: "build/myunityapp.framework.js",
    codeUrl: "build/myunityapp.wasm",
  });

  return (
    <Fragment>
      {!isLoaded && (
        <p>Loading Application... {Math.round(loadingProgression * 100)}%</p>
      )}
      <Unity
        unityProvider={unityProvider}
        style={{
          visibility: isLoaded ? "visible" : "hidden",
          width: 800,
          height: 600,
        }}
      />
    </Fragment>
  );
}
