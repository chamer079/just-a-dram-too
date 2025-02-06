import NavBar from "../NavBar/NavBar"


const Index = (props) => {
    const getAllWhiskies = props.whiskies.whiskies

    return(
        <main>
            <NavBar />
            <h1>INDEX PAGE</h1>
            <>
                {getAllWhiskies?.map((whisky) => (
                <h2 key={whisky._id}>{whisky.name}</h2>))}
            
            </>
        </main>
    )
}

export default Index