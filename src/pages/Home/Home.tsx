import OneBookPerViewCarousel from "./OneBookPerViewCarousel";
import DiscoverGenresNavigation from "./DiscoverGenresNavigation";
import MultipleBooksPerViewCarousel from "./MultipleBooksPerViewCarousel";

const Home = () => {

    return (
        <main className="min-h-[64dvh] px-3 lg:px-24">
            <section className=" w-full h-[60dvh] flex justify-center items-center bg-slate-100 mb-24">
                <OneBookPerViewCarousel />
            </section>
            <section className=" w-full flex items-end justify-evenly mb-24">
                <DiscoverGenresNavigation />
            </section>
            <section className="w-5/6 mx-auto flex flex-col items-center gap-y-24 mb-24">
                <MultipleBooksPerViewCarousel />
                <MultipleBooksPerViewCarousel />
                <MultipleBooksPerViewCarousel />
            </section>
        </main>
    )
}

export default Home