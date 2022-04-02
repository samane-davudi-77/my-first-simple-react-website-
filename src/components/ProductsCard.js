import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';



const ProductsCard = () => {
    useEffect(() => {
        const url = "https://jsonplaceholder.typicode.com/users"
        const fetchData = async () => {
            try {
                const res = await fetch(url);
                const json = await res.json();
                console.log(json);
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData();

    },[]);



    return ( 
        <>
        <Card>
            <Card.Img />
        </Card>
        </>
     );
}
 
export default ProductsCard;