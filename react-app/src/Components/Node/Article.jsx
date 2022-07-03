function Article(props) {
    return (
        <div className="node-list-item article article-item cursor-pointer text-blue-900 underline" id={props.item.id}>
            <div className="article-title">
                <a href={props.item.links.self.href}>{props.item.attributes.title}</a>
            </div>
        </div>
    );
}

export default Article;