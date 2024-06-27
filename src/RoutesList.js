import { useParams } from "react-router-dom"

export function Candy() { 
    return(
        <div className="candy">
            <h1>candy RAHHHH</h1>
        </div>
    )
}

export function Cookies() {
    return(
        <div className="cookies">
            <h1>cookies RAHHHH</h1>
        </div>
    )
}

export function Chips() {
    return(
        <div className="chips">
            <h1>CHIPS RAHHHH</h1>
        </div>
    )
}

export function Food(){
    const params = useParams();
    return(
        <div className={params.name}>
            <h1>{params.name} RAHHHHHH</h1>
        </div>
    )
}