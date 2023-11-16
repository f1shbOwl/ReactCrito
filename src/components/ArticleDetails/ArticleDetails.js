import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const formattedDate = new Date(dateString).toLocaleDateString('sv-SV', options);
    return formattedDate;
  };

const ArticleDetails = () => {
  const { id } = useParams();
  const [article, setArticleDetails] = useState(null);

  useEffect(() => {
    getArticleDetails();
  }, []);

  const getArticleDetails = async () => {
    if (id !== undefined) {
      const result = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${id}`);

      if (result.status === 200) {
        setArticleDetails(await result.json());
      }
    }
  };



return article ? 
  (
    <div className="article-details">
        <div className="container">
            <div className="article">
                <div className="section-title">
                    <h2>{article.title}</h2>
                </div>
                <div className="article-info">
                    <p>{article.author}</p>
                    <p>{formatDate(article.published)}</p>
                    <p>{article.category}</p>
                </div>
                <img src={article.imageUrl}></img>
                <p className="content">{article.content}</p> 
            </div>
        </div>
    </div>
  )
:
  (
    <div className="missing-title">
      <h2>No article found</h2>
    </div>
  )

};

export default ArticleDetails;


// kod ifrån chat-gpt
// const ArticleDetails = () => {
//   const { id } = useParams();
//   const [articleDetails, setArticleDetails] = useState(null);

//   useEffect(() => {
//     const getArticleDetails = async () => {
//       try {
//         const result = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${id}`);
//         const data = await result.json();
//         setArticleDetails(data);
//       } catch (error) {
//         console.error('Error fetching article details:', error);
//       }
//     };

//     getArticleDetails();
//   }, [id]);

//   if (!articleDetails) {
//     return <p>Loading...</p>;
//   }