import MyImage from './hasan.jpg';
import'../Styles/Photoframe.css';
function Photoframe() {
    return ( 
        <div>
        <div className='frame'>
            <img className='image' src={MyImage} alt="Hasan"  width="200px" />
        <h1>Hasan Al Mamun</h1>
        </div>
        <div className='Skills'>
           <div>
            <h1>Skills</h1>
           </div>
           <div className='float'>
           <h2>html</h2>
            <h2>CSS</h2>
            <h2>Javascript</h2>
            <h2>React</h2>
           </div>

        </div>

        </div>
     );
}

export default Photoframe;