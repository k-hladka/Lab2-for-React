export function Logo(props) {
    const {backgroundImage} = props;
    return (
        <div className="LogoDiv" style={{backgroundImage: 'url(' + backgroundImage + ')'}}>
        </div>
    );
}
