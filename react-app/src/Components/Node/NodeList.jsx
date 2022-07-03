import React from 'react';
import Article from './Article';

class NodeList extends React.Component {
  constructor() {
    super();
    this.state = this.getNodeList();
  }

  getNodeList = async() => {
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
    });;
  
    this.setState({
      Nodes: articleArray
    });
  }

  render() {
    return (
    <ol className='max-h-80 overflow-auto border-2 border-black text-left px-5'>
      {this.state.Nodes?.map((item, i) => {
        return <li key={i} className='node-list'>
          <Article item={item} />
        </li>
      })}
    </ol>);
  }
}

export default NodeList;