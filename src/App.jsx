import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

import { useEffect, useRef } from "react";
import webGLFluidEnhanced from "webgl-fluid-enhanced";

const App = () => {
  const canvasRef = useRef(null);
  const webGLFluidRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    // Initialize the fluid simulation on the canvas
    const simulation = webGLFluidEnhanced.simulation(canvas, {
      SIM_RESOLUTION: 256,
      DENSITY_DISSIPATION: 0.8,
      PRESSURE_ITERATIONS: 30,
      COLOR_PALETTE: ["#61dafb", "#a8dadc", "#457b9d", "#1d3557", "#f1faee"],
    });

    webGLFluidRef.current = simulation;

    console.log("Simulation initialized:", simulation);

    // Define the mouse move handler
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const rect = canvas.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      console.log("Mouse coordinates:", { x, y });

      // Check if the coordinates are within the canvas
      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        // Interact with the fluid simulation using the mouse coordinates
        if (webGLFluidRef.current) {
          console.log("Adding splats:", { x, y });
          webGLFluidRef.current.addSplats([
            { x, y, dx: 0, dy: 0, color: [1, 1, 1] },
          ]);
        }
      }
    };

    // Attach the mouse move event listener to the window
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      <canvas
        ref={canvasRef}
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          zIndex: -1,
          pointerEvents: "none", // Ensure the canvas does not capture mouse events
        }}
      />
      <div
        className="header sticky top-0 overflow-hidden"
        style={{ zIndex: 1 }}
      >
        <Header />
      </div>
      <div className="body-scrollable" style={{ zIndex: 1 }}>
        <Body />
        <Footer />
      </div>
    </div>
  );
};

export default App;
