// src/App.tsx
import React, { useEffect } from "react";
import PreviewCanvas from "./components/PreviewCanvas";
import Timeline from "./components/Timeline";
import BottomToolbar from "./components/BottomToolbar";
import ExportSheet from "./components/ExportSheet";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { useStore } from "./store/useStore";

const App: React.FC = () => {
  // Example: detect capabilities on mount
  const { setCapabilities } = useStore();
  useEffect(() => {
    import("./lib/capabilities").then((mod) => {
      const caps = mod.detectCapabilities();
      setCapabilities(caps);
    });
  }, []);

  return (
    <ErrorBoundary>
      <div className="flex flex-col h-[100dvh] overflow-hidden bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {/* Top bar */}
        <header className="flex items-center justify-between px-2 py-1 border-b border-gray-300 dark:border-gray-700">
          <button aria-label="Back / New" className="p-2">
            🔙
          </button>
          <div className="flex space-x-2">
            <button aria-label="Undo" className="p-2">↺</button>
            <button aria-label="Redo" className="p-2">↻</button>
          </div>
          <button className="bg-blue-600 text-white px-3 py-1 rounded">Export</button>
        </header>
        {/* Preview canvas */}
        <main className="flex-1 bg-black flex items-center justify-center relative">
          <PreviewCanvas />
        </main>
        {/* Playback controls */}
        <div className="flex items-center justify-center px-2 py-1 text-sm border-t border-gray-300 dark:border-gray-700">
          <button aria-label="Play/Pause" className="p-2">▶️</button>
          <span className="mx-2">00:00 / 00:00</span>
          <button aria-label="Fullscreen" className="p-2">⛶</button>
        </div>
        {/* Timeline */}
        <Timeline />
        {/* Bottom toolbar */}
        <BottomToolbar />
        {/* Export sheet – hidden by default, shown via state */}
        <ExportSheet />
      </div>
    </ErrorBoundary>
  );
};

export default App;
