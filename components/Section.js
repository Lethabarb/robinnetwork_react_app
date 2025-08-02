export default function Section({children, textColor, bgColor, height = '35rem'}) {
    let text_col = TextColour(textColor)
    let bg_col = BgColour(bgColor)
    let title_col = TitleColour(bgColor)
    return (
        <div className="flex flex-col justify-center items-center w-full py-4">
            <h2 className={title_col + " text-5xl mb-5"} >ABOUT ME</h2>
            <div className={"grid lg:grid-cols-[1fr_2fr] grid-cols-1 grid-rows-[1fr 2fr] h-["+height+"] w-full justify-start py-4 "+bg_col+" " + text_col + " p-5 lg:p-20"}>
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