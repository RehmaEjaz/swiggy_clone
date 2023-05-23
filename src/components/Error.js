import {useRouteError} from "react-router-dom";


const Error = () =>{
    const err = useRouteError();
    const {status,statusText}=err;
    console.log(err);
    return(
        <div>
            <h2>OOps!!!!</h2>
            <h3>Something went wrong</h3>
            <h3>{status + ":" + statusText}</h3>
        </div>
    )
}
export default Error;