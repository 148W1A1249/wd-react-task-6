
function Card(props){
    return <>
        <div className="col-xl-3 col-md-6 mb-4">
            <div className={`card border-left-${props.data.color} shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`text-xs font-weight-bold text-${props.data.color} text-uppercase mb-1`}>
                                {props.data.label}</div>                            
                            {
                                (()=>{
                                    if(props.data.type==="progress"){
                                        return<>
                                            <div class="row no-gutters align-items-center">
                                                <div class="col-auto">
                                                    <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                                                </div>
                                                <div class="col">
                                                    <div class="progress progress-sm mr-2">
                                                        <div class="progress-bar bg-info" role="progressbar"
                                                            style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0"
                                                            aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>;
                                    }
                                    if(props.data.type==="text"){
                                        return<>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">{props.data.value}</div>
                                        </>;
                                    }
                                })()
                            }
                    </div>
                        <div className="col-auto">
                            <i className={`${props.data.fontIcon} fa-2x text-gray-300`}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>;
}

export default Card;