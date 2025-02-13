import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { UserContextProvider } from './Contexts/userContext.tsx'
import { CartContextProvider } from './Contexts/cartContext.tsx'
import { ThemeProvider } from './Contexts/themeContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <UserContextProvider>
            <CartContextProvider>
                <App />
            </CartContextProvider>
        </UserContextProvider>
    </ThemeProvider>
)
