import HomePage from "./pages/HomePage";
import MediaProductionPage from "./pages/MediaProductionPage";
import FullMarketingPage from "./pages/FullMarketingPage";
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

  if (normalizedPath === "/services/full-marketing") {
    return <FullMarketingPage />;
  }

  return <HomePage />;
}

export default App;