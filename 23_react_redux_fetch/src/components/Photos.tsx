import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DataState, setCurrentPagePhotos } from '../reducer/reducers';

const Photos: React.FC = () => {
    const dispatch = useDispatch();

    const photos = useSelector((state: {data: DataState}) => state.data.photos);
    const currentPage = useSelector((state: {data: DataState}) => state.data.currentPagePhotos);
    const photosPerPage = useSelector((state: {data: DataState}) => state.data.photosPerPage);

    const indexOfLastElement = currentPage * photosPerPage;
    const indexOfFirstElement = indexOfLastElement - photosPerPage;
    const currentPhotos = photos.slice(indexOfFirstElement, indexOfLastElement);//kusotschek kommentarij

    const previousPage = () => {
        dispatch(setCurrentPagePhotos(currentPage - 1));
    }
    const nextPage = () => {
        dispatch(setCurrentPagePhotos(currentPage + 1));
    }

  return (
    <>
        <h2>Photos</h2>
        <ul>
            {currentPhotos.map(photo => (
                <li key={photo.id}>{photo.url}</li>
            ))}
        </ul>
        <button disabled={currentPage === 1 } onClick={previousPage}>Previous Page</button>
        <button disabled={indexOfLastElement >= photos.length} onClick={nextPage}>Next Page</button>
    </>
  );
};

export default Photos;



//Обязательное задание: Отображать информацию о пользователях по аналогии с тем, как мы отображаем 
//информацию о постах и комментариях, без пагинации

//Дополнительное задание: Отображать информацию о фотографиях по аналогии с тем, как мы отображаем 
//информацию о постах и комментариях, с пагинацией. Не забудьте изменить глобальный State и его типизацию