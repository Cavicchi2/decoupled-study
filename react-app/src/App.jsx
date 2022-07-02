import './App.css';

function App() {
  let articleList = [];

  // Retrieve article list.
  const myHeaders = new Headers();

  const settings = {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default',
  };

  fetch('https://drupal-react.lndo.site/jsonapi/node/article', settings).then(response => response.json()).then(function (data) {
    articleList = data.data;
  });

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
