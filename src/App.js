import logo from './logo.svg';
import './App.css';
import Navbar from './comp/Navbar';
import Left from './comp/Left';
import Upar from './comp/Upar';
import Card from './comp/Card';
import vid1 from './comp/Face 2 Face-Khan Bhaini www.DjPunjab.Video.mp4';
import vid2 from './comp/Nimm Thalle-Jordan Sandhu www.DjPunjab.Video.mp4';
function App() {
var a=[{
  Name:"so high",
  path:vid1
  },
  {
    Name:"295",
    path:vid2},
  {
      Name:"so ",
      path:vid1},
      {
        Name:" high",
        path:vid2},
        {
          Name:"so high",
          path:vid1
          },
          {
            Name:"295",
            path:vid2},
          {
              Name:"so ",
              path:vid1},
              {
                Name:"295",
                path:vid2},
              {
                  Name:"so ",
                  path:vid1},
        
]
  return (
  <>
  <Navbar/>
  <div className='o'> 
   <div className='i'>
  <Left/>
  </div>
   <div className='i'> 
   <Upar/>
  <Card var s={a}/>
  </div>
  </div>
  </>
  );
}

export default App;
