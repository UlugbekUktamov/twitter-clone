import "./AppHeader.css"

function AppHeader({ postIndex, likeIndex }) {
    return (
        <div className="app-header d-flex">
            <h1>Ulug'bek O'ktamov</h1>
            <h5><span style={{ color: "#ccd" }}>{postIndex} posts, like {likeIndex}</span></h5>
        </div >
    );
}

export default AppHeader;