//Importing the styles page

//Importing the Components
import Header from './Header'
import Content from './Content';
import Footer from './Footer';
//Declaration of the Application
function App() {
  
  return (
    <div className='Home'>
        <Header author="Naveen Kumar" heading="To - Do Application"/>
        <Content />
        <Footer />
    </div>
);
}

export default App;
