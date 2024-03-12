import React from 'react';
import Heading from '../Shared/Heading';
import ProductCard from './ProductCard';

// Images import
import Img1 from '../../assets/products/p-1.png';
import Img2 from '../../assets/products/p-2.png';
import Img3 from '../../assets/products/p-3.png';
import Img4 from '../../assets/products/p-4.png';
import Img5 from '../../assets/products/p-5.png';

const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Boat Headphone",
        price: "120",
        aosDelay: "0",
    },
    {
        id: 2,
        img: Img2,
        title: "Rocky Mountain",
        price: "120",
        aosDelay: "200",
    },
    {
        id: 3,
        img: Img3,
        title: "Goggles",
        price: "320",
        aosDelay: "400",
    },
    {
        id: 4,
        img: Img4,
        title: "Printed",
        price: "220",
        aosDelay: "600",
    },
];

const Products = () => {
    return (
        <div>
            <div className='container'>
                {/* Header section */}
                <Heading title='Our Products' subtitle={"Explore Our Product"} />
                {/* Body section */}
                <ProductCard data={ProductsData} />
                <ProductCard data={ProductsData} />
            </div>
        </div>
    );
};

export default Products;
