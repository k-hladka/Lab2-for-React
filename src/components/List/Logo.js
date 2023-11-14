export function Logo(props) {
    const {title} = props;
    let firstLetter = title.substring(0, 1).toUpperCase();

    return (
        <div className="LogoDiv" style={{backgroundColor: randomColor()}}>
            <span>{firstLetter}</span>
        </div>
    );
}

function randomColor() {
    let rgb = new Array(3)
        .fill(1)
        .map(() => Math.round((Math.random() * 255) + 1));
    return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0.5)`;
}