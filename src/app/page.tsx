"use client";
//THIS IS HOW YOU MAKE HOME PAGE WITH THREEJS IN NEXT
import "../app/App.css"
import {
  RoundedBox,
  ScrollControls,
  Scroll,
  Environment,
  Sparkles,
} from "@react-three/drei";
import { useRef } from "react";
import { useFrame,Canvas } from "@react-three/fiber";
import { Robot } from "../components/Robot";

//https://github.com/pmndrs/drei#shapes

//CONVERT glbfile to jsx ONLINE HERE https://gltf.pmnd.rs/
//NOT WITH gltf shit never fucking worked!!!

function BotPage() {
  return (
    <Canvas>
      <color attach="background" args={["#333333"]} />
      <ambientLight intensity={0.2} />
      <spotLight
        position={[0, 25, 0]}
        angle={1.3}
        penumbra={1}
        castShadow
        intensity={2}
        shadow-bias={-0.0001}
      />
      <Environment preset="warehouse" />

      <ScrollControls pages={3} damping={0.1}>
        {/* Canvas contents in here will *not* scroll, but receive useScroll! */}
        <Robot scale={0.8} />
        <Sparkles size={2} color={"#fff"} scale={[10, 10, 10]} />

        <Scroll>{/* Canvas contents in here will scroll along */}</Scroll>
        <Scroll  html>
        <div className="container">
          <h1
            className="title"
            style={{
              color: "#cdcbca",
              position: "absolute",
              top: `65vh`,
              left: "50%",
              fontSize: "13em",
              transform: `translate(-50%,-50%)`,
            }}
          >
            PHANTOM
          </h1>

          <div className="row" style={{ position: "absolute", top: `132vh` }}>
            <h2>Be a Man of the Future.</h2>
            <p style={{ maxWidth: "400px" }}>
              Featuring a sleek, metallic design inspired by advanced
              technology, this aftershave bottle is as stylish as it is
              functional. But it's not just a pretty face - inside, you'll find
              a nourishing and protective aftershave formula that will leave
              your skin feeling refreshed and hydrated.
            </p>
            <button>Read more</button>
          </div>

          <div className="row" style={{ position: "absolute", top: `230vh` }}>
            <div
              className="col"
              style={{ position: "absolute", right: `40px`, width: "540px" }}
            >
              <h2 style={{ maxWidth: "440px" }}>Tech-Savvy Side</h2>
              <p style={{ maxWidth: "440px" }}>
                Featuring a sleek, metallic design inspired by advanced
                technology, this aftershave bottle is as stylish as it is
                functional. But it's not just a pretty face - inside, you'll
                find a nourishing and protective aftershave formula that will
                leave your skin feeling refreshed and hydrated.
              </p>
              <button>Read more</button>
            </div>
          </div>

          <h2
            style={{
              position: "absolute",
              top: "350vh",
              left: "50%",
              transform: `translate(-50%,-50%)`,
            }}
          >
            Cutting-Edge of Grooming
          </h2>

          <button
            style={{
              position: "absolute",
              top: `590vh`,
              left: "50%",
              transform: `translate(50%,50%)`,
            }}
          >
            Buy now
          </button>
       </div>
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}

export default BotPage;
