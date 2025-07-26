

export default function Productcategory({ cate ,setfilter}) {
  // console.log(cate);

 const categories= cate.map((cat,i) => {
        // console.log(cat);
        return (
            <li style={{cursor:"pointer", width:150}} className=" list-unstyled p-1 m-1 " onClick={()=>setfilter(cat.slug)}>{cat.slug} 
            </li>


        );
      })

  return (
    <div>
      <p style={{ fontSize: 20 }}>category</p>
      <ul>
        {categories}
      </ul>
      
    </div>
  );
}
