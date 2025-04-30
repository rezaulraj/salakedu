import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Layout from "./pages/components/Layout";
import HomePage from "./pages/home/HomePage";
import Services from "./pages/sevices/Services";
import Contact from "./pages/contact/Contact";

NProgress.configure({
  minimum: 0.3,
  easing: "ease",
  speed: 800,
  showSpinner: false,
  trickleSpeed: 200,
});

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleStart = () => NProgress.start();
    const handleComplete = () => {
      NProgress.done();
      setIsLoading(false);
    };

    handleStart();
    const timer = setTimeout(handleComplete, 2000);

    return () => {
      clearTimeout(timer);
      NProgress.done();
    };
  }, []);

  useEffect(() => {
    NProgress.start();
    const timer = setTimeout(() => NProgress.done(), 500);
    return () => clearTimeout(timer);
  }, [location]);

  if (isLoading) {
    return (
      <div className="w-full h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-64 h-1 bg-gray-200 rounded-full mt-8 mx-auto overflow-hidden">
            <div
              className="h-full bg-blue-500 transition-all duration-300 ease-out"
              style={{ width: `${NProgress.status * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Routes location={location} key={location.key}>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
