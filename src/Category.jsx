
import lehengass from './data/lehengas.json';
import sareedate from './data/sarees.json';
import ankarikurti from './product/AnkariKuties.json';
import Bagsdata from './product/BagsAndFootwear.json';
import Beatuandhealthdata from './product/BeautyAndHealth.json';
import beltandWatchesdata from './product/bletsandWallets.json';
import banarasisaree from './product/bnarsisaree.json';
import Booksdata from './product/Books .json';
import carmoterdata from './product/carandmoterBike.json';
import Electronicdata from './product/Electronic.json';
import fooddata from './product/FoodandDrinks.json';
import kichendata from './product/HomeandKithen .json';
import jwellweryandAccedata from './product/JwelleryandAccesseries.json';
import kidsdata from './product/Kids.json';
import kutiesdata from './product/kurti.json';
import Allmenaccssriesdata from './product/menaccessories.json';
import MenFootweardata from './product/menfootwear.json';
import musicaldata from './product/MusicalInstruments.json';
import officedata from './product/Office.json';
import petdata from './product/petsuppllies.json';
import silksaree from './product/silksaree.json';
import sportdata from './product/sportAndfitness.json';
import Watchesdata from './product/Watches.json';

import './extradesign.css';
import './Queries.css';
import './utility.css';





export default function Category({ishover,sethover,womencate,
  setpro,sethidepage,fun1,fun2,fun3,fun4,fun5,fun6,fun7,fun8,fun9,fun10,fun11,fun12,fun13,fun14,fun15, fun16}) {
 

// this function for sarees data ok womenethnic 
  const womendata=(e,itmes)=>{
    if(itmes=="All Sarees"){
   setpro(sareedate.saree);
    sethidepage(true);

    }
    if(itmes=="Silk Sarees"){
        sethidepage(true);
        setpro(silksaree.silksarees);

    }
    if(itmes=="Banarasi Silk Sarees"){
      sethidepage(true);
      setpro(banarasisaree.banarasi_silk_sarees);
    }
  
  
}
// for kuties acces ok 
const kurties=(e,item)=>{

  if(item=="All Kurtis"){
  setpro(kutiesdata.kurties);
  sethidepage(true);
  }

  if(item=="Anarkali Kurtis"){
    setpro(ankarikurti.ankarikurties)
    sethidepage(true);
  }
  if(item=="Rayon Kurtis"){
    setpro(ankarikurti.ankarikurties);
    sethidepage(true);
  }

}

// this funtion for lehngas ke liye h ok 

const lehangas=(e,item)=>{
  if(item=="Lehenga Cholis"){
    setpro(lehengass.lehengas);
    sethidepage(true);
  }
  if(item=="Net Lehenga"){
    setpro(lehengass.lehengas);
    sethidepage(true);
  }
  if(item=="Bridal Lehenga"){
    setpro(lehengass.lehengas);
    sethidepage(true);
  }

}

// men porduct accessing ok 
// array 1
const men1=(e,item)=>{

  if(item=="All Men Accessories"){
setpro(Allmenaccssriesdata.AllMenAccessories)
  sethidepage(true);
  }

   if(item=="Watches"){
setpro(Watchesdata.Watches)
  sethidepage(true);
  }

   if(item=="Belts & Wallets"){
   setpro(beltandWatchesdata.BeltsAndWallets);
  sethidepage(true);
  }
}

// array 2
const men2=(e,item)=>{

if(item=="Men Footwear "){
   setpro(MenFootweardata.MenFootwear);
  sethidepage(true);
  }
  if(item=="causel shoes"){
   setpro(MenFootweardata.MenFootwear);
  sethidepage(true);
  }
  if(item=="sport shoes"){
   setpro(MenFootweardata.MenFootwear);
  sethidepage(true);
  }
}

// kids product accssing ok 
//  array first ke liye ok 
 const Kids1=(e,item)=>{

  if(item=="Dresses"){
    setpro(kidsdata.Dresses);
  sethidepage(true)

  }
  if(item=="Boys Sets"){
    setpro(kidsdata.BoysSets);
  sethidepage(true)

  }

  if(item=="Girls Sets"){
    setpro(kidsdata.GirlsSets);
  sethidepage(true)

  }
  
 }
//  array second ke liye ok 
const Kids2=(e,item)=>{

  if(item=="Rompers"){
    setpro(kidsdata.Rompers);
  sethidepage(true)

  }
  if(item=="Baby Sets"){
    setpro(kidsdata.BabySets);
  sethidepage(true)

  }

  if(item=="Ethnicwear"){
    setpro(kidsdata.Ethnicwear);
  sethidepage(true)

  }
  
 }
//  array third ke liye ok 
const Kids3=(e,item)=>{

  if(item=="Soft Toys"){
    setpro(kidsdata.SoftToys);
  sethidepage(true)

  }
  if(item=="Footwear"){
    setpro(kidsdata.Footwear);
  sethidepage(true)

  }

  if(item=="Stationery"){
    setpro(kidsdata.Stationery);
  sethidepage(true)

  }
  
 }

//  aray 4 ke liye ok 
const Kids4=(e,item)=>{

  if(item=="Baby Bedding & Accessories"){
    setpro(kidsdata.BabyBeddingAndAccessories);
  sethidepage(true)

  }
  if(item=="All Baby Care"){
    setpro(kidsdata.AllBabyCare);
  sethidepage(true)

  }

  if(item=="Newborn Care"){
    setpro(kidsdata.NewbornCare);
  sethidepage(true)

  }
  
 }

//  home and kichen product acssing
// array one ke liye 
const kichen1=(e,item)=>{
   if(item=="Kitchen Tools"){
    setpro(kichendata.KitchenTools);
  sethidepage(true)
  }
  if(item=="Storage Organizers"){
    setpro(kichendata.StorageOrganizers);
  sethidepage(true)
  }
}
// array 2 ke liye 
const kichen2=(e,item)=>{
   if(item=="Bedsheets"){
    setpro(kichendata.Bedsheets);
  sethidepage(true)
  }

   if(item=="Curtains Sheers"){
    setpro(kichendata.CurtainsSheers);
  sethidepage(true)
  }

}

// array 3 ke liye 
const kichen3=(e,item)=>{
  if(item=="Clocks"){
    setpro(kichendata.Clocks);
  sethidepage(true)
  }
  
  if(item=="ClocShowpiecesks"){
    setpro(kichendata.Showpieces);
  sethidepage(true)
  }
 
  
  if(item== "Paintings Photoframes"){
    setpro(kichendata.PaintingsPhotoframes);
  sethidepage(true)
  }

}

// array 4 ke  lye 
const kichen4=(e,item)=>{
 
  if(item== "Kitchen Storage" ){
    setpro(kichendata.KitchenStorage);
  sethidepage(true)
  }

   if(item== "Cookware Bakeware" ){
    setpro(kichendata.CookwareBakeware);
  sethidepage(true)
  }

}
// array 5 ok 

const kichen5=(e,item)=>{

   if(item=="Cleaning Supplies"){
    setpro(kichendata.CleaningSupplies);
  sethidepage(true)
  }
  

  
   if(item=="Gardening"){
    setpro(kichendata.Gardening);
  sethidepage(true)
  }
  
}

// Beauty and health prouduct k
// Array 1 ke liye 

const Beauty1=(e,item)=>{
  if(item=="Face"){
    setpro(Beatuandhealthdata.Face);
  sethidepage(true)
  }
   if(item=="Eyes"){
    setpro(Beatuandhealthdata.Eyes);
  sethidepage(true)
  }
  
  if(item=="Lips"){
    setpro(Beatuandhealthdata.Lips);
  sethidepage(true)
  }
  if(item=="Nails"){
    setpro(Beatuandhealthdata.Nails);
  sethidepage(true)
  }
  if(item==  "Makeup Kits"){
    setpro(Beatuandhealthdata.MakeupKits);
  sethidepage(true)
  }

}
// array 2 ke liye 
const Beauty2=(e,item)=>{
  if(item=="View All"){
    setpro(Beatuandhealthdata.ViewAll);
  sethidepage(true)
  }
  if(item=="Face Masks Peels"){
    setpro(Beatuandhealthdata.FaceMasksPeels);
  sethidepage(true)
  }
  if(item=="Facecare"){
    setpro(Beatuandhealthdata.Facecare);
  sethidepage(true)
  }

}
// array 3 of josn file 
const Beauty3=(e,item)=>{
  if(item=="Baby Personal Care"){
    setpro(Beatuandhealthdata.BabyPersonalCare);
  sethidepage(true)
  }

if(item=="Mom Care"){
    setpro(Beatuandhealthdata.MomCare);
  sethidepage(true)
  }
  
}
// Array 4 of json file ok 
const Beauty4=(e,item)=>{

  if(item=="Beard Care"){
    setpro(Beatuandhealthdata.BeardCare);
  sethidepage(true)
  }

if(item=="Fragrances for Men"){
    setpro(Beatuandhealthdata.FragrancesforMen);
  sethidepage(true)
  }
  
}

// array 5 ok 
const Beauty5=(e,item)=>{

  if(item=="Ear Buds Cleaners"){
    setpro(Beatuandhealthdata.BeardCare);
  sethidepage(true)
  }

if(item=="Sanitary Pads"){
    setpro(Beatuandhealthdata.SanitaryPads);
  sethidepage(true)
  }
  
}
// jwellery and Accessories
const jwelery1=(e,item)=>{
  if(item=="All Jewellery"){
    setpro(jwellweryandAccedata.AllJewellery);
  sethidepage(true)
  }

  if(item=="Jewellery Set"){
    setpro(jwellweryandAccedata.JewellerySet);
  sethidepage(true)
  }
  if(item=="Earrings Studs"){
    setpro(jwellweryandAccedata.EarringsStuds);
  sethidepage(true)
  }
  if(item=="Mangalsutras"){
    setpro(jwellweryandAccedata.Mangalsutras);
  sethidepage(true)
  }

}

const jwelery2=(e,item)=>{
  if(item=="View All"){
    setpro(jwellweryandAccedata.ViewAll);
  sethidepage(true)
  }

  if(item=="Watches"){
    setpro(jwellweryandAccedata.Watches);
  sethidepage(true)
  }
  if(item=="Belts Wallets"){
    setpro(jwellweryandAccedata.BeltsWallets);
  sethidepage(true)
  }
  if(item=="Caps Hats"){
    setpro(jwellweryandAccedata.CapsHats);
  sethidepage(true)
  }

}

const jwelery3=(e,item)=>{
  if(item=="Watches"){
    setpro(jwellweryandAccedata.Watches);
  sethidepage(true)
  }

  if(item=="Hair Accessories"){
    setpro(jwellweryandAccedata.Watches);
  sethidepage(true)
  }
 
  if(item=="Sunglasses"){
    setpro(jwellweryandAccedata.Sunglasses);
  sethidepage(true)
  }

}
// Bags and footwear 
const Bags1=(e,item)=>{
  
  if(item=="All Women Bags"){
    setpro(Bagsdata.AllWomenBags);
  sethidepage(true)
  }
  if(item=="Handbags"){
    setpro(Bagsdata.Handbags);
  sethidepage(true)
  }
  if(item=="Clutches"){
    setpro(Bagsdata.Clutches);
  sethidepage(true)
  }
} 

const Bags2=(e,item)=>{
  if(item=="Men Wallets"){
    setpro(Bagsdata.MenWallets);
  sethidepage(true)
  }
    if(item=="Crossbody Bags & Sling Bags"){
    setpro(Bagsdata.CrossbodyBagsSlingBags);
  sethidepage(true)
  }
  
} 

const Bags3=(e,item)=>{

  if(item=="Boys Shoes"){
    setpro(Bagsdata. BoysShoes);
  sethidepage(true)
  }
 
  if(item=="Girls Shoes"){
    setpro(Bagsdata.GirlsShoes);
  sethidepage(true)
  }
  
} 
// Electronic prodcuts
const Electronic1=(e,item)=>{
  
    if(item=="Bluetooth Headphone & Earphones"){
    setpro(Electronicdata.BluetoothHeadphoneEarphones);
  sethidepage(true)
  }
    if(item=="Wired Headphones & Earphones"){
    setpro(Electronicdata.WiredHeadphonesEarphones);
  sethidepage(true)
  }
    if(item=="Speakers"){
    setpro(Electronicdata.Speakers);
  sethidepage(true)
  }
}
const Electronic2=(e,item)=>{
    if(item=="Smartwatches"){
    setpro(Electronicdata.Smartwatches);
  sethidepage(true)
  }
    if(item=="Mobile Holders"){
    setpro(Electronicdata.MobileHoldersga);
  sethidepage(true)
  }
    if(item=="Mobile cases and covers"){
    setpro(Electronicdata.Mobilecasesandcovers);
  sethidepage(true)
  }
  
}
const Electronic3=(e,item)=>{
    if(item=="VR Box"){
    setpro(Electronicdata.VRBox);
  sethidepage(true)
  }
    if(item=="Tripod"){
    setpro(Electronicdata.Tripod);
  sethidepage(true)
  }
    if(item=="Microphone"){
    setpro(Electronicdata.Microphone);
  sethidepage(true)
  }
  
}
// sport and fitness

const sport1=(e,item)=>{
  if(item=="Yoga"){
    setpro(sportdata.Yoga);
  sethidepage(true)
  }
   if(item=="Hand Grip Strengthener"){
    setpro(sportdata.HandGripStrengthener);
  sethidepage(true)
  }
   if(item=="Tummy trimmers"){
    setpro(sportdata.Tummytrimmers);
  sethidepage(true)
  }
 
  if(item==" Skipping Ropes"){
    setpro(sportdata. SkippingRopes);
  sethidepage(true)
  }
 
}

const sport2=(e,item)=>{
  if(item=="Badminton"){
    setpro(sportdata.Badminton);
  sethidepage(true)
  }
  if(item=="Skating"){
    setpro(sportdata.Skating);
  sethidepage(true)
  }
  if(item=="Football"){
    setpro(sportdata.Football);
  sethidepage(true)
  }
  if(item=="Cricket"){
    setpro(sportdata.Cricket);
  sethidepage(true)
  }
  
}
 
// car and moterBike ok 
const car1=(e,item)=>{

  if(item=="Car Covers"){
    setpro(carmoterdata.CarCovers);
  sethidepage(true)
  }
   if(item=="Interior Accessories"){
    setpro(carmoterdata.InteriorAccessories);
  sethidepage(true)
  }
   if(item=="Car Mobile Holders"){
    setpro(carmoterdata.CarMobileHolders);
  sethidepage(true)
  }
   if(item=="Car Repair Assistance"){
    setpro(carmoterdata.CarRepairAssistance);
  sethidepage(true)
  }
   
}
const car2=(e,item)=>{
   if(item=="Helmets"){
    setpro(carmoterdata.Helmets);
  sethidepage(true)
  }
   if(item=="Bike Accessories"){
    setpro(carmoterdata.BikeAccessories);
  sethidepage(true)
  }
   if(item=="Bike LED Lights"){
    setpro(carmoterdata.BikeLEDLights);
  sethidepage(true)
  }
   if(item=="Safety Gear & Clothing"){
    setpro(carmoterdata.SafetyGearClothing);
  sethidepage(true)
  }
  
}
// office product ok 

const office=(e,item)=>{
  if(item=="Diaries & Notebooks"){
    setpro(officedata.DiariesNotebooks);
  sethidepage(true)
  }
  if(item=="Adhesives & Tapes"){
    setpro(officedata.AdhesivesTapes);
  sethidepage(true)
  }
  if(item=="Files & Desks Organizers"){
    setpro(officedata.FilesDesksOrganizers);
  sethidepage(true)
  }
  if(item=="Pens & Pencils"){
    setpro(officedata.PensPencils);
  sethidepage(true)
  }
  
   if(item=="Paintings & Photoframes"){
    setpro(officedata.PaintingsPhotoframes);
  sethidepage(true)
  }
}
// petsupplies 

const pet=(e,item)=>{
  
   if(item=="Pet Toys"){
    setpro(petdata.PetToys);
  sethidepage(true)
  }
   if(item=="Pet Grooming"){
    setpro(petdata.PetGrooming);
  sethidepage(true)
  }
   if(item=="Pet Food"){
    setpro(petdata.PetFood);
  sethidepage(true)
  }
   if(item=="Pet Clothing"){
    setpro(petdata.PetClothing);
  sethidepage(true)
  }
   if(item=="Pet Health"){
    setpro(petdata.PetHealth);
  sethidepage(true)
  }
  
}

// food and drinks
const food=(e,item)=>{
  if(item=="Dry Fruits"){
    setpro(fooddata.DryFruits);
  sethidepage(true)
  }
   if(item=="Tea"){
    setpro(fooddata.Tea);
  sethidepage(true)
  }
   if(item=="Masalas"){
    setpro(fooddata.Masalas);
  sethidepage(true)
  }
   if(item=="Coffee"){
    setpro(fooddata.Coffee);
  sethidepage(true)
  }
   if(item=="Ready to Cook"){
    setpro(fooddata.ReadytoCook);
  sethidepage(true)
  }
  
}

// musical Instrments ok 
const music=(e,item)=>{
  
  if(item=="String Instruments"){
    setpro(musicaldata.StringInstruments);
  sethidepage(true)
  }
  if(item=="Musical Accessories"){
    setpro(musicaldata.MusicalAccessories);
  sethidepage(true)
  }
   if(item=="Wind Instruments"){
    setpro(musicaldata.WindInstruments);
  sethidepage(true)
  }
   if(item=="All Musical Instruments"){
    setpro(musicaldata.AllMusicalInstruments);
  sethidepage(true)
  }
  
}
// Books product ok 

const Books=(e,item)=>{
  if(item=="Childrens Books"){
    setpro(Booksdata.ChildrensBooks);
  sethidepage(true)
  }
  if(item=="Self Help Books"){
    setpro(Booksdata.SelfHelpBooks);
  sethidepage(true)
  }
  if(item=="Novels"){
    setpro(Booksdata.Novels);
  sethidepage(true)
  }
  if(item=="Economics & Commerce"){
    setpro(Booksdata.EconomicsCommerce);
  sethidepage(true)
  }
  if(item=="Religious Books"){
    setpro(Booksdata.ReligiousBooks);
  sethidepage(true)
  }
   if(item=="View All Books"){
    setpro(Booksdata.ViewAllBooks);
  sethidepage(true)
  }
  
}

// in functiion sa categroy ka componet show hota h ok 
  const addclass=()=>{
    sethover(true);
  }

  const reomov=()=>{
    sethover(false)
  }
  // console.log(fun1);


 let sareesdata=null;
 let kurtidata=null;
 let lehngadata=null;

if(fun1){


     sareesdata=womencate.womenethnic1.Sarees.map((item)=>{
    return(
<span style={{fontWeight:'bold'}} className='flexdirctioncolum'>
<ul>
  <li style={{listStyle:'none'}}>
    <a onClick={(e)=>womendata(e,item)} href='#' style={{textDecoration:'none',color:' rgb(159, 32, 137)',fontWeight:'bold'}}>{item} </a>
    </li>
    </ul>
    </span>


    )
     
  })

   kurtidata=womencate.womenethnic1.Kurtis.map((item)=>{
    return(
<span style={{fontWeight:'bold'}} className='flexdirctioncolum'>
<ul>
  <li style={{listStyle:'none'}}>
    <a onClick={(e)=>kurties(e,item)} href='#' style={{textDecoration:'none',color:' rgb(159, 32, 137)',fontWeight:'bold'}}>{item} </a>
    </li>
    </ul>
    </span>


    )
     
  })

  
   lehngadata=womencate.womenethnic1.Lehengas.map((item)=>{
    return(
 <span style={{fontWeight:'bold'}} className='flexdirctioncolum'>   
<ul>
  <li style={{listStyle:'none'}}>
    <a onClick={(e)=>{lehangas(e,item)}} href='#' style={{textDecoration:'none',color:' rgb(159, 32, 137)',fontWeight:'bold'}}>{item} </a>
    </li>
    </ul>
    </span>  


    )
     
  })


  
}
// console.log(fun2);
let topwear=null;
let Bottomwear=null;
let Innerwear=null;

if(fun2){

      topwear=womencate.womenethnic2.Topwear.map((item)=>{
    return(
 <span style={{fontWeight:'bold'}} className='flexdirctioncolum'>   
<ul>
  <li style={{listStyle:'none'}}>
    <a onClick={(e)=>{lehangas(e,item)}} href='#' style={{textDecoration:'none',color:' rgb(159, 32, 137)',fontWeight:'bold'}}>{item} </a>
    </li>
    </ul>
    </span>  


    )
     
  })


Bottomwear=womencate.womenethnic2.Bottomwear.map((item)=>{
    return(
 <span style={{fontWeight:'bold'}} className='flexdirctioncolum'>   
<ul>
  <li style={{listStyle:'none'}}>
    <a onClick={(e)=>{lehangas(e,item)}} href='#' style={{textDecoration:'none',color:' rgb(159, 32, 137)',fontWeight:'bold'}}>{item} </a>
    </li>
    </ul>
    </span>  


    )
     
  })

  Innerwear=womencate.womenethnic2.Innerwear.map((item)=>{
    return(
 <span style={{fontWeight:'bold'}} className='flexdirctioncolum'>   
<ul>
  <li style={{listStyle:'none'}}>
    <a onClick={(e)=>{lehangas(e,item)}} href='#' style={{textDecoration:'none',color:' rgb(159, 32, 137)',fontWeight:'bold'}}>{item} </a>
    </li>
    </ul>
    </span>  


    )
     
  })

}


//  men data
let menTopwear=null;
let menBottomwear=null;
let MenAccessories=null;
let MenFootwear=null;

if(fun3){




  


    MenAccessories=womencate?.womenethnic3?.MenAccessories?.map((item)=>{
    return(
 <span style={{fontWeight:'bold'}} className='flexdirctioncolum'>   
<ul>
  <li style={{listStyle:'none'}}>
    <a onClick={(e)=>{men1(e,item)}} href='#' style={{textDecoration:'none',color:' rgb(159, 32, 137)',fontWeight:'bold'}}>{item} </a>
    </li>
    </ul>
    </span>  


    )
     
  })



   MenFootwear=womencate?.womenethnic3?.MenFootwear?.map((item)=>{
    return(
 <span style={{fontWeight:'bold'}} className='flexdirctioncolum'>   
<ul>
  <li style={{listStyle:'none'}}>
    <a onClick={(e)=>{men2(e,item)}} href='#' style={{textDecoration:'none',color:' rgb(159, 32, 137)',fontWeight:'bold'}}>{item} </a>
    </li>
    </ul>
    </span>  


    )
     
  })
}
// kids
let BoysGirls2Years=null;
let Infant02Years=null;
let ToysAccessories=null;
let BabyCare=null;

if(fun4){
  
   BoysGirls2Years =womencate?.womenethnic4?.BoysGirls2Years?.map((item)=>{
    return(
 <span style={{fontWeight:'bold'}} className='flexdirctioncolum'>   
<ul>
  <li style={{listStyle:'none'}}>
    <a onClick={(e)=>{Kids1(e,item)}} href='#' style={{textDecoration:'none',color:' rgb(159, 32, 137)',fontWeight:'bold'}}>{item} </a>
    </li>
    </ul>
    </span>  


    )
     
  })

  Infant02Years =womencate?.womenethnic4?.Infant02Years?.map((item)=>{
    return(
 <span style={{fontWeight:'bold'}} className='flexdirctioncolum'>   
<ul>
  <li style={{listStyle:'none'}}>
    <a onClick={(e)=>{Kids2(e,item)}} href='#' style={{textDecoration:'none',color:' rgb(159, 32, 137)',fontWeight:'bold'}}>{item} </a>
    </li>
    </ul>
    </span>  


    )
     
  })

  ToysAccessories =womencate?.womenethnic4?.ToysAccessories?.map((item)=>{
    return(
 <span style={{fontWeight:'bold'}} className='flexdirctioncolum'>   
<ul>
  <li style={{listStyle:'none'}}>
    <a onClick={(e)=>{Kids3(e,item)}} href='#' style={{textDecoration:'none',color:' rgb(159, 32, 137)',fontWeight:'bold'}}>{item} </a>
    </li>
    </ul>
    </span>  


    )
     
  })




  BabyCare=womencate?.womenethnic4?.BabyCare?.map((item)=>{
    return(
 <span style={{fontWeight:'bold'}} className='flexdirctioncolum'>   
<ul>
  <li style={{listStyle:'none'}}>
    <a onClick={(e)=>{Kids4(e,item)}} href='#' style={{textDecoration:'none',color:' rgb(159, 32, 137)',fontWeight:'bold'}}>{item} </a>
    </li>
    </ul>
    </span>  


    )
     
  })
}

  // Home & Kithcen wala section 
  let KitchenAppliances=null;
  let HomeFurnishing=null;
  let HomeDecor=null;
  let KitchenDining=null;
  let HomeImprovement=null;

if(fun5){
  KitchenAppliances = womencate?.womenethnic5?.KitchenAppliances?.map((item)=><span style={{fontWeight:'bold'}} className='flexdirctioncolum'><ul><li style={{listStyle:'none'}}><a onClick={(e)=>{kichen1(e,item)}} href='#' style={{textDecoration:'none',color:' rgb(159, 32, 137)',fontWeight:'bold'}}>{item}</a></li></ul></span>);
  HomeFurnishing = womencate?.womenethnic5?.HomeFurnishing?.map((item)=><span style={{fontWeight:'bold'}} className='flexdirctioncolum'><ul><li style={{listStyle:'none'}}><a onClick={(e)=>{kichen2(e,item)}} href='#' style={{textDecoration:'none',color:' rgb(159, 32, 137)',fontWeight:'bold'}}>{item}</a></li></ul></span>);
  HomeDecor = womencate?.womenethnic5?.HomeDecor?.map((item)=><span style={{fontWeight:'bold'}} className='flexdirctioncolum'><ul><li style={{listStyle:'none'}}><a onClick={(e)=>{kichen3(e,item)}} href='#' style={{textDecoration:'none',color:' rgb(159, 32, 137)',fontWeight:'bold'}}>{item}</a></li></ul></span>);
  KitchenDining = womencate?.womenethnic5?.KitchenDining?.map((item)=><span style={{fontWeight:'bold'}} className='flexdirctioncolum'><ul><li style={{listStyle:'none'}}><a onClick={(e)=>{kichen4(e,item)}} href='#' style={{textDecoration:'none',color:' rgb(159, 32, 137)',fontWeight:'bold'}}>{item}</a></li></ul></span>);
  HomeImprovement = womencate?.womenethnic5?.HomeImprovement?.map((item)=><span style={{fontWeight:'bold'}} className='flexdirctioncolum'><ul><li style={{listStyle:'none'}}><a onClick={(e)=>{kichen5(e,item)}} href='#' style={{textDecoration:'none',color:' rgb(159, 32, 137)',fontWeight:'bold'}}>{item}</a></li></ul></span>);
}

// Beauty &and Health

let Makeup=null;
let Skincare=null;
let BabyMom=null;
let MensCare=null;
let Healthcare=null;

if(fun6){
  Makeup = womencate?.womenethnic6?.Makeup?.map((item)=><span style={{fontWeight:'bold'}} className='flexdirctioncolum'><ul><li style={{listStyle:'none'}}><a onClick={(e)=>{Beauty1(e,item)}} href='#' style={{textDecoration:'none',color:' rgb(159, 32, 137)',fontWeight:'bold'}}>{item}</a></li></ul></span>);
  
  Skincare = womencate?.womenethnic6?.Skincare?.map((item)=><span style={{fontWeight:'bold'}} className='flexdirctioncolum'><ul><li style={{listStyle:'none'}}><a onClick={(e)=>{Beauty2(e,item)}} href='#' style={{textDecoration:'none',color:' rgb(159, 32, 137)',fontWeight:'bold'}}>{item}</a></li></ul></span>);
  
  BabyMom = womencate?.womenethnic6?.BabyMom?.map((item)=><span style={{fontWeight:'bold'}} className='flexdirctioncolum'><ul><li style={{listStyle:'none'}}><a onClick={(e)=>{Beauty3(e,item)}} href='#' style={{textDecoration:'none',color:' rgb(159, 32, 137)',fontWeight:'bold'}}>{item}</a></li></ul></span>);
  
  MensCare = womencate?.womenethnic6?.MensCare?.map((item)=><span style={{fontWeight:'bold'}} className='flexdirctioncolum'><ul><li style={{listStyle:'none'}}><a onClick={(e)=>{Beauty4(e,item)}} href='#' style={{textDecoration:'none',color:' rgb(159, 32, 137)',fontWeight:'bold'}}>{item}</a></li></ul></span>);
  
  Healthcare = womencate?.womenethnic6?.Healthcare?.map((item)=><span style={{fontWeight:'bold'}} className='flexdirctioncolum'><ul><li style={{listStyle:'none'}}><a onClick={(e)=>{Beauty5(e,item)}} href='#' style={{textDecoration:'none',color:' rgb(159, 32, 137)',fontWeight:'bold'}}>{item}</a></li></ul></span>);
}

// jwellery prodcut ok 

let Jewellery=null;
let menAccessories=null;
let WomenAccessory=null;

if(fun7){
  Jewellery = womencate?.womenethnic7?.Jewellery?.map((item)=><span style={{fontWeight:'bold'}} className='flexdirctioncolum'><ul><li style={{listStyle:'none'}}><a onClick={(e)=>{jwelery1(e,item)}} href='#' style={{textDecoration:'none',color:' rgb(159, 32, 137)',fontWeight:'bold'}}>{item}</a></li></ul></span>);

  menAccessories = womencate?.womenethnic7?.MenAccessories?.map((item)=><span style={{fontWeight:'bold'}} className='flexdirctioncolum'><ul><li style={{listStyle:'none'}}><a onClick={(e)=>{jwelery2(e,item)}} href='#' style={{textDecoration:'none',color:' rgb(159, 32, 137)',fontWeight:'bold'}}>{item}</a></li></ul></span>);

  WomenAccessory = womencate?.womenethnic7?.WomenAccessory?.map((item)=><span style={{fontWeight:'bold'}} className='flexdirctioncolum'><ul><li style={{listStyle:'none'}}><a onClick={(e)=>{jwelery3(e,item)}} href='#' style={{textDecoration:'none',color:' rgb(159, 32, 137)',fontWeight:'bold'}}>{item}</a></li></ul></span>);
}

// Bags and Footwear
let WomenBags = null;
let MenBags = null;
let TravelBags = null;
let menFootwear = null;
let WomenFootwear = null;
let KidsFootwear = null;

if (fun8) {
  WomenBags = womencate?.womenethnic8?.["Women Bags"]?.map((item) => (
    <span style={{ fontWeight: 'bold' }} className='flexdirctioncolum'>
      <ul>
        <li style={{ listStyle: 'none' }}>
          <a  onClick={(e)=>{Bags1(e,item)}} href='#' style={{ textDecoration: 'none', color: 'rgb(159, 32, 137)', fontWeight: 'bold' }}>{item}</a>
        </li>
      </ul>
    </span>
  ));

  MenBags = womencate?.womenethnic8?.["Men Bags"]?.map((item) => (
    <span style={{ fontWeight: 'bold' }} className='flexdirctioncolum'>
      <ul>
        <li style={{ listStyle: 'none' }}>
          <a onClick={(e)=>{Bags2(e,item)}} href='#' style={{ textDecoration: 'none', color: 'rgb(159, 32, 137)', fontWeight: 'bold' }}>{item}</a>
        </li>
      </ul>
    </span>
  ));


  KidsFootwear = womencate?.womenethnic8?.["Kids Footwear"]?.map((item) => (
    <span style={{ fontWeight: 'bold' }} className='flexdirctioncolum'>
      <ul>
        <li style={{ listStyle: 'none' }}>
          <a onClick={(e)=>{Bags3(e,item)}} href='#' style={{ textDecoration: 'none', color: 'rgb(159, 32, 137)', fontWeight: 'bold' }}>{item}</a>
        </li>
      </ul>
    </span>
  ));
}

// Electronics products
let Audio = null;
let MobileAccessories = null;
let SmartWearables = null;

if (fun9) {
  Audio = womencate?.womenethnic9?.Audio?.map((item) => (
    <span style={{ fontWeight: 'bold' }} className='flexdirctioncolum'>
      <ul>
        <li style={{ listStyle: 'none' }}>
          <a onClick={(e)=>{Electronic1(e,item)}} href='#' style={{ textDecoration: 'none', color: 'rgb(159, 32, 137)', fontWeight: 'bold' }}>{item}</a>
        </li>
      </ul>
    </span>
  ));

  MobileAccessories = womencate?.womenethnic9?.["Mobile & Accessories"]?.map((item) => (
    <span style={{ fontWeight: 'bold' }} className='flexdirctioncolum'>
      <ul>
        <li style={{ listStyle: 'none' }}>
          <a onClick={(e)=>{Electronic2(e,item)}} href='#' style={{ textDecoration: 'none', color: 'rgb(159, 32, 137)', fontWeight: 'bold' }}>{item}</a>
        </li>
      </ul>
    </span>
  ));

  SmartWearables = womencate?.womenethnic9?.["Smart Wearables"]?.map((item) => (
    <span style={{ fontWeight: 'bold' }} className='flexdirctioncolum'>
      <ul>
        <li style={{ listStyle: 'none' }}>
          <a onClick={(e)=>{Electronic3(e,item)}} href='#' style={{ textDecoration: 'none', color: 'rgb(159, 32, 137)', fontWeight: 'bold' }}>{item}</a>
        </li>
      </ul>
    </span>
  ));
}

// sport and fitness product ok 
let Fitness = null;
let Sports = null;

if (fun10) {
  Fitness = womencate?.womenethnic10?.Fitness?.map((item) => (
    <span style={{ fontWeight: 'bold' }} className='flexdirctioncolum'>
      <ul>
        <li style={{ listStyle: 'none' }}>
          <a onClick={(e)=>{sport1(e,item)}} href='#' style={{ textDecoration: 'none', color: 'rgb(159, 32, 137)', fontWeight: 'bold' }}>{item}</a>
        </li>
      </ul>
    </span>
  ));

  Sports = womencate?.womenethnic10?.Sports?.map((item) => (
    <span style={{ fontWeight: 'bold' }} className='flexdirctioncolum'>
      <ul>
        <li style={{ listStyle: 'none' }}>
          <a onClick={(e)=>{sport2(e,item)}}  href='#' style={{ textDecoration: 'none', color: 'rgb(159, 32, 137)', fontWeight: 'bold' }}>{item}</a>
        </li>
      </ul>
    </span>
  ));
}

// car and moterbike ok 

let CarAccessories = null;
let MotorbikeAccessories = null;

if (fun11) {
  CarAccessories = womencate?.womenethnic11?.["Car Accessories"]?.map((item) => (
    <span style={{ fontWeight: 'bold' }} className='flexdirctioncolum'>
      <ul>
        <li style={{ listStyle: 'none' }}>
          <a onClick={(e)=>{car1(e,item)}}  href='#' style={{ textDecoration: 'none', color: 'rgb(159, 32, 137)', fontWeight: 'bold' }}>{item}</a>
        </li>
      </ul>
    </span>
  ));

  MotorbikeAccessories = womencate?.womenethnic11?.["Motorbike Accessories"]?.map((item) => (
    <span style={{ fontWeight: 'bold' }} className='flexdirctioncolum'>
      <ul>
        <li style={{ listStyle: 'none' }}>
          <a onClick={(e)=>{car2(e,item)}}  href='#' style={{ textDecoration: 'none', color: 'rgb(159, 32, 137)', fontWeight: 'bold' }}>{item}</a>
        </li>
      </ul>
    </span>
  ));
}

// office suply and stinory ok 

let OfficeSuppliesStationery = null;

if (fun12) {
  OfficeSuppliesStationery = womencate?.womenethnic12?.["Office Supplies and Stationery"]?.map((item) => (
    <span style={{ fontWeight: 'bold' }} className='flexdirctioncolum'>
      <ul>
        <li style={{ listStyle: 'none' }}>
          <a onClick={(e)=>{office(e,item)}} href='#' style={{ textDecoration: 'none', color: 'rgb(159, 32, 137)', fontWeight: 'bold' }}>{item}</a>
        </li>
      </ul>
    </span>
  ));
}

// pet bale product ok 
let PetSupplies = null;

if (fun13) {
  PetSupplies = womencate?.womenethnic13?.["Pet Supplies"]?.map((item) => (
    <span style={{ fontWeight: 'bold' }} className='flexdirctioncolum'>
      <ul>
        <li style={{ listStyle: 'none' }}>
          <a onClick={(e)=>{pet(e,item)}} href='#' style={{ textDecoration: 'none', color: 'rgb(159, 32, 137)', fontWeight: 'bold' }}>{item}</a>
        </li>
      </ul>
    </span>
  ));
}
// Food and Drinks ok 

let FoodAndDrinks = null;

if (fun14) {
  FoodAndDrinks = womencate?.womenethnic14?.["Food & Drinks"]?.map((item, index) => (
    <span key={index} style={{ fontWeight: 'bold' }} className='flexdirctioncolum'>
      <ul>
        <li style={{ listStyle: 'none' }}>
          <a  onClick={(e)=>{food(e,item)}} href='#' style={{ textDecoration: 'none', color: 'rgb(159, 32, 137)', fontWeight: 'bold' }}>
            {item}
          </a>
        </li>
      </ul>
    </span>
  ));
}

// Musical instruments ok 

let MusicalInstruments = null;

if (fun15) {
  
  MusicalInstruments = womencate?.womenethnic15?.[ "Musical Instruments"]?.map((item, index) => (
    <span key={index} style={{ fontWeight: 'bold' }} className='flexdirctioncolum'>
      <ul>
        <li style={{ listStyle: 'none' }}>
          <a onClick={(e)=>{music(e,item)}} href='#' style={{ textDecoration: 'none', color: 'rgb(159, 32, 137)', fontWeight: 'bold' }}>
            {item}
          </a>
        </li>
      </ul>
    </span>
  ));
}

// Books product ok 
let FictionAndNonFiction = null;

if (fun16) {
  FictionAndNonFiction = womencate?.womenethnic16?.["Fiction & Non Fiction"]?.map((item, index) => (
    <span key={index} style={{ fontWeight: 'bold' }} className='flexdirctioncolum'>
      <ul>
        <li style={{ listStyle: 'none' }}>
          <a onClick={(e)=>{Books(e,item)}} href='#' style={{ textDecoration: 'none', color: 'rgb(159, 32, 137)', fontWeight: 'bold' }}>
            {item}
          </a>
        </li>
      </ul>
    </span>
  ));
}
   


  return (
    <div onMouseEnter={addclass} onMouseLeave={reomov} style={{marginTop:0}} className= {`Category ${ishover? "dispalycomp": "" }`} >
      <div className=' d-flex   ' style={{marginTop:200}} >
      
       
      {sareesdata}
      {kurtidata}
      {lehngadata}
      {topwear}
      {Bottomwear}
      {Innerwear}
      {menTopwear}
      {Bottomwear}
      {MenAccessories}
      {MenFootwear}
      {/* kids */}
      {BoysGirls2Years}
      {Infant02Years}
      {ToysAccessories}
      {BabyCare};
      
      {/* home & Kitchen */}
      {KitchenAppliances}
      {HomeFurnishing}
      {HomeDecor}
      {KitchenDining}
      {HomeImprovement}
      {/* Beauti and Health */}
      {Makeup}
      {Skincare}
      {BabyMom}
      {MensCare}
      {Healthcare}
      {/* jweller product ok  */}
      {Jewellery}
      {menAccessories}
     {WomenAccessory}
     {/* Bags and footwear */}
     {WomenBags}
     {MenBags}
     {TravelBags}
     {menFootwear}
     {WomenFootwear}
     {KidsFootwear}
    {/*Electronic product  */}

      {Audio}
    {MobileAccessories}
    {SmartWearables}

    {/* sport and fitness */}
    {Fitness}
    {Sports}
    {/* car and moterbike ok  */}
    {CarAccessories}
    {MotorbikeAccessories}
    {/* office supply and sttinory ok  */}
    {OfficeSuppliesStationery}
    {/* pet supply  */}

    {PetSupplies}
    {/* Food and Drinks ok  */}
    {FoodAndDrinks}
    {/* MUsical INstrumenst ok */}
    {MusicalInstruments}

    {/* Books  product */}
    {FictionAndNonFiction}





      </div>
      
    </div> 


  )
}
