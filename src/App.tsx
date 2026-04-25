import { PortfolioPage } from "@/components/portfolio/portfolio-page";
import { ThemeProvider } from "@/hooks/theme-provider";

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-ui-theme">
      <PortfolioPage />
    </ThemeProvider>
  );
}
