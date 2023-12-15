import Link from "next/link"


export default function NavBar() {

    return (
        <div
            className="flex justify-center gap-80 p-8 via-red-800 bg-gradient-to-r from-red-400 to-orange-500"
        >

            <Link  className=" text-white-200 font-bold"href="/">Home </Link>

            <Link className="text-white-200 font-bold" href="/store"> Store </Link>

        </div>
    )
}