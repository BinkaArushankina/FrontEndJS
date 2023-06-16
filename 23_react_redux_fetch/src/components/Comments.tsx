import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DataState, setCurrentPageComments } from '../reducer/reducers';

const Comments: React.FC = () => {
    const dispatch = useDispatch();

    const comments = useSelector((state: {data: DataState}) => state.data.comments);
    const currentPage = useSelector((state: {data: DataState}) => state.data.currentPageComments);
    const commentsPerPage = useSelector((state: {data: DataState}) => state.data.commentsPerPage);

    const indexOfLastElement = currentPage * commentsPerPage;
    const indexOfFirstElement = indexOfLastElement - commentsPerPage;
    const currentComments = comments.slice(indexOfFirstElement, indexOfLastElement);//kusotschek kommentarij

    const previousPage = () => {
        dispatch(setCurrentPageComments(currentPage - 1));
    }
    const nextPage = () => {
        dispatch(setCurrentPageComments(currentPage + 1));
    }

  return (
    <>
        <h2>Comments</h2>
        <ul>
            {currentComments.map(comment => (
                <li key={comment.id}>{comment.body}</li>
            ))}
        </ul>
        <button disabled={currentPage === 1 } onClick={previousPage}>Previous Page</button>
        <button disabled={indexOfLastElement >= comments.length} onClick={nextPage}>Next Page</button>
    </>
  );
};

export default Comments;