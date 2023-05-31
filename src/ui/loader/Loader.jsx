import Spinner from "../spinner/Spinner"


export const Loader = () => {

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <Spinner size = "2" />
        </div>
    )
}