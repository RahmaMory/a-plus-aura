import HomePage from "./pages/HomePage";
import MediaProductionPage from "./pages/MediaProductionPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
function App() {
  const normalizedPath =
    window.location.pathname.replace(/\/+$/, "") || "/";

  if (normalizedPath === "/privacy-policy") {
    return <PrivacyPolicyPage />;
  }

  if (normalizedPath === "/services/media-production") {
    return <MediaProductionPage />;
  }

  return <HomePage />;
}


export default App;