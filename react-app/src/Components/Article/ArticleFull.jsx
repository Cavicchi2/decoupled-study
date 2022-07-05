import { Link } from "react-router-dom";

function ArticleFull(props) {
    return (
        <Link to=":meme">{props.item.id}</Link>
    );
}

export default ArticleFull;