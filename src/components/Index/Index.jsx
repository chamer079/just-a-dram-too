


const Index = (props) => {
    console.log(props.whiskies)

    return(
        <main>
            <h1>INDEX PAGE</h1>
            <>

            {props.whiskies && props.whiskies.links > 0 ? (
                props.whiskies.map((whisky) => (
                <p key={whisky._id}>{whisky.name} </p>
            ))
            ) : (<h2>Start your journey. Add a whisky!</h2>)
       }
            </>
        </main>
    )
}

export default Index