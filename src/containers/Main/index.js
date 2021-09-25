import React, { useEffect, useState } from "react";
import "./Main.scss"
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import GetData from "../../redux/Actions/CatsListAction";
import { CatsList, dataLoading } from "../../redux/Selectors";
import Categories from "../Categories";




const Main =()=>{
    //   const [page, setPage] = useState(1);
  const [categoriesId, setcategoriesId] = useState(1);
  const [page, setPage] = useState(1);
//   const width = useWindowSize();
const dispatch = useDispatch();

useEffect(() => {
    dispatch(GetData(categoriesId,page))
    
}, [categoriesId, dispatch, page])
const Data = useSelector(CatsList);
const Loading = useSelector(dataLoading);
console.log(page,"page")


const CatsData = Data?.map(item =>(
    
        <img key={item.id} className="main__content__item__img" width="100px" height="100px" alt="img" src={item.url}/>
    
))
const handleSetPage =()=>setPage(page +1)

    return(
        <section className="container">
        <div className="main">
          
            <div className="main__content">
                  {Loading && <Loader/>}
                <div  className="main__content__item"> {CatsData}</div>
{ CatsData.length?
                        <button className="more_btn" onClick={handleSetPage}>
                       more
                    </button>
:null}
            </div>
            <Categories setcategoriesId={setcategoriesId} categoriesId={categoriesId}/>

        </div>

        </section>
    )
}

export  default Main