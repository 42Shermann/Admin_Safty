import React from 'react'



import "./Alltaskdetail.css";

const Alltaskdetail = () => {
    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="userContainer">
                            <div className="userShow">
                                <div className="userShowTop">
                                    <img
                                        src="https://i.pinimg.com/564x/c9/d5/5d/c9d55d178fadeeb702ee7dfd4b751b6b.jpg"
                                        alt=""
                                        className="userShowImg"
                                    />
                                </div>
                                <div className="userShowTopTitle">
                                    <span className="userShowUsername">Task(Topic)</span>
                                    <span className="userShowUserTitle">Description</span>
                                </div>
                                <div className="userTitleContainer">
                                    <button className="button-status" type="submit">Complete</button>
                                    <button className="button-status1" type="submit">In-Progress</button>
                                    <button className="button-status2" type="submit">In-Complete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    )  
}

export default Alltaskdetail
