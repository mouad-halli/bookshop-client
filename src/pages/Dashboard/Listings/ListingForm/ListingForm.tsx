import { GENRES, LANGUAGES } from "@/constants/enum/book"
import useListingForm from "./useListingForm"
import { BookType } from "../../../../@Types/book"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { LoaderCircle } from "lucide-react"

interface PropsType {
    addItem?: (item: BookType) => void
    updateItem?: (updatedItem: BookType) => void
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    listing?: BookType
}

const ListingForm = ({
    addItem,
    updateItem,
    listing,
    setIsOpen
}: PropsType) => {

    const {
        form,
        onSubmit,
        isLoading
    } = useListingForm(
        addItem,
        updateItem,
        listing ? true : false,
        listing,
        setIsOpen
    )
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 ">
                <div className="grid sm:grid-cols-2 gap-y-4 gap-x-2">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        className="focus-visible:ring-0"
                                        type="text" placeholder="book title"
                                        disabled={isLoading}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="author"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Author</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        className="focus-visible:ring-0"
                                        type="text" placeholder="book Author"
                                        disabled={isLoading}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="grid grid-cols-2 gap-x-2">
                    <FormField
                        control={form.control}
                        name="genre"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Genre</FormLabel>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    disabled={isLoading}
                                >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select book genre" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {Object.values(GENRES).map((genre, i) => (
                                            <SelectItem key={i} value={genre}>{genre}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="bookLanguage"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Language</FormLabel>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    disabled={isLoading}
                                >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select book language" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {Object.values(LANGUAGES).map((language, i) => (
                                            <SelectItem key={i} value={language}>{language}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="grid grid-cols-2 gap-x-2">
                    <FormField
                        control={form.control}
                        name="year"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Year</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        className="focus-visible:ring-0"
                                        type="number" min={0} placeholder="book year"
                                        onChange={(e) => field.onChange(e.target.valueAsNumber)}
                                        disabled={isLoading}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="price"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Price</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        className="focus-visible:ring-0"
                                        onChange={(e) => field.onChange(e.target.valueAsNumber)}
                                        type="number" min={0.1} step=".01" placeholder="book price"
                                        disabled={isLoading}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="grid grid-cols-2 gap-x-2">
                    <FormField
                        control={form.control}
                        name="stockCount"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Stock Amount</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        className="focus-visible:ring-0 "
                                        type="number" min={0} placeholder="Book available stock"
                                        onChange={(e) => field.onChange(e.target.valueAsNumber)}
                                        disabled={isLoading}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="image"
                        render={({ field: { value, onChange, ...fieldProps  } }) => (
                            <FormItem>
                                <FormLabel>Select Image</FormLabel>
                                <FormControl>
                                    <Input
                                        id="picture" type="file"
                                        {...fieldProps}
                                        onChange={(event) =>
                                            onChange(event.target.files)
                                        }
                                        disabled={isLoading}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Textarea
                                    {...field}
                                    placeholder="write the book description"
                                    className="max-h-60"
                                    disabled={isLoading}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button
                    className="w-full"
                    type="submit"
                    disabled={isLoading || !form.formState.isDirty}
                >
                    { isLoading ?
                        <>
                            <LoaderCircle className=" animate-spin" />
                            submiting ...
                        </>
                        :
                        "Submit"
                    }
                </Button>
            </form>
        </Form>
    )
}

export default ListingForm