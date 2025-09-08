import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

// Import all page components
import HomePage from "@/app/page";
import ProjectsPage from "@/app/projects/page";
import ProjectDetailPage from "@/app/projects/[slug]/page";
import ResearchPage from "@/app/research/page";
import ResearchDetailPage from "@/app/research/[slug]/page";
import OpinionsPage from "@/app/opinions/page";
import PoliticsPage from "@/app/opinions/politics/page";
import InequalityPage from "@/app/opinions/inequality/page";
import CulturalDifferencesPage from "@/app/opinions/cultural-differences/page";
import FriendshipPage from "@/app/opinions/friendship/page";
import PhilosophyPage from "@/app/opinions/philosophy/page";
import IdeasPage from "@/app/ideas/page";
import IdeaDetailPage from "@/app/ideas/[slug]/page";
import ArtPage from "@/app/art/page";
import FaithPage from "@/app/faith/page";
import ExtracurricularsPage from "@/app/extracurriculars/page";
import AboutPage from "@/app/about/page";
import ContactPage from "@/app/contact/page";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/projects" component={ProjectsPage} />
      <Route path="/projects/:slug" component={ProjectDetailPage} />
      <Route path="/research" component={ResearchPage} />
      <Route path="/research/:slug" component={ResearchDetailPage} />
      <Route path="/opinions" component={OpinionsPage} />
      <Route path="/opinions/politics" component={PoliticsPage} />
      <Route path="/opinions/inequality" component={InequalityPage} />
      <Route path="/opinions/cultural-differences" component={CulturalDifferencesPage} />
      <Route path="/opinions/friendship" component={FriendshipPage} />
      <Route path="/opinions/philosophy" component={PhilosophyPage} />
      <Route path="/ideas" component={IdeasPage} />
      <Route path="/ideas/:slug" component={IdeaDetailPage} />
      <Route path="/art" component={ArtPage} />
      <Route path="/faith" component={FaithPage} />
      <Route path="/extracurriculars" component={ExtracurricularsPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
