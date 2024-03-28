import "./PostLogIn.css" ; 

export default function PostLogIn(){

    return (
        <>
            <div className="mainPage">
                <div className="sideBar">
                    <ul>
                        <li>Profile</li>
                        <li>Create a Pickme</li>
                        <li>Requests</li>
                    </ul>
                </div>
                <div className="pickmeMenu">
                    <h2>whatever</h2>
                    <form className="searchForm">
                        <input type="text" name="from" placeholder="From where"></input>
                        <input type="text" name="to" placeholder="To where"></input>
                        <button>search</button>
                    </form>
                </div>
            </div>
        </>
    )

}