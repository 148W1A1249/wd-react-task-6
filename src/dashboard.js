import Card from "./dashboard_card";

function Dashboard(){
    let dashboard_card = [
        {
            label:"Earnings (Monthly)",
            type: "text",
            value: "$40,000",
            fontIcon:"fas fa-calendar",
            color:"primary",
        },
        {
            label:"Earnings (Annual)",
            type: "text",
            value: "$215,000",
            fontIcon:"fas fa-dollar-sign",
            color:"success",
        },
        {
            label:"Tasks",
            type: "progress",
            value: "50%",
            fontIcon:"fas fa-clipboard-list",
            color:"info",
        },
        {
            label:"Pending Requests",
            type: "text",
            value: "18",
            fontIcon:"fas fa-comments",
            color:"warning",
        },
    ]
return <>
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
    </div>
    <div className="row">
       { 
             dashboard_card.map((obj)=>{
                return <Card data={obj}></Card>
            })
        }
    </div>
</>;
}
export default Dashboard;