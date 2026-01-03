import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Main } from './components/Homepage/Main.jsx';
import { DocsPage } from './components/Docs/Docs.jsx';
import { SidebarProvider } from "./context/SidebarContext.jsx";
import { DocsArchitecture } from './components/Docs/pages/DocsArchitecture.jsx';
import { ComponentLibrary } from './components/Docs/pages/ComponentLibrary.jsx';
import { ComponentDetail } from './components/Docs/pages/ComponentDetail.jsx';
function App() {

  return (
    <SidebarProvider>
    <Router basename="/signal-ui">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/docs" element={<DocsPage />} />
        <Route path="/docs/architecture" element={<DocsArchitecture />} />
        <Route path="/docs/components" element={<ComponentLibrary />} />
        <Route path="/docs/components/:componentName" element={<ComponentDetail />} />
      </Routes>
    </Router>
    </SidebarProvider>
  );
}

export default App;