import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import { LanguageProvider } from './components/Context/LanguageContext';
import EntireApp from './components/EntireApp';
import Confidentiality from './components/confidentiality/Confidentiality';
import BarLoader from 'react-spinners/BarLoader';
import Error from './components/error/Error';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
        setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <BarLoader
          loading={loading}
          size={800}
          width={200}
          color="white"
          aria-label="Loading Spinner"
          data-testid="loader"
          speedMultiplier={1}
        />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<EntireApp />} />
          <Route path="/confidentiality" element={<Confidentiality />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
