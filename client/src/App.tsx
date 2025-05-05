import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Home from "@/pages/home";
import Stories from "@/pages/stories";
import Categories from "@/pages/categories";
import StoryDetails from "@/pages/story-details";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import AdminDashboard from "@/pages/admin";

function Router() {
  const [location] = useLocation();
  const isAdminRoute = location.startsWith('/admin');

  if (isAdminRoute) {
    return (
      <Switch>
        <Route path="/admin" component={AdminDashboard} />
        <Route path="/admin/:tab" component={AdminDashboard} />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/" component={Home} />
      {/* Rotas em português */}
      <Route path="/estorias" component={Stories} />
      <Route path="/categorias" component={Categories} />
      <Route path="/estoria/:id" component={StoryDetails} />
      <Route path="/sobre" component={About} />
      <Route path="/contato" component={Contact} />
      
      {/* Rotas em inglês */}
      <Route path="/stories" component={Stories} />
      <Route path="/categories" component={Categories} />
      <Route path="/story/:id" component={StoryDetails} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [location] = useLocation();
  const isAdminRoute = location.startsWith('/admin');

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="flex flex-col min-h-screen">
          {!isAdminRoute && <Header />}
          <main className={`flex-grow ${isAdminRoute ? 'min-h-screen' : ''}`}>
            <Router />
          </main>
          {!isAdminRoute && <Footer />}
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
