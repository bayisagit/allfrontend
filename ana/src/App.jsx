import React from "react";
import Baypp from "./component/Baypp"; // Import the Baypp component

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Hello, Bayisa! 🚀</h1>
      <Baypp /> {/* Use the Baypp component here */}
    </div>
  );
}

export default App;
