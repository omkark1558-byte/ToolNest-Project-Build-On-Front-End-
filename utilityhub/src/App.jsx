import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";
import Background from "./components/Background/Background";
import "./styles/common.css";


function App() {
  return (
    <>
      <Background />
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;