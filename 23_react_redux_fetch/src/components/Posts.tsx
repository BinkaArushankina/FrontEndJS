import React from 'react';
import { useSelector , useDispatch} from 'react-redux';
import { DataState, setCurrentPagePosts } from '../reducer/reducers';

//4.
const Posts: React.FC = () => {
    //ljuboe ism glob state wnutri metoda dispatch()
    const dispatch = useDispatch();//4 rabotaem s infoj kotoruju napolutschali
    //s pomoschju huka useSelector polutschaem infu is globalnogo state
    const posts = useSelector((state: {data: DataState}) => state.data.posts);//prinimaet starij state,  a woswr ismenonij
    const currentPage = useSelector((state: {data: DataState}) => state.data.currentPagePosts);
    const postPerPage = useSelector((state: {data: DataState}) => state.data.postsPerPage);

    //index poslednego posta na stranize
    const indexOfLastPost = currentPage * postPerPage;// polutschem index poslednego massiwa =  str * kolwo postow na str(5 str 10 strotschka = 50 index posta)
    // index perwogo posta na stranize
    const indexOfFirstPost = indexOfLastPost - postPerPage;// is lastposta - to tschislo postow kotoroe mi widim na str
    // is wsech posts polutschem tscastj postow neobchodimie dlja sootwetstwujuschej stranizi
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);// polutschem posti akt dlja etoj str, is wsech 100 ppostow polutscheam slice is 1 wkljutsch i bes poslednego

    const previousPage = () => {
        dispatch(setCurrentPagePosts(currentPage - 1));//str aktualnaja -1 i perelesnuli obratno(tolko wnutri dispatcha())
    }

    const nextPage = () => {
        dispatch(setCurrentPagePosts(currentPage + 1));//perelisnuli na sled str
    }
//disabled knopka ne klikabelna, kogda currentPage ==1 // schtobi ne ujti na -1 str kotoroj net, str40 naoborot
//Otoraschaem polutschennuju wische tschast postow w katschestwe elm spiska

  return (
    <>
        <h2>Posts</h2>
        <ul>
            { currentPosts.map((post) => (
                <li key={post.id}>{post.title}</li>//proitiriruj massiw currentPost i polutschem 1 elm a woswr, html jsx sost is odnogo li s atributom(obasateln) key(unikalnim) i contentom post title
            ))}
        </ul>
        <button disabled={currentPage === 1} onClick={previousPage}>Previous Page</button>
        <button disabled={indexOfLastPost >= posts.length} onClick={nextPage}>Next Page</button>
    </>
  );
  
};

export default Posts;