import { GENRES } from "@/constants/enum/book"

interface PropsType {
    genres: GENRES[]
}

const GenresFilter = ( {genres}: PropsType) => {
    return (
        <div className=" py-5 pl-2 flex flex-col gap-y-3">
        {genres.map((genre, index) => (
            <div key={index} className="flex items-center gap-x-2">
                <input className="w-4 h-4" type="checkbox" name="in stock" />
                <label>{genre}</label><br></br>
            </div>
        ))}
        </div>
    )
}

export default GenresFilter