import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const formattedDate = new Date(dateString).toLocaleDateString('sv-SV', options);
    return formattedDate;
  };

const ArticleDetails = () => {
  const { id } = useParams();
  const [articleDetails, setArticleDetails] = useState(null);

  useEffect(() => {
    const getArticleDetails = async () => {
      try {
        const result = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${id}`);
        const data = await result.json();
        setArticleDetails(data);
      } catch (error) {
        console.error('Error fetching article details:', error);
      }
    };

    getArticleDetails();
  }, [id]);

  if (!articleDetails) {
    return <p>Loading...</p>;
  }

  console.log('Published Date from API:', articleDetails.published);



  return (
    <div className="article-details">
        <div className="container">
            <div className="article">
                <div className="section-title">
                    <h2>{articleDetails.title}</h2>
                </div>
                <div className="article-info">
                    <p>{articleDetails.author}</p>
                    <p>{formatDate(articleDetails.published)}</p>
                    <p>{articleDetails.category}</p>
                </div>
                <img src={articleDetails.imageUrl}></img>
                <p className="content">{articleDetails.content}</p> 
            </div>
        </div>
    </div>
  );
};

export default ArticleDetails;