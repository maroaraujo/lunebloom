import { useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import TryingToConceive from "./pages/TryingToConceive";
import FirstTrimester from "./pages/FirstTrimester";
import SecondTrimester from "./pages/SecondTrimester";
import ThirdTrimester from "./pages/ThirdTrimester";
import Postpartum from "./pages/Postpartum";
import Resources from "./pages/Resources";

function Router() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/trying-to-conceive" component={TryingToConceive} />
      <Route path="/first-trimester" component={FirstTrimester} />
      <Route path="/second-trimester" component={SecondTrimester} />
      <Route path="/third-trimester" component={ThirdTrimester} />
      <Route path="/postpartum" component={Postpartum} />
      <Route path="/resources" component={Resources} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
