


const Index = (props) => {
    console.log(props.whiskies)

    return(
        <main>
            <h1>INDEX PAGE</h1>
            <>
            {props.whiskies.map((whisky) => (
                <p key={whisky._id}>{whisky.name} </p>
            ))}
            </>
        </main>
    )
}

export default Index