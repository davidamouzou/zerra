export function OutlineButton({children}) {
    return (
        <button className="border px-6 py-1.5 hover:bg-white/10">{children}</button>
    )
}

export function FillButton({children}) {
    return (
        <button className="bg-black hover:bg-black/80 text-white px-6 py-1.5">{children}</button>
    )
}