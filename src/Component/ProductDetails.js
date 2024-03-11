import React from 'react'


export default function ProductDetails(props) {
  const getProductUpdate = () => {
    const updateText = "Product Successfully Updated ..!!";
    props.updatedText(updateText);
    }

  return (
    <div>
      <p onClick={getProductUpdate}>Go Back To Products Page</p>
    </div>
  )
}
