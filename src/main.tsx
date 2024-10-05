import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { UserContextProvider } from './Contexts/userContext.tsx'
import { CartContextProvider } from './Contexts/cartContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <UserContextProvider>
        <CartContextProvider>
            <App />
        </CartContextProvider>
    </UserContextProvider>
)
