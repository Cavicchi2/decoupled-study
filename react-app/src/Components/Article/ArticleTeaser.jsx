function Article(props) {
    return (
        <div className="node-list-item article article-item cursor-pointer text-blue-900 underline" id={props.item.id}>
            <div className="article-title">
                <a href={`/view/article/${props.item.id}`}>{props.item.attributes.title}</a>
            </div>
        </div>
    );
}

export default Article;