function NodeBlock(props) {
    return (
        <div className={`node-block node-container node-${props.type} text-center`}>
            <h2 className="capitalize text-lg font-bold">{ props.type }</h2>
            { props.children }
        </div>
    );
}

export default NodeBlock;