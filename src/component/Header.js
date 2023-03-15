import React from "react";
import { FaUserCircle } from "react-icons/fa";
// import FontAwesomeIcon from 'font-awesome/fa-solid/fa-circle-user'

const Header = () => {
    return (
         <div>

{/* <div className="row"> 
<div  className="col-sm-4 bg-danger col-lg-12">
dffd
</div>
<div  className="col-sm-4 bg-light col-lg-12">
afdAF
</div>

<div  className="col-sm-4 bg-dark col-lg-12">
afasf
</div>



</div> */}
            <nav className="navbar navbar-expand-lg bg-light  ">
                <div className="container-fluid ">
 
                     <a className="navbar-brand " href="#">
                         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFdD2Boi3jt_XLBGesRN0inV-tOVDhy9N1OPJL_DK-lF_Q81-nEk1-FDrZR6bBcapsoI0&usqp=CAU" 
                            alt="Bootstrap" 
                             style={{height: "38px",width: "53px",borderRadius: "50%"}}/>
                      </a>
                   <div className="collapse navbar-collapse " id="navbarSupportedContent">
                           <ul className="navbar-nav me-auto mb-2 mb-lg-0 col-3">
                              <li className="nav-item ">
                                 <a className="nav-link active " aria-current="page" href="#">Number</a>
                              </li>
                              <li className="nav-item">
                                 <a className="nav-link active " aria-current="page" href="#">Email</a>
                               </li>
                               <li className="nav-item dropdown">
                               <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"
                               style={{height: "38px",width: "60px",marginLeft: "2600%"}}>
                                <FaUserCircle style={{height: "29px",width: "39px"}}/>  
                               </a>
                               <ul className="dropdown-menu"style={{marginLeft: "2507%"}}>
                               <li><a className="dropdown-item" href="/">Profile</a></li>
                                 <li><a className="dropdown-item" href="/">Logout</a></li>
                               </ul>
                               </li>
                            </ul>
                            
                     </div> 
                      
                </div>
            </nav>
         </div>


          
    )
}
export default Header;
{/* <FontAwesomeIcon icon="fa-solid fa-circle-user" /> */}
{/* <nav classnameName="navbar navbar-expand-lg bg-light">
        //         <div classnameName="container-fluid">
                
        //             <a classnameName="navbar-brand" href="#">Exten Labs</a>
        //             <button classnameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //                 <span classnameName="navbar-toggler-icon"></span>
        //             </button>
        //             <div classnameName="collapse navbar-collapse" id="navbarSupportedContent">
        //                 <ul classnameName="navbar-nav me-auto mb-2 mb-lg-0">
        //                     <li classnameName="nav-item">
        //                         <a classnameName="nav-link active" aria-current="page" href="#">Number</a>
        //                     </li>
        //                     <li classnameName="nav-item">
        //                         <a classnameName="nav-link" href="#">Email</a>
        //                     </li>
        //                     <li classnameName="nav-item dropdown">
        //                         <a classnameName="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                             Dropdown
        //                         </a>
        //                         <ul classnameName="dropdown-menu">
        //                             <li><a classnameName="dropdown-item" href="#">Action</a></li>
        //                             <li><a classnameName="dropdown-item" href="#">Another action</a></li>
                                    
        //                         </ul>
        //                     </li>
                            
        //                 </ul>
                        
        //             </div>
        //         </div>
        //     </nav> */}
        // 
