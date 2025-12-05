import "./App.css";
import { ModuleProvider } from "./context/moduleContext.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";

function App() {
  return (
    <>
      <ModuleProvider>
        <AppRoutes/>
      </ModuleProvider>
    </>
  );
}

export default App;
