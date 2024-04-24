import { useRouteError } from "react-router-dom";

const Error = () =>{

    const arr = useRouteError();
    console.log(arr)

    return(
        <div>
            <h2>
                An Error occured,something went wrong🤔!!!.
            </h2>
            <h2>{arr.status}</h2>
            <h2>{arr.statusText}</h2>
        </div>
    )
}

export default Error;

