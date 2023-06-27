import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DataState, setCurrentPagePhotos } from '../reducer/reducers';

const Photos: React.FC = () => {
    const dispatch = useDispatch();

    //DRY - Don't repeat yourself
    //const photos = useSelector((state: {data: DataState}) => state.data.photos);
    //const currentPage = useSelector((state: {data: DataState}) => state.data.currentPagePhotos);
    //const photosPerPage = useSelector((state: {data: DataState}) => state.data.photosPerPage);

    //bolee korotkaja sapis etich 3 straniz
    const {photos, currentPagePhotos, photosPerPage} = useSelector((state: {data: DataState}) => state.data);

    // esli po 10 fotok, i mi na 5 stranize, to indexlastelem=50 , a indexoffirstelm=40 (first wkljutschen , a last net)
    const indexOfLastElement = currentPagePhotos * photosPerPage;
    const indexOfFirstElement = indexOfLastElement - photosPerPage;
    const currentPhotos = photos.slice(indexOfFirstElement, indexOfLastElement);//kusotschek kommentarij, startowij wkljutschen a lastowij index net. otobraschajutsa tolko te 10, na stranize kotoroj mi nachodimsa

    const previousPage = () => {
        dispatch(setCurrentPagePhotos(currentPagePhotos - 1));
    }
    const nextPage = () => {
        dispatch(setCurrentPagePhotos(currentPagePhotos + 1));
    }

  return (
    <>
        <h2>Photos</h2>
    
        <ul>
            {currentPhotos.map(photo => (
                <li key={photo.id}><img src={photo.thumbnailUrl} alt="Photo1" /></li>
            ))}
        </ul>
        <button disabled={currentPagePhotos === 1 } onClick={previousPage}>Previous Page</button>
        <button disabled={indexOfLastElement >= photos.length} onClick={nextPage}>Next Page</button>
    </>
  );
};

export default Photos;



//Обязательное задание: Отображать информацию о пользователях по аналогии с тем, как мы отображаем 
//информацию о постах и комментариях, без пагинации

//Дополнительное задание: Отображать информацию о фотографиях по аналогии с тем, как мы отображаем 
//информацию о постах и комментариях, с пагинацией. Не забудьте изменить глобальный State и его типизацию