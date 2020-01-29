import React, { useState, ChangeEvent } from "react"


interface PropsHome {
    Title: string,
    Contents: string,
    Category: string,
    Price: number
}


const Home = (props: { TitlePage: string }) => {

    const [data, setData] = useState<PropsHome>({ Title: "", Contents: "", Category: "", Price: 0 })

    const handleSubmit = () => {
        alert(JSON.stringify(data))
    }


    return (
        <div>
            <h2>{props.TitlePage}</h2>
            <label>Title</label><br />
            <input
                type="text"
                onChange={e => setData({
                    ...data,
                    Title: e.target.value
                })}
                defaultValue={data.Title} />
            <br />
            <label>Konten</label><br />
            <textarea
                onChange={e => setData({
                    ...data,
                    Contents: e.target.value
                })} >{data.Contents}</textarea><br />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Home

