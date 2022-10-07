import Button from "@/Components/Button";
import Checkbox from "@/Components/Checkbox";
import Input from "@/Components/Input";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Head, useForm } from "@inertiajs/inertia-react";

export default function Create({ auth }) {
    const { setData, post, processing, errors } = useForm({
        name: "",
        category: "",
        video_url: "",
        thumbnail: "",
        rating: "",
        is_featured: false,
    });

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "file"
                ? event.target.files[0]
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("admin.dashboard.movie.store"));
    };
    return (
        <Authenticated auth={auth}>
            <Head title="Admin - Insert New Movie" />
            <h1 className="text-xl">Insert New Movie</h1>
            <hr className="my-4" />
            <form onSubmit={submit}>
                <div className="flex justify-center">
                    <div className="w-3/6">
                        <InputLabel
                            forInput="name"
                            value="Name"
                            className="mt-4"
                        />
                        <Input
                            type="text"
                            name="name"
                            variant="primary-outline"
                            handleChange={onHandleChange}
                            placeholder="Enter the name of the movie"
                        />
                        <InputError message={errors.name} className="mt-2" />

                        <InputLabel
                            forInput="category"
                            value="Category"
                            className="mt-4"
                        />
                        <Input
                            type="text"
                            name="category"
                            variant="primary-outline"
                            handleChange={onHandleChange}
                            placeholder="Enter the category of the movie"
                        />
                        <InputError
                            message={errors.category}
                            className="mt-2"
                        />

                        <InputLabel
                            forInput="video_url"
                            value="Video Url"
                            className="mt-4"
                        />
                        <Input
                            type="text"
                            name="video_url"
                            variant="primary-outline"
                            handleChange={onHandleChange}
                            placeholder="Enter the video url of the movie"
                        />
                        <InputError
                            message={errors.video_url}
                            className="mt-2"
                        />

                        <InputLabel
                            forInput="thumbnail"
                            value="Thumbnail"
                            className="mt-4"
                        />
                        <Input
                            type="file"
                            name="thumbnail"
                            variant="primary-outline"
                            handleChange={onHandleChange}
                            placeholder="Insert thumbnail of the movie"
                        />
                        <InputError
                            message={errors.thumbnail}
                            className="mt-2"
                        />

                        <InputLabel
                            forInput="rating"
                            value="Rating"
                            className="mt-4"
                        />
                        <Input
                            type="number"
                            name="rating"
                            variant="primary-outline"
                            handleChange={onHandleChange}
                            placeholder="Enter the rating of the movie"
                        />
                        <InputError message={errors.rating} className="mt-2" />
                        <div className="flex flex-row mt-2 items-center">
                            <InputLabel
                                forInput="is_featured"
                                value="Is Featured"
                                className="mt-2 mr-2"
                            />
                            <Checkbox
                                name="is_featured"
                                handleChange={(e) =>
                                    setData("is_featured", e.target.checked)
                                }
                            />
                        </div>
                        <Button
                            type="submit"
                            className="mt-4"
                            processing={processing}
                        >
                            Save
                        </Button>
                    </div>
                </div>
            </form>
        </Authenticated>
    );
}
