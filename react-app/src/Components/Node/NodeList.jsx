import React, { useEffect, useState } from 'react';
import Article from './Article';

function NodeList() {
  const [value, setValue] = useState([]);

  useEffect(() => {
    const getNodeList = async () => {
      const fetchString = `https://drupal-react.lndo.site/jsonapi/node/article`; 
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
  }, []);

  return (
    <ol className='max-h-80 overflow-auto border-2 border-black text-left px-5'>
      {value.map((item) => {
        return <li key={item.id} className='node-list'>
          <Article item={item} />
        </li>
      })}
    </ol>
  )
}

export default NodeList;