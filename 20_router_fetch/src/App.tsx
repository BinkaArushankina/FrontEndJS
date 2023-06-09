import React, { useEffect, useState } from 'react'; //schisnenij zikl useEffect, useState sochranaet opred sostojania i c nimi moschno raotatj potom
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';//pomogajut s perehodom na drugie stranizi wnutri naschego priloschenia
import Users from './components/Users';
import Posts from './components/Posts';
import Comments from './components/Comments';
import { AppContext, IComment, IPost, IUser } from './utils/util';

//sdes e etom priloschenii mi  i tscheres rpopsi raspetschatiwaem i tscheres context.Provider , tolko usersow snatschala a potom 3 wariantom tosche Context.Provider no usche i userow i posti i commenti

const baseUrl = 'https://jsonplaceholder.typicode.com';

//interface IUser {//opisiwaem tipi kommentariew, tipi users i postow, kotorie prihodat s serwera
//    id: number;
//    name: string;
//    email: string;
//}  

//interface IComment {//tipisiroem neobhodimue infu
//  id: number;
//  body: string;
//}  

//interface IPost {
//  id: number;
//  title: string;
//  body: string;
//}  

enum MenuItems { //varianti na kotorie kliknut, ta infa sochranaetsa a potom otobraschaetsa
  Users = 'users',
  Comments = 'comments',
  Posts = 'posts'
}

//logika w roditelskom , a resultat w dotschernem

function App() {
  //sdes w roditelskom estj nabor dannich i mi hotim peredatj ee w dotschernie elm is app w comments, posts, users, eto nasiwaetsa prokinutj propsi is roditelskogo w dotschernij
   //sosdali 3 huka sostojania dlja sochranenia dannich posle odnogo is trech potenzialnich saprosow
  const [users, setUsers] = useState<IUser[]>([]); //natschalnoe snatschenie huka useState, massiwa IUser
  const [comments, setComments] = useState<IComment[]>([]);
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect (( ) =>{ //huk kotorij rabotaet s schisnenim zilom komponenta, kak budto eta funkzia, otrabotaet po sagruzke stranizi App, tri rarsa odna i ta sche funkzia po kaschdomu parametru
    fetchData(MenuItems.Users);
    fetchData(MenuItems.Comments);
    fetchData(MenuItems.Posts);
  }, [] );

  const fetchData = async (menuItem: MenuItems) => { //polutschaju schto hotschu sagrusit i schto eto budet tip dannich MenuItems
      try {
        //delaem sapros na serwer w sawisimosti ot togo, schto prinimaem w katschestwe parametrow
        const response = await fetch(`${baseUrl}/${menuItem}`);
        const data = await response.json();

        switch (menuItem) { //naschmu  users raspetschataetsa ego dannie na stranize s serwera
          case MenuItems.Users:
            setUsers(data);
            break;
          case MenuItems.Comments:
            setComments(data);
            break; 
          case MenuItems.Posts:
            setPosts(data);
            break; 
          default: break;  
        }
      } catch (error) {
        console.log(error);
        
      }
  }

  //instrumenti marschrutisazii, no w nego nado peredatj infu w function App i ottuda w usersi commentsi posti
  //na glawnoj stranize otobr eti 3 knopki , a link eto obwertka tega, schtobi perekidiwali na druguju stranizu, w 'to' napisatj kuda mi hotim schtobi nas perekinuli 
  //ostalnie routi ne startowie 83-86 budut rabotatj esli mi naschmem a ne kogda sagrusitsa straniza
  //w stroke 83 mi goworim poloschi poschalujsta po adressu /users elm Users s dannimi users
  return (//w value peeredatj tot nabor infi, schto mi hotim peredawatj
  <AppContext.Provider value={{users, comments, posts}}>
    {/*<Context.Provider value={users}>esli hotim tolko userow peredatj*/}
      <Routes>
         <Route path="/" element={<>
            <Link to="/users"><button>Users</button></Link>
            <Link to="/posts"><button>Posts</button></Link>
            <Link to="/comments"><button>Comments</button></Link></>} />
            {/*<Users (naswanie komponenta) users (atribut komponenta) ={users} snatschenie atributa)
            => sdes w atribute users peredaetsa w komponent infa o polsowatelach polutschennaja s serwera i is (Users class) */}
         <Route path="/users" element={<Users users={users}/>}  />
         <Route path="/posts" element={<Posts posts={posts}/>}  />
         <Route path="/comments" element={<Comments comments={comments}/>}  />
      </Routes>
    {/*</Context.Provider>*/}
  </AppContext.Provider>
  );
}

export default App;
