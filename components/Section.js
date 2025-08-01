export default function Section({children, textColor, bgColor}) {
    let text_col = TextColour(textColor)
    let bg_col = BgColour(bgColor)
    let title_col = TitleColour(bgColor)
    return (
        <div className="flex flex-col justify-center items-center w-full py-4">
            <h2 className={title_col + " text-5xl mb-5"} >ABOUT ME</h2>
            <div className={"grid grid-cols-[1fr_2fr] h-[35rem] w-full justify-start py-4 "+bg_col+" " + text_col + " p-20"}>
                {children}
            </div>
        </div>
    )
}

function TextColour(color) {
    if (color == null) {
        return "text-slate-800 dark:text-white"
    } else {
        return color
    }
}
function TitleColour(color) {
    let c = BgColour(color).replace('bg', 'text')
    return c
}
function BgColour(color) {
    if (color == null) {
        return "bg-slate-50 dark:bg-slate-800"
    } else {
        return color
    }
}