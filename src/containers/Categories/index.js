import React, { useEffect } from "react";
import "./Categories.scss"
import { useDispatch, useSelector } from "react-redux";
import GetCategories from "../../redux/Actions/CatsCategoriesAction";
import { CatsCategories } from "../../redux/Selectors";
import classNames from "classnames";




const Categories = ({ setcategoriesId, categoriesId }) => {

    const dispatch = useDispatch();
    const CategoriesData = useSelector(CatsCategories);

    useEffect(() => {
        dispatch(GetCategories())

    }, [dispatch])



    const sortabeleCategoriesData = CategoriesData.sort((a, b) => a.id - b.id)

    const handleChangeCategories = (id) => setcategoriesId(id)
    const CategoriesList = sortabeleCategoriesData?.map(({ id, name }) => (
        <p onClick={() => handleChangeCategories(id)} className={classNames("aside__content__item", { active: categoriesId === id })} key={id}>{name}</p>
    )
    )

    return (
        <aside className="aside">
            <div className="aside__content">
                <p className="aside__content__title" >My Categories</p>
                {CategoriesList}
            </div>
        </aside>
    )
}
export default Categories