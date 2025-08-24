import React from "react";

function Dashboard({ activeUser }) {
    return(
        <div  style={{border: '1px solid blue'}}>
            Dashboard - {activeUser}
        </div>
    )
}

export default Dashboard;