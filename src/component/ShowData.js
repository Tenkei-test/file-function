import React, { useEffect, useState } from 'react';

const ShowData = (props) => {


    const [articles, setArticles] = useState([]);
    useEffect(() => {
        const apiAdd = "https://newsapi.org/v2/top-headlines?"
        const country = "country=" + props.parameter1 + "&"
        const category = "category=" + props.parameter2 + "&"
        const apiKey = "apiKey=4548e98a786c4e9d9e99e4f16de9f37a"
        const url = apiAdd + country + category + apiKey
        fetch(url)
            .then(res => res.json())
            .then(data => setArticles(data.articles))

    }, [])

    return (
        <div>
            <h3>This is show data</h3>
            <h2>Country : {props.parameter1}</h2>
            <h2>Category : {props.parameter2}</h2>
            <table id='students'>
                <tbody>
                    <tr>
                        <th>News Portal</th>
                        <th>Author</th>
                        <th>Time</th>
                        <th>News Title</th>
                    </tr>
                    {

                        articles ?
                            articles.map((article, i) =>
                                i < 5 ?
                                    <tr key={i}>
                                        <td>{article.source.name}</td>
                                        <td>{article.author}</td>
                                        <td>{article.publishedAt}</td>
                                        <td>{article.title}</td>
                                    </tr> : ""

                            )
                            : ""

                    }
                </tbody>
            </table>

        </div>
    );
};

export default ShowData;