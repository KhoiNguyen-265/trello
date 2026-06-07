import router from "@/router";
import { RouterProvider } from "react-router";
import { ThemeProvider } from "./components/ThemeProvider";

function App() {
    return (
        <>
            <ThemeProvider defaultTheme="dark" storageKey="board-flow-theme">
                <RouterProvider router={router} />
            </ThemeProvider>
        </>
    );
}

export default App;
