import { createContext, FC, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import { userContext } from './userContext';
import { cartItemType } from '../@Types/cart';
import { getCart, upsertItemToCart } from '../services/api/cart';

type cartContextType = {
    cart: cartItemType[]
    upsertCartItem: (newItem: cartItemType) => void
    getItemQuantity: (itemId: string) => number
    clearCart: () => void
    getCartTotal: () => number
    isLoading: boolean
}

export const cartcontext = createContext<cartContextType>({} as cartContextType)

type cartProviderProps = { children: ReactNode }

export const CartContextProvider: FC<cartProviderProps> = ({ children }) => {
    
    const { user } = useContext(userContext)

    const [cart, setCart] = useState<cartItemType[]>([])

    const [isLoading, setIsLoading] = useState(false)

    const upsertCartItem = async (newItem: cartItemType) => {
        let tmpCart: cartItemType[] = [...cart]

        try {
            if (user)
                await upsertItemToCart(newItem.product._id, newItem.quantity)

            if (newItem.quantity === 0)
                tmpCart = cart.filter(item => item.product._id !== newItem.product._id)
            else {                
                const isItemInCart = cart.findIndex(item => item.product._id === newItem.product._id)
                
                if (isItemInCart === -1)
                    tmpCart.push(newItem)
                else
                    tmpCart = cart.map(item => 
                        item.product._id === newItem.product._id
                        ? {...item, quantity: newItem.quantity}
                        : item
                    )
            }
            setCart(tmpCart)
            localStorage.setItem('cart', JSON.stringify(tmpCart))
        } catch (error) {
            console.log(error)
        }

    }

    const getItemQuantity = (itemId: string) => {
        const item = cart.find(item => item.product._id === itemId)

        return item ? item.quantity : 0
    }

    const clearCart = () => {
        localStorage.removeItem('cart')
        setCart([])
    }

    const getCartTotal = () => {
        return cart.reduce((total, item) => total + (item.quantity * item.product.price), 0)
    }

    const getCartFromLocalStorage = (): cartItemType[] => {
        const cartAsJsonString = localStorage.getItem('cart')

        return cartAsJsonString ? JSON.parse(cartAsJsonString) : []
    }

    // const getCartFromServer = async (): Promise<cartItemType[]> => {
    //     try {
    //         // get cart from server and compare it with the one saved inside localStorage then return a merged result
    //         const serverCart = (await getCart()).reduce((localItems, serverItem) => {
    //             if (!localItems.some(localItem => localItem.product._id === serverItem.product._id))
    //                 localItems.push(serverItem)
    //             return localItems
    //         }, getCartFromLocalStorage())
    //         setIsLoading(false)
    //         return serverCart
    //     } catch (error) {
    //         setIsLoading(false)
    //         return []
    //     }
    // }

    // const mergeLocalAndServerCart = (serverCart: cartItemType[]) => {
    //     return serverCart.reduce((localItems, serverItem) => {
    //         if (!localItems.some(localItem => localItem.product._id === serverItem.product._id))
    //             localItems.push(serverItem)
    //         return localItems
    //     }, getCartFromLocalStorage())
    // }
    const mergeLocalAndServerCart = async (serverCart: cartItemType[]) => {
        const localCart = getCartFromLocalStorage()

        for (let i = 0; i < localCart.length; i++) {
            if (!serverCart.some(serverCartItem => serverCartItem.product._id === localCart[i].product._id)) {
                try {
                    await upsertItemToCart(localCart[i].product._id, localCart[i].quantity)
                    serverCart.push(localCart[i])
                } catch (error) {
                    console.log(error)
                }
            }
        }
        return serverCart
    }

    useEffect(() => {
        const fetchCart = async () => {
            setIsLoading(true)
            try {
                const mergedCart = await mergeLocalAndServerCart(await getCart())
                localStorage.setItem('cart', JSON.stringify(mergedCart))
                setCart(mergedCart)
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false)
            }
        }

        if (user)
            fetchCart()
        else
            setCart(getCartFromLocalStorage())
    }, [user])

    const value = useMemo(() => ({ cart, upsertCartItem, getItemQuantity, clearCart, getCartTotal, isLoading }), [cart])

    return (
        <cartcontext.Provider value={value}>
            { !isLoading && children }
        </cartcontext.Provider>
    )
}