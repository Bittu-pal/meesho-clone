import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Products({pro}) {
    // console.log(pro);

   const finnalporduct= pro.map((items)=>{
    // console.log(items);
            return(
              <div className="   text-center  pb-4 m-3 border  " style={{borderRadius:15, width:250}} >
             
              <img className="" src={items.image_link} alt="" style={{width:250}}></img>
              <h5> {items.name}</h5>




                <img className="" src={items.thumbnail} alt="" style={{width:250, }}></img>
                <h5 style={{color: "rgb(139, 139, 138)"}}>{items.title}</h5>
                <h5>₹{items.price} <span style={{color:"rgb(3,141,99)"}}>{items.discountPercentage}% Off</span></h5>
                <p style={{fontWeight:'bold', color:"rgb(139,139,138)"}}>Free Delivery</p>
                <span style={{backgroundColor:"rgb(3, 141, 99)", padding:5, borderRadius:10 }}>  {items.rating} <FontAwesomeIcon icon={faStar} color="white"/></span>
                <p>  </p>
                

                </div>
            )
        })

  return (
    <div className=" d-flex flex-wrap" >
        {finnalporduct}  
        
        </div>
  )
}
