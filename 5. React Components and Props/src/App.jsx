import React from "react";
import Card from "../src/components/Card";

function App()
{
    return(
        <div>
            <Card imgURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvq_K96MubxV6ZwhJBYvsBVUwtjB2e5Mm6r57Sgdh7HYGIAqXaqMkGjHzNnM2pfgoftfwP8QTVdQnnovEZRCMFCKj1IAbnHrYTxZfCUg&s=10"
                name="Anne Hathaway"
                email="a.hathaway@example.com"
                tel="+123 456789" />
            <Card imgURL="https://variety.com/wp-content/uploads/2023/10/GettyImages-1495259778-e1696875689554.jpg?w=681&h=383&crop=1"
                name="Tom Holland"
                email="tom.h@example.com"
                tel="+123 1324 2313" />
        </div>
    );
};

export default App;