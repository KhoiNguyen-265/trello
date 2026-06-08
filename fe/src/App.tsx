import { ThemeProvider } from "@/components/ThemeProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import router from "@/router";
import { RouterProvider } from "react-router";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="flowboard-theme">
        <TooltipProvider>
          <RouterProvider router={router} />
        </TooltipProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
