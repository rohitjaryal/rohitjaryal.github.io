import AppProvider from "./providers/AppProvider.tsx";
import AppRoutes from "./routes";

function App() {

  return (
    <>
      <AppProvider>
        <AppRoutes />
      </AppProvider>

    </>
  )
}

export default App
