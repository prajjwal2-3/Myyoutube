
import './App.css';
import ResponsiveAppBar from './Header';

function App() {
const apikey="AIzaSyB_bjlIYeeDmGlYNYwoLt7htxHagFCIvzY"
  const youtube = async ()=>{
    try{
      const data= await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&&chart=mostPopular&regionCode=IN&key=${apikey}`);
      const json = await data.json();
      console.log(json)
    }catch(error){
      console.log(error)
    }
  }
  return (
    <div className="App">
       <ResponsiveAppBar/>
        <button className='' onClick={youtube}>click</button>
      
    </div>
  );
}

export default App;
