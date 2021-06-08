import React from 'react';
// import '/'

const Form = (props) => {
    return (

            <div className="container">
            <div>{props.error ? error():null}</div>
            <form id="form" onSubmit={props.loadweather}>
                <div className="row">
                    <div className="col-md-3 offset-md-2">
                        <input type="text" className="form-control" name="city" autoComplete="off" placeholder="city"/>
                    </div>
                        <div className="col-md-3">
                            <input type="text" className="form-control" name="country" autoComplete="off" placeholder="country"/></div>
                        <div className="col-md-3">
                            <div className="col-md-3 mt-md-0 text-md-left">
                                <button className="btn btn-warning">Weather</button>
                            </div>
                        </div>
                    </div>
                </form>
               
            </div>

    )
}

const error = () =>{
    return(
        <div className='alert alert-danger mx-5' role="alert">
            Please enter a city and country
        </div>
    )
}



export default Form;
