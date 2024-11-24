"use client";
import React, { Fragment } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export default function Home() {
  const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
    loaderUrl: "./Build/capy-game-build.loader.js",
    dataUrl: "./Build/capy-game-build.data",
    frameworkUrl: "./Build/capy-game-build.framework.js",
    codeUrl: "./Build/capy-game-build.wasm",
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
          width: "100%",
          height: "100%",
        }}
      />
    </Fragment>
  );
}
