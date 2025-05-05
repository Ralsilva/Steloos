import { Switch, Route } from "wouter";
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

function Router() {
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
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
