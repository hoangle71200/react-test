

function List({ data }) {
    return(
        <ul>
            {data.map(item => <li key={item}>{item}</li>)}
        </ul>
    )
}

function Video20(){
    const chars = ['kiana', 'mei', 'bronya']
    return(
        <div id="wrapper">
            <h1>HI3 Characters</h1>
            <List data={chars}/>
        </div>
    )
}

export default Video20