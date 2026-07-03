import HomePage from "./pages/HomePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";

function App() {
  const normalizedPath =
    window.location.pathname.replace(/\/+$/, "") || "/";

  if (normalizedPath === "/privacy-policy") {
    return <PrivacyPolicyPage />;
  }

  return <HomePage />;
}

export default App;