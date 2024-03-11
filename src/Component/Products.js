import axios from 'axios';
import React, { useEffect, useState } from 'react'
import eyeIcon from '../assets/images/eye-fill.svg';
import productDetails from './ProductDetails';
import DailogBox from './DailogBox';
import ProductDetails from './ProductDetails';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';



export default function Product() {
    const [productDetails, setproductDetails] = useState([]);
    const [productData, setProductData] = useState({});
    const [showProduct, setShowProduct] = useState(false)
    const [addNewProduct, setAddNewProduct] = useState('');
    const [showAlterMessage,setShowAlterMessage]=useState(false);
    const history = useHistory()

    useEffect(() => {
        const apiUrl = 'https://dummyjson.com/products';
        console.log(123);
        axios.get(apiUrl)
            .then(response => {
                setproductDetails(response.data.products)
                console.log(response.data.products)
            })
            .catch(error => {
                console.error('Error making get request:', error);
            });
    }, []);

    const getProductDetails = (data) => {
        console.log(data);
        setProductData(data);
        setShowProduct(true);
    }

    const showUpdatedText = (text) => {
        console.log(text);
        setShowProduct(false);
    }

    const addProducttoPrent = (product) => {
        setAddNewProduct(product);
        alert(`product successfully added, ${product}`)
        setShowAlterMessage(true)
        setTimeout(()=>{
            setShowAlterMessage(false);
        },3000)
    }

    return (
        <div>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                ADD
            </button> 
            <div>
            {showAlterMessage && <div class="alert alert-primary" role="alert">
                {addNewProduct}
            </div>}
            </div>
            {showProduct === false ?
                (<table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">TITLE</th>
                            <th scope="col">PRICE</th>
                            <th scope="col">DISCOUNTPERCENTAGE</th>
                            <th scope="col">STOCK</th>
                            <th scope="col">IMAGES</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productDetails.map((item) =>
                        (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>{item.discountPercentage}</td>
                                <td>{item.stock}</td>
                                <td>
                                    <ul className='proImgList'>
                                        {item.images.map((image, index) => (
                                            <li key={index} className='proImg'><img src={image} alt='eyeimage' /></li>
                                        ))}
                                    </ul>
                                </td>
                                <td><img src={eyeIcon} alt='show' onClick={() => getProductDetails(item)} /></td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>) :
                (<ProductDetails productData={productData} updatedText={showUpdatedText} />)}
            <DailogBox productadd={addProducttoPrent} />
        </div >
    )
}