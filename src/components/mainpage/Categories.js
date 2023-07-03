import React from 'react';

const Categories = () => {
    const data = [
        {
            cateImg:"https://cdn-icons-png.flaticon.com/512/3205/3205424.png",
            cateName:"Fashion",
        },
        {
            cateImg: "https://static.thenounproject.com/png/2881991-200.png",
            cateName: "Electronic",
          },
          {
            cateImg:"https://www.freeiconspng.com/thumbs/car-icon-png/car-icon-png-22.png",
            cateName: "Cars",
          },
          {
            cateImg: "https://cdn-icons-png.flaticon.com/512/15/15739.png",
            cateName: "Home & Garden",
          },
          {
            cateImg: "https://cdn-icons-png.flaticon.com/512/241/241509.png",
            cateName: "Gifts",
          },
          {
            cateImg: "https://cdn-icons-png.flaticon.com/512/4472/4472616.png",
            cateName: "Music",
          },
          {
            cateImg: "data:image/png;base64,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",
            cateName: "Health & Beauty",
          },
          {
            cateImg: "https://i.pinimg.com/originals/7d/32/76/7d3276fa0e4d0b9fe3b631a8fd62b948.png",
            cateName: "Pets",
          },
          {
            cateImg: "https://static.thenounproject.com/png/1183099-200.png",
            cateName: "Baby Toys",
          },
          {
            cateImg: "https://cdn-icons-png.flaticon.com/512/3724/3724720.png",
            cateName: "Groceries",
          },
          {
            cateImg: "https://w7.pngwing.com/pngs/360/232/png-transparent-computer-icons-the-book-thief-book-angle-rectangle-curriculum-thumbnail.png",
            cateName: "Books",
          },
    ]
  return (
    <>
        <div className="category">
            {
                data.map((value,index) => {
                    return(
                        <div className="box f_flex" key={index}>
                            <img src={value.cateImg} alt=""/>
                            <span>{value.cateName}</span>
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}

export default Categories;