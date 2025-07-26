import { faAngleLeft, faAngleRight, faCartShopping, faSearch, faStar, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap"; // ✅ सही
import Category from "./Category";
import Bagesdata from './data/Bages.json';
import Booksdata from './data/Books.json';
import ChicFlatdata from './data/ChicFlats.json';
import Earingdata from './data/Ear.json';
import Electronicdata from './data/Electronic.json';
import homedecodata from './data/Homedecoration.json';
import jensdata from './data/jeansproduct.json';
import jwellerydata from './data/jwellery.json';
import lehengasdata from './data/lehengas.json';
import menperfumedata from './data/menperfume.json';
import persocaredata from './data/personcare.json';
import sareedata from './data/sarees.json';
import summerdata from './data/sumerDress.json';
import westerndressdata from './data/westerndress.json';
import './extradesign.css';
import allproductdata from './product/allprodut.json';
import womencategorydata from './product/category.json';
import Productcategory from "./Productcategory";
import Products from "./Products";
import Profilemenu from "./Profilemenu";
import './Queries.css';
import './utility.css';


// ma shop btn per kaam ker rha the api sa aur data manga rha the  aur ek state shop2 ma stor ker rha the ok phir shonhown btn ke on click per 

function App() {

  let [hover ,sethover]=useState(false);
  // isme sari category api sa jo aangi to bo isme store hongi ok 
  let [cate,setcate]=useState([]);
  // isme api sa jo prodcut aa rhe h bo isme store honge ok 
  let [pro,setpro]=useState([]);
  // jab hum kisi list per click krenge to bo  is state ma store hoga
  let[filter,setfilter]=useState("");
  // jab hum input ma koi value denge to bo is state ma store hongi
  let [searchpro,setsearchpro]=useState("");
  let [searctext,setsearchtext]=useState("");


const addclass = () => {
  
  sethover(true);

 
};

const removclass=()=>{
  sethover(false);
}


//  women ethnic bale section ma  api ke liye kiya h ok 
let[womencate,setwomnecate]=useState({})


useEffect(()=>{
 setwomnecate(womencategorydata);

},[womencate])



let [fun1,setfun1]=useState(false)
let [fun2,setfun2]=useState(false)
let [fun3,setfun3]=useState(false)
let [fun4,setfun4]=useState(false)
let [fun5,setfun5]=useState(false)
let [fun6,setfun6]=useState(false)
let [fun7,setfun7]=useState(false)
let [fun8,setfun8]=useState(false)
let [fun9,setfun9]=useState(false)
let [fun10,setfun10]=useState(false)
let [fun11,setfun11]=useState(false)
let [fun12,setfun12]=useState(false)
let [fun13,setfun13]=useState(false)
let [fun14,setfun14]=useState(false)
let [fun15,setfun15]=useState(false)
let [fun16,setfun16]=useState(false)

let f1=()=>{
setfun1(true);
setfun2(false)
setfun3(false);
  setfun4(false);
  setfun5(false);
  setfun6(false);
  setfun7(false);
  setfun8(false);
  setfun9(false);
  setfun10(false);
  setfun11(false);
  setfun12(false);
  setfun13(false);
  setfun14(false);
  setfun15(false);
  setfun16(false);


}
let f2=()=>{
setfun2(true);
setfun1(false);
setfun3(false);
  setfun4(false);
  setfun5(false);
  setfun6(false);
  setfun7(false);
  setfun8(false);
  setfun9(false);
  setfun10(false);
  setfun11(false);
  setfun12(false);
  setfun13(false);
  setfun14(false);
  setfun15(false);
  setfun16(false);

}

let f3=()=>{
  setfun3(true);
  setfun1(false);
  setfun2(false);
  setfun4(false);
  setfun5(false);
  setfun6(false);
  setfun7(false);
  setfun8(false);
  setfun9(false);
  setfun10(false);
  setfun11(false);
  setfun12(false);
  setfun13(false);
  setfun14(false);
  setfun15(false);
  setfun16(false);
  
}
let f4=()=>{
  setfun4(true);
  setfun1(false);
  setfun2(false);
  setfun3(false);
  setfun5(false);
  setfun6(false);
  setfun7(false);
  setfun8(false);
  setfun9(false);
  setfun10(false);
  setfun11(false);
  setfun12(false);
  setfun13(false);
  setfun14(false);
  setfun15(false);
  setfun16(false);


}

let f5 =()=>{
  setfun5(true);
   setfun1(false);
  setfun2(false);
  setfun3(false);
  setfun4(false);
  setfun6(false);
  setfun7(false);
  setfun8(false);
  setfun9(false);
  setfun10(false);
  setfun11(false);
  setfun12(false);
  setfun13(false);
  setfun14(false);
  setfun15(false);
  setfun16(false);

}
let f6 =()=>{
  setfun6(true);
  setfun1(false);
  setfun2(false);
  setfun3(false);
  setfun4(false);
  setfun5(false);
  setfun7(false);
  setfun8(false);
  setfun9(false);
  setfun10(false);
  setfun11(false);
  setfun12(false);
  setfun13(false);
  setfun14(false);
  setfun15(false);
  setfun16(false);


}
let f7 =()=>{
  setfun7(true);
  setfun1(false);
  setfun2(false);
  setfun3(false);
  setfun4(false);
  setfun5(false);
  setfun6(false);
  setfun8(false);
  setfun9(false);
  setfun10(false);
  setfun11(false);
  setfun12(false);
  setfun13(false);
  setfun14(false);
  setfun15(false);
  setfun16(false);
}

let f8 =()=>{
  setfun8(true);
  setfun1(false);
  setfun2(false);
  setfun3(false);
  setfun4(false);
  setfun5(false);
  setfun6(false);
  setfun7(false);
  setfun9(false);
  setfun10(false);
  setfun11(false);
  setfun12(false);
  setfun13(false);
  setfun14(false);
  setfun15(false);
  setfun16(false);

}
let f9 =()=>{
  setfun9(true);
  setfun1(false);
  setfun2(false);
  setfun3(false);
  setfun4(false);
  setfun5(false);
  setfun6(false);
  setfun7(false);
  setfun8(false);
  setfun10(false);
  setfun11(false);
  setfun12(false);
  setfun13(false);
  setfun14(false);
  setfun15(false);
  setfun16(false);

}
let f10 =()=>{
  setfun10(true);
  setfun1(false);
  setfun2(false);
  setfun3(false);
  setfun4(false);
  setfun5(false);
  setfun6(false);
  setfun7(false);
  setfun8(false);
  setfun9(false);
  setfun11(false);
  setfun12(false);
  setfun13(false);
  setfun14(false);
  setfun15(false);
  setfun16(false);
}
let f11 =()=>{
  setfun11(true)
  setfun1(false);
  setfun2(false);
  setfun3(false);
  setfun4(false);
  setfun5(false);
  setfun6(false);
  setfun7(false);
  setfun8(false);
  setfun9(false);  
  setfun10(false);
  setfun12(false);
  setfun13(false);
  setfun14(false);
  setfun15(false);
  setfun16(false);

}
let f12 =()=>{
  setfun12(true);
  setfun1(false);
  setfun2(false);
  setfun3(false);
  setfun4(false);
  setfun5(false);
  setfun6(false);
  setfun7(false);
  setfun8(false);
  setfun9(false);  
  setfun10(false);
  setfun11(false);
  setfun13(false);
  setfun14(false);
  setfun15(false);
  setfun16(false);
}

let f13 =()=>{
  setfun13(true)
  setfun1(false);
  setfun2(false);
  setfun3(false);
  setfun4(false);
  setfun5(false);
  setfun6(false);
  setfun7(false);
  setfun8(false);
  setfun9(false);  
  setfun10(false);
  setfun11(false);
  setfun12(false);
  setfun14(false);
  setfun15(false);
  setfun16(false);

}
let f14 =()=>{
  setfun14(true);
  setfun1(false);
  setfun2(false);
  setfun3(false);
  setfun4(false);
  setfun5(false);
  setfun6(false);
  setfun7(false);
  setfun8(false);
  setfun9(false);  
  setfun10(false);
  setfun11(false);
  setfun12(false);
  setfun13(false);
  setfun15(false);
  setfun16(false);
}
let f15 =()=>{
  setfun15(true);
  setfun16(false);
  setfun1(false);
  setfun2(false);
  setfun3(false);
  setfun4(false);
  setfun5(false);
  setfun6(false);
  setfun7(false);
  setfun8(false);
  setfun9(false);  
  setfun10(false);
  setfun11(false);
  setfun12(false);
  setfun13(false);
  setfun14(false);

}
let f16 =()=>{
  setfun16(true)
  setfun1(false);
  setfun2(false);
  setfun3(false);
  setfun4(false);
  setfun5(false);
  setfun6(false);
  setfun7(false);
  setfun8(false);
  setfun9(false);  
  setfun10(false);
  setfun11(false);
  setfun12(false);
  setfun13(false);
  setfun14(false);
  setfun15(false);


}



// console.log(womencate.womenethnic?.[0]?.Sarees);
// console.log(womencate.womenethnic1);
// console.log(womencate.womenethnic3.Topwear);
// console.log(womencate.womenethnic1.Sarees);


// ye product ko search krne ke liye banya h ok 
let [allproucds,setallproducts]= useState([]);
let [inputvalue,setinputvalue]=useState("");
let[filterpro,setfilterpro]=useState([]);

useEffect(()=>{
 setallproducts (allproductdata);

},[allproucds])

const searchproduct=(e)=>{
  e.preventDefault();
const filterproduct= allproucds.filter((product) =>
   product.title.toLowerCase().includes(inputvalue.toLowerCase())
  );
  setpro(filterproduct);
  sethidepage(true);
};
console.log(allproucds.length
)




// console.log(filterproduct);
// console.log(allproductdata[0]);





//  this is for get the product category using api 
 const findcate=()=>{
  // prompt("cte is run")
  axios.get('https://dummyjson.com/products/categories')
.then(res => res.data)
.then((finres)=>{
  // console.log(finres)
  setcate(finres);
});

 }

//  thsi is for get the product using api ok 

const produtitems=()=>{
  // axios.get('https://dummyjson.com/products')
  axios.get(`https://dummyjson.com/products?limit=100`)
  .then((res)=>res.data)
  .then((finaldata)=>{
    // console.log(finaldata)
    setpro(finaldata.products
);
  })
}
    

useEffect(()=>{
  // womencate()
  findcate();
  produtitems()
   
},[])

// ye mene search ke liye kiya h 
const handlsubmit=(e)=>{
  // e.preventdefault();
  e.preventDefault()

  console.log(searchpro)
  setsearchtext(searchpro);
  
  console.log(searctext);

}

useEffect(()=>{
  if(searctext!==""){
    // axios.get(`https://dummyjson.com/products/search?q=${searctext}`)
    axios.get(`https://dummyjson.com/products/category/${searctext}`)
  .then((res)=>{
   setpro(res.data.products)
   console.log(res.data.products)
  console.log("yes chal gya ")
  

  })

  }
  
 

},[searctext])



// ye kaam mene jis category per click kre uske product open ho isliye kiya h 
    


 useEffect(() => {
  if (filter !== "") {
    axios.get(`https://dummyjson.com/products/category/${filter}`)
      .then((res) => {
        setpro(res.data.products); // 👈 save API products
        console.log("API response:", res.data.products);
      })
      
  }
}, [filter]); // 👈 r




// ye Ethnic wear,WestenDress,Menswear,Footwear,HomeDecoration

let [westerndres,setwesterndres]=useState([]);
let [Groceries,setGroceries]=useState([]);
let [Homdecorations,setHomdecorations]=useState([]);
let [Beauties,setBeauties]=useState([]);
let [accessoriess,setaccessoriess]=useState([]);

useEffect(()=>{

  setwesterndres(westerndressdata.westernDress);
  setHomdecorations(homedecodata.homedeco)
// this api for Beauty products ok 
 axios.get("https://dummyjson.com/products/category/skincare")
 .then((res)=>{
  setBeauties(res.data.products);
 })

//  this api for Accessories ok 
axios.get("https://dummyjson.com/products")
      .then((res) => {
        const menAccessories = res.data.products.filter(item =>
          item.category.includes("mens") ||
          item.title.toLowerCase().includes("sunglass") ||
          item.title.toLowerCase().includes("bag") ||
          item.title.toLowerCase().includes("belt") ||
          item.title.toLowerCase().includes("watch")
        );
        setaccessoriess(menAccessories);
      })


  // this api for groceries ok 
  axios.get("https://dummyjson.com/products/category/groceries")
  .then((res)=>{
   setGroceries (res.data.products)
  })
  
  
})


const ethnicwear=()=>{
  setpro([...lehnga,...sarees])
  sethidepage(true);
}

const westerndress=()=>{

setpro(westerndres)
  sethidepage(true);
}

const Menswear=()=>{
setpro(menwears)
  sethidepage(true);
}

const footwear=()=>{
 setpro(Footwears)
  sethidepage(true);
}

const Homedecoration=()=>{
setpro(Homdecorations)
  sethidepage(true);
}

const Beauty=()=>{
  setpro(Beauties);
  sethidepage(true);
}

const Accessoriess=()=>{
   setpro(accessoriess)
  sethidepage(true);
}

const Grocery=()=>{
 setpro(Groceries)
  sethidepage(true);
}




// ye kam 4 div lehengas ,sare jwellers,menswear ok understodd
let[lehnga,setlehenga]=useState([]);
let[sarees,setsarees]=useState([]);
let[menwears,setmenwears]=useState([]);
let[jwelleris,setjwelleries]=useState([]);

useEffect(()=>{
  setlehenga(lehengasdata.lehengas)
  setsarees(sareedata.saree);


// ye api mean wear ke liye h ok 
  const menshirt = axios.get("https://dummyjson.com/products/category/mens-shirts");
const menshoes = axios.get("https://dummyjson.com/products/category/mens-shoes");
const menwatches = axios.get("https://dummyjson.com/products/category/mens-watches");

Promise.all([menshirt, menshoes, menwatches])
  .then(([respmenshirt, resmenshoes, resmenwatches]) => {
    const combinddata = [...respmenshirt.data.products, ...resmenshoes.data.products,...resmenwatches.data.products];
    setmenwears(combinddata);
  });

  // ye jwellery ke liye h ok 
  setjwelleries(jwellerydata.jwelry);
  


  
},[])

const leheng=()=>{
  setpro(lehnga)
  sethidepage(true)
}
const sareeswomen=()=>{
  setpro(sarees)
  sethidepage(true)
}

const menwear=()=>{
  setpro(menwears);
  sethidepage(true)

}
const jwellery=()=>{
  setpro(jwelleris);
  sethidepage(true);
}
const shopnowbtn1=()=>{
  setpro([...lehnga,...sarees,...menwears,jwelleris,...personalcare,...electronic,...smartphone,...menperfume,...Bages,...pro]);
  sethidepage(true);
}









// ye kaam Oringnal Brands bala section ke product laye h is section ma ok 
let[personalcare, setpersonalcare]=useState([]);
let[electronic,setelectronic]=useState([]);
let[makeup,setmakup]=useState([]);
let[smartphone,setsmartphone]=useState([]);
let[menperfume,setmenperfume]=useState([]);
let [Bages ,setBages]=useState([]);
let [Footwears ,setFootwears]=useState([]);
let [Books ,setBooks]=useState([]);

useEffect(()=>{
  // setpersonalcare(jensdata.jeans);
  setpersonalcare(persocaredata.persnl)
  setelectronic(Electronicdata.Electroni)

// this api for makeup ok 
  axios.get("https://dummyjson.com/products/category/skincare")
  .then((res)=>{
    setmakup(res.data.products);
  })
  // console.log(makeup);

  // this api for smarthphone ok 

  axios.get("https://dummyjson.com/products/category/smartphones")
  .then((res)=>{
    setsmartphone(res.data.products);
    // console.log(res.data.products)
  })

  setmenperfume(menperfumedata.MenPer)
  setBages(Bagesdata.Bages);

  // for footwear ok 
  const mensdata= axios.get("https://dummyjson.com/products/category/mens-shoes")
  const womensdata= axios.get("	https://dummyjson.com/products/category/womens-shoes")

Promise.all([mensdata,womensdata])
.then(([Resmensdata,Reswomensdata])=>{
  const combindedata=[...Resmensdata.data.products,...Reswomensdata.data.products];
  setFootwears(combindedata);
});

axios.get("https://fakestoreapi.com/products")

setBooks(Booksdata.Book);

 



},[])
// console.log(Books)
// ye sare fuction scroll bar ke ander jo product show ho rhe  us ke h ok 
const personal=()=>{
  setpro(personalcare);
  sethidepage(true);

}
const Elctro=()=>{
  setpro(electronic);
  sethidepage(true);

}
const Make=()=>{
  setpro(makeup);
  sethidepage(true);
}

const smartpho=()=>{
  setpro(smartphone);
  sethidepage(true);

}
const Menperfu=()=>{
  setpro(menperfume);
  sethidepage(true);

}
const Bag=()=>{
  setpro(Bages);
  sethidepage(true);

}
const Footwear=()=>{
  setpro(Footwears);
  sethidepage(true);

}
const Book=()=>{
  setpro(Books);
  sethidepage(true);

}

const viewmore=()=>{
  setpro([...menperfume , ...personalcare]);
  sethidepage(true);
}









// ye kam mene Beagy Jens ko access kerne ke liye kiya h 
let [jens,setjeans]=useState([]);

// is state ma jab ma jeans bale a tag per click per click krunga to isme value true ho jaygi ok 
let  [hidepage,sethidepage]=useState(false);

let[Summerdress,setsumerdress]=useState([]);
let [Earing,setEaring]=useState([]);
let [ChicFlat,setChicFlate]=useState([]);
// ise un product ko store kre h jo shop btn per clik ker per open ho rhe h 
let[shop2,setshop2]=useState([]);




useEffect(()=>{
  // prompt("yes call ho gya")

    setjeans(jensdata.jeans)
    setsumerdress(summerdata.summer)
    setEaring(Earingdata.Earing);
    setChicFlate(ChicFlatdata.ChicFla)


},[])

useEffect(()=>{

  axios.get('https://fakestoreapi.com/products')
  .then((res)=>{
   setshop2 (res.data);

  })

  // console.log(shop2);
  


},[])

    const baggyjeans=()=>{
  // isse sare jeans product product ma set ho jayge ok 
      setpro(jens)
      sethidepage(true);
    }

    const summDress=()=>{
  // is sare smmerdress ke product product section ke ander set ho jayge
      setpro(Summerdress)
      sethidepage(true);
    }

    const Earings=()=>{
      setpro(Earing)
      sethidepage(true)


    }
    const ChicFlats=()=>{
      setpro(ChicFlat);
      sethidepage(true)
    }


    const shopnow2=()=>{
      setpro([...pro, ...ChicFlat , ...Earing , ...Summerdress,...jens ,...Bages,...electronic]);
      
      sethidepage(true);

    }
  


  

  return (
    <>
                   {/*header */}
      <div className="Header d-flex  justify-content-evenly   p-3  ">
                  {/* left part of the header */}
        <div className=" d-flex   justify-content-evenly">
           
             <div className="logo "> 
            <a href="/">
             <img alt="" className=" w-50" src="https://www.meesho.com/assets/svgicons/meeshoLogo.svg"/>
            
             </a>
             </div>

          <div className="Searcbar">
           
           <form onSubmit={ (e)=>searchproduct(e)}>
            <div className="serachinput"> 
             <FontAwesomeIcon icon={faSearch} className="searchicon" />

              <input  onChange={(e)=>setinputvalue(e.target.value)} className="input " type="text"  placeholder="Try Saree, Kurti or Search "></input>
              </div>
              </form>
           
          </div>
        </div>

        {/* right part of the header */}

        <div className="righteader d-flex  gap-3 flex-row "> 
          <div>Become a Supplier </div>

            <div className="line "></div>
         
          <div>Investor Relations</div>
          <div className="line "></div>
          <div  className="profile"> <FontAwesomeIcon icon={faUser} style={{color:"grey"}}/>Profile
         < Profilemenu/>
          </div>
          <div><FontAwesomeIcon icon={faCartShopping}/>Cart</div>
         

        </div>
    </div>

        

      
      {/* headr end ho gya h */}

      {/* serch bar ke nich ki line */}
        <div className="breakline d-block"></div>
        <Profilemenu/>

          {/* <div className="scrollbarcontainer"> */}

         <div className=" scrolbar d-flex  ">
        <div onMouseEnter={addclass} onMouseLeave={removclass} onMouseOver={f1} >Women Ethnic</div>
        <div onMouseEnter={addclass} onMouseLeave={removclass} onMouseOver={f2} >Women Westernc </div>
        <div onMouseEnter={addclass} onMouseLeave={removclass} onMouseOver={f3} >Men</div>
        <div onMouseEnter={addclass} onMouseLeave={removclass}  onMouseOver={f4} >Kids</div>
        <div onMouseEnter={addclass} onMouseLeave={removclass} onMouseOver={f5} >Home & Kitchen</div>
        <div onMouseEnter={addclass} onMouseLeave={removclass} onMouseOver={f6}  >Beauty & Healt</div>
        <div onMouseEnter={addclass} onMouseLeave={removclass} onMouseOver={f7}>Jewellery & Accessories</div>
        <div onMouseEnter={addclass} onMouseLeave={removclass}  onMouseOver={f8}>Bags & Footwear</div>
        <div onMouseEnter={addclass} onMouseLeave={removclass} onMouseOver={f9} >Electronics</div>
        <div onMouseEnter={addclass} onMouseLeave={removclass} onMouseOver={f10}>Sports & Fitness</div>
        <div onMouseEnter={addclass} onMouseLeave={removclass}  onMouseOver={f11}>Car & Motorbike </div>
        <div onMouseEnter={addclass} onMouseLeave={removclass}  onMouseOver={f12}>Office Supplies & Stationery</div>
        <div onMouseEnter={addclass} onMouseLeave={removclass}  onMouseOver={f13}>Pet Supplies</div>
        <div onMouseEnter={addclass} onMouseLeave={removclass}  onMouseOver={f14}>Food & Drinks</div>
        <div onMouseEnter={addclass} onMouseLeave={removclass} onMouseOver={f15} >Musical Instruments</div>
        <div onMouseEnter={addclass} onMouseLeave={removclass} onMouseOver={f16}>Books   </div>
        
        </div>
        <Category ishover={hover} sethover={sethover} womencate={womencate} setpro={setpro} sethidepage={sethidepage}
         fun1={fun1} fun2={fun2} fun3={fun3} fun4={fun4} fun5={fun5} fun6={fun6}  fun7={fun7} fun8={fun8} fun9={fun9}
         fun10={fun10} fun11={fun11}fun12={fun12} fun13={fun13} fun14={fun14} fun15={fun15} fun16={fun16}/>

{/* is div ke ander ka sara content dipalay none ho jayga jan Baggy jeans per click ker dega ok  */}
          <div className={`${hidepage ? "BaggyJeans":" "}`}>
         
       {/* main content ke ander header aur scroll bar (women Ethnic womenwetr men kids ) */}
        <div className="main-content  pt-5 mt-5 ">
  


        {/* imgae ko dala h */}
        <div className=" photo " >
          <img  className="w-100" alt="" src="https://images.meesho.com/images/marketing/1746425994914.webp"></img>
        </div>

        {/* ye big image ke badd ke features wala part */}
      <section className=" section1     ">
        <div className=" features d-flex  justify-content-center alighn align-items-center  ">
          <div> 
            <img alt="" src="https://www.meesho.com/assets/Icons/returns.svg"></img>
            <spa>7 Days Easy return</spa>
          </div>

          <div> 
            <img alt="" src="https://www.meesho.com/assets/Icons/cod.svg"></img>
            <span>Cash on Delivery</span>
            
          </div>
          <div>
            <img alt="" src="https://www.meesho.com/assets/Icons/lowest-price.svg"></img>

            <span>Lowest Price</span>
          </div>
        </div>
      </section>
        </div>

     {/* section 2 Grid  walah */}
      <section className= " section2 d-flex   ">
        <div className="d-flex" >

          <a onClick={ethnicwear} href="#"> <img alt="" src="https://images.meesho.com/images/marketing/1744634654837.webp"></img> 
          <div>Ethnic Wear</div></a>

          <a onClick={westerndress} href="#"> <img alt="" src="https://images.meesho.com/images/marketing/1744634725496.webp"></img> 
          <div>Westren Dresses</div></a>

          <a onClick={Menswear} href="#"> <img alt="" src="https://images.meesho.com/images/marketing/1744634780426.webp"></img>
           <div>Menswear</div></a>

          <a onClick={footwear} href="#"> <img alt="" src="https://images.meesho.com/images/marketing/1744634814643.webp"></img> 
          <div>Footwear</div></a>

          <a onClick={Homedecoration} href="#"> <img alt="" src="https://images.meesho.com/images/marketing/1744634835018.webp"></img> 
          <div>Home Decor</div></a>

          <a onClick={Beauty} href="#"> <img alt="" src="https://images.meesho.com/images/marketing/1744634871107.webp"></img>
          <div>Beauty</div></a>

          <a onClick={Accessoriess} href="#"> <img alt="" src="https://images.meesho.com/images/marketing/1744634909968.webp"></img>
          <div>Accessories</div></a>

          <a onClick={Grocery} href="#"> <img alt="" src="https://images.meesho.com/images/marketing/1744634937295.webp"></img>
          <div>Grocery</div></a>
        </div>

      </section>



      {/* section 3 big img wala  lehenga sarees menwear,Jwellery */}

      <section className="section3" >
        <img className=" w-100" alt="" src="https://images.meesho.com/images/marketing/1744698265981.webp"></img>
        <a onClick={shopnowbtn1}   href="#!" className="shopnowbtn ">Shope Now</a>

        {/*4 dubbe in the big image  */}
        <Container className="forbox ">
          <Row>
        <Col xs={6}> <a onClick={leheng} > <div><img alt="" src="https://images.meesho.com/images/marketing/1744722796811.webp"></img></div></a> </Col>

        <Col xs={6}> <a onClick={sareeswomen}> <div><img alt="" src="https://images.meesho.com/images/marketing/1744635139351.webp"></img></div></a> </Col>

        <Col xs={6}> <a onClick={menwear}> <div><img alt="" src="https://images.meesho.com/images/marketing/1744635113661.webp"></img></div></a> </Col>

        <Col xs={6}> <a onClick={jwellery} > <div><img alt="" src="https://images.meesho.com/images/marketing/1744635189897.webp"></img></div></a> </Col>

      </Row>
        </Container>
        
      </section>

      {/* /section 4 */}
      
      <section className=" section4">
        <div className="d-flex justify-content-around">
          <div className=" fs-1">
            Original Brands <FontAwesomeIcon icon={faStar} color="rebeccapurple"fontSize={25} /> 
           </div>

          <a onClick={viewmore} className="viewmore"  href="#">View More   
             <FontAwesomeIcon icon={faAngleRight} style={{fontSize:24}}/></a>
        </div >



        <div className=" section4product d-flex justify-content-around">

          <a onClick={personal} href="#"> <div> <img  alt="img" src="https://images.meesho.com/images/marketing/1744635542873.webp"></img></div></a>
          <a onClick={Elctro} href="#"> <div> <img  alt="img" src="https://images.meesho.com/images/marketing/1744635521751.webp"></img></div></a>
          <a onClick={Make} href="#"> <div> <img alt="img" src="https://images.meesho.com/images/marketing/1744635497001.webp"></img></div></a>
          <a onClick={smartpho} href="#"> <div> <img alt="img" src="https://images.meesho.com/images/marketing/1744635464683.webp"></img></div></a>
          <a onClick={Menperfu} href="#"> <div> <img alt="img" src="https://images.meesho.com/images/marketing/1744635432891.webp"></img></div></a>
          <a onClick={Bag} href="#"> <div> <img alt="img" src="https://images.meesho.com/images/marketing/1744635402151.webp"></img></div></a>
          <a onClick={Footwear} href="#"> <div> <img alt="img" src="https://images.meesho.com/images/marketing/1744635614888.webp"></img></div></a>
          <a onClick={Book} href="#"> <div> <img alt="img" src="https://images.meesho.com/images/marketing/1744635646070.webp"></img></div></a>
        </div>
      {/* ye scrolling button h ok  */}
        <button className="scrbtn1"><FontAwesomeIcon icon={faAngleLeft}/></button>

       <button className="scrbtn2"><FontAwesomeIcon icon={faAngleRight}/></button>

      </section>


    <div className=" stylediv w-100">
      <div className="style  d-flex vw-100">
        <div className=" p-3 me-2 "><img src="https://images.meesho.com/images/marketing/1743159302944.webp"></img></div>
        <div className=" p-3 me-2 "><img src="https://images.meesho.com/images/marketing/1743159322237.webp"></img></div>
        <div className=" p-3 me-2 "><img src="https://images.meesho.com/images/marketing/1743159363205.webp"></img></div>
        <div className=" p-3 me-2 "><img src="https://images.meesho.com/images/marketing/1743159377598.webp"></img></div>
        <div className=" p-3 me-2 "><img src="https://images.meesho.com/images/marketing/1743159393231.webp"></img></div>
        <div className=" p-3 me-2 "><img src="https://images.meesho.com/images/marketing/1743159415385.webp"></img></div>
        <div className=" p-3 me-2 "><img src="https://images.meesho.com/images/marketing/1744636558884.webp"></img></div>
        <div className=" p-3 me-2 "><img src="https://images.meesho.com/images/marketing/1744636599446.webp"></img></div>

         <div className=" p-3 me-2 "><img src="https://images.meesho.com/images/marketing/1743159302944.webp"></img></div>
        <div className=" p-3 me-2 "><img src="https://images.meesho.com/images/marketing/1743159322237.webp"></img></div>
        <div className=" p-3 me-2 "><img src="https://images.meesho.com/images/marketing/1743159363205.webp"></img></div>
        <div className=" p-3 me-2 "><img src="https://images.meesho.com/images/marketing/1743159377598.webp"></img></div>

       
        
      </div>
    </div>
{/* this is section5  */}
    <section className="section5  " >
      <img  className=" w-100" alt="" src="https://images.meesho.com/images/marketing/1744698143534.webp"></img>
      <a onClick={shopnow2}><button className="shopnowbtn2 bg-light ">Shop Now</button></a>
      {/* ye for box img jo h big photo m ok  */}
      <div className=" fordivs " >

       <a onClick={summDress} ><div className=" imgdiv "><img  alt="" src="https://images.meesho.com/images/marketing/1744635893307.webp"></img> <div className="div">Summer Dress</div></div></a>


       <a onClick={baggyjeans} ><div className=" imgdiv"><img  alt="" src="https://images.meesho.com/images/marketing/1744635812270.webp"></img> <div className="div">Baggy Jeans</div></div></a>

       <a onClick={Earings}  ><div className=" imgdiv"><img  alt="" src="https://images.meesho.com/images/marketing/1744635870215.webp"></img> <div className="div">Earrings</div></div></a>

       <a onClick={ChicFlats}><div className="imgdiv"><img  alt="" src="https://images.meesho.com/images/marketing/1744635846873.webp"></img> <div className="div">Chic Flats</div></div></a>

      </div>

    </section>
                </div>



   {/* product section ok  */}

    <section className=" m-3">
      <div>
        <div> <h4 className="">products For You </h4></div>
        <form onSubmit={handlsubmit}>
       <input type="text" placeholder="Search Products" style={{borderRadius:5, padding:5}} onChange={(e)=>{setsearchpro(e.target.value)}}></input>

        </form>

        {/* ye dono product category aur product divs iske ander ok  */}
        <div className=" d-flex">

            {/* all category are over here ok  */}
          <div className="  me-3 border rounded" >
          <Productcategory cate={cate} setfilter={setfilter}/>
          </div>


           {/* all products in this div ok  */}
          <div className=" d-flex flex-wrap jusitfy-content-between align-items-center">
            <Products pro={pro}/>
            </div>


        </div>


      </div>

    </section>
    {/* </div> */}



    </>
  );
}

export default App;
