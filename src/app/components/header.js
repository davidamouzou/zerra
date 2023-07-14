import Link from "next/link";
import Button, {OutlineButton} from "@/app/components/button";

export default function Header() {
    return (<header className="flex text-white z-50 justify-between px-24 py-8 items-center fixed w-full">
            <h1 className="font-bold text-2xl">Zerra</h1>
            <nav>
                <ul className="flex space-x-8">
                    <li><Link href="">Home</Link></li>
                    <li><Link href="">Roome</Link></li>
                    <li><Link href="">Facilities</Link></li>
                    <li><Link href="">Offers</Link></li>
                    <li><Link href="">Wedding</Link></li>
                    <li><Link href="">About</Link></li>
                    <li><Link href="">Blog</Link></li>
                </ul>
            </nav>
            <OutlineButton>Contact   🡥</OutlineButton>
        </header>
    )
}