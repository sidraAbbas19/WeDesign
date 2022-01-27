import React ,{useState} from 'react'
import './FindADesigner.css'
import DesignerData from './DesignerApi'
// import Portfolio from './PortfolioApi';
// import Portfolios from './Portfolios.js';

const uniqueList =[
  "All Catagories:",
  ...new Set(
  DesignerData.map((curElem)=>{
return curElem.category;
})),

];

function FindADesigner() {
    const [data, setData] = useState(DesignerData);
    // const[info , setInfo]=useState(Portfolio);
    const[designerList,setDesignerList]=useState(uniqueList);
    console.log(data);
    // const filterPort=(name)=>{
    //   const updateProfile=  Portfolio.filter((curElem)=>{
    //            return curElem.name==name;
    //   })
    //   setInfo(updateProfile);
    //  };
    const filterItem=(category)=>{
if(category == "All Catagories:"){
  setData(DesignerData); 
  return;
}




const updatedList= DesignerData.filter((curElem)=>{
return curElem.category==category;
});
setData(updatedList);
    };
    return (
        <>
        <div className='findadesigner'>
            <h1>Find a top quality graphic designer to work on your next project.</h1>
        </div>
        <div className='dropdown-divider'> </div>
        {/* <Catagories/> */}
        <div id="containernavbar">
        <nav id="navbar">
          <div id="btn-group">
            {designerList.map((curElem)=>{
              return( 
              <button id='btn-group__item' onClick={()=> filterItem(curElem)}>  {curElem}   </button>
              );
                 })}
            </div>
        </nav>
        </div>
        <section className="main-box--cointainer">
        {data.map((curElem)=>{
          const {name,image,description,starting}=curElem; 
            return(
                <>
            <div className="designers" >
                <div className="box ">
                  <div className="box-body">
                     <h2 className="box-title"> {name}  </h2>
                    <div className="box-description ">
                    <span className="subtle">
                    {description} 
                    </span>
                    </div>
                           
                  </div>
                  <img src={image} alt="images" className="card-media" />
                  <div className="startingPrice ">
                    <div className="startingPrice">
                    <span className="subtle">
                   Starting at 
                    </span>
                    </div>
                    <span className='price'>  {starting} </span>
                    </div>
                  <div className="buttondiv">
                    <a href="/Portfolios" id='viewbutton'className="button button-primary" >
                    View
                    </a>
                    </div>
                   
                    
                </div>
              </div>
              </>
        );
        })}  
        </section>      
        </>
    )
}

export default FindADesigner
