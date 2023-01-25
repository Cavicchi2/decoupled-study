import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import NodeBlock from './Components/Node/NodeBlock';
import NodeList from './Components/Node/NodeList';

function App() {
  return (
    <section className="App main-section flex flex-col">
      <Header />
      <div className='text-center text-lg py-5'>You can edit nodes in Drupal site and they will be updated here.</div>
      <div className='main-section bg-gray-200 pl-10 pr-10 flex flex-row gap-x-10 m-auto'>
        <NodeBlock type='article'> 
          <NodeList type='article' />
        </NodeBlock>
        <NodeBlock type='page'>
          <NodeList type='page' />
        </NodeBlock>
      </div>
    </section>
  );
}

export default App;
