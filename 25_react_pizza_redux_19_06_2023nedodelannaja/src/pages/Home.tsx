import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectFilter } from '../redux/slices/filterSlice';
import { selectSearch } from '../redux/slices/searchSlice';
import { useDispatch } from 'react-redux';
import Categories from '../components/Categories';
import Sorting from '../components/Sorting';
import Cards from '../components/Cards';
import Pagination from '../components/Pagination';
import { fetchItems } from '../redux/slices/itemSlice';

const Home: React.FC = () => {
    const { categoryId, sortingItem, categoryNames, currentPage } = useSelector(selectFilter);
    const { searchValue } = useSelector(selectSearch);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            // @ts-ignore
            fetchItems({
                categoryId,
                sortingItem,
                searchValue,
                currentPage
            })
        )
    }, [categoryId, sortingItem, searchValue, currentPage])//kashdij ras kogda schto to menaetsa sanowo sapukaj fetch sapros

    return (
        <>
            <section>
                <Categories />
                <Sorting />
            </section>
            <Cards title={`${categoryNames[categoryId]} pizza's`} />
            <Pagination />
        </>
    );
};

export default Home;