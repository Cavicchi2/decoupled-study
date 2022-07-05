import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticleFull from "../Components/Node/ArticleFull";

function ArticleFullDisplay() {
    const { id } = useParams();
    const [article, setValue] = useState();

    useEffect(() => {
      const getNodeList = async () => {
        const fetchString = `https://drupal-react.lndo.site/jsonapi/node/article/${id}`; 
        // Retrieve article list.
        const myHeaders = new Headers();
      
        const settings = {
          method: 'GET',
          headers: myHeaders,
          mode: 'cors',
          cache: 'default',
        };
      
        const articleArray = await fetch(fetchString, settings).then(response => response.json()).then(function (data) {
          return data.data;
        });
  
        setValue(articleArray);
      }

      getNodeList();
    }, [id]);

    return !!article ? <ArticleFull item={article} /> : null;
}

export default ArticleFullDisplay;