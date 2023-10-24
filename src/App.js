import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Routes from "./routes/Routes";
import AuthProvider from "./Providers/AuthProvider";



function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;