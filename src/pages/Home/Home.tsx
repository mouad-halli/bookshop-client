import OneItemCarousel from "./OneBookPerViewCarousel";
import GenresNavigation from "./DiscoverGenresNavigation";
import MultipleItemsCarousel from "./MultipleItemsCarousel";
import { useEffect, useState } from "react";
import { getSellers } from "../../services/api/user";
import { userType } from "../../@Types/user";

const Home = () => {

    const [sellers, setSellers] = useState<userType[]>([])

    useEffect(() => {
        const fetchSellers = async () => {
            try {
                const sellersLimit = 6
                const booksLimit = 12

                const fetchedSellers = await getSellers(sellersLimit, booksLimit)
                setSellers(fetchedSellers)
            } catch (error) {
                console.log(error)
            }
        }
    
        fetchSellers()
    }, [])

    return (
        <main className="min-h-[64dvh] dark:bg-neutral-900  px-4 flex justify-center">
            <div className="w-full max-w-[75rem] mt-16">
                <section className=" w-full flex justify-center items-center bg-slate-100 dark:bg-slate-400 dark:bg- mb-24 rounded-xl">
                    <OneItemCarousel />
                </section>
                <section className=" font-accent font-medium w-full flex items-end justify-evenly mb-24">
                    <GenresNavigation />
                </section>
                <section className="w-full mx-auto flex flex-col items-center gap-y-24 mb-24">
                    {sellers.map(seller => (
                        <MultipleItemsCarousel key={seller._id} seller={seller} />
                    ))}
                </section>
            </div>
        </main>
    )
}

export default Home