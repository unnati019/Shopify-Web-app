import React from 'react'

const Catg = () => {
  const data = [
    {
      cateImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/625px-Apple_logo_black.svg.png",
      cateName: "Apple",
    },
    {
      cateImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png",
      cateName: "Samsung",
    },
    {
      cateImg: "https://w7.pngwing.com/pngs/372/107/png-transparent-oppo-digital-oppo-find-x-oppo-f7-bbk-electronics-oppo-f1s-logo-oppo-text-logo-number.png",
      cateName: "Oppo",
    },
    {
      cateImg: "https://logos-download.com/wp-content/uploads/2022/12/Vivo_Electronics_Logo.png",
      cateName: "Vivo",
    },
    {
      cateImg: "https://www.freepnglogos.com/uploads/xiaomi-png/xiaomi-logo-png-transparent-xiaomi-logo-images-mi-logo-2.png",
      cateName: "Redmi",
    },
    {
      cateImg: "https://www.freepnglogos.com/uploads/sony-png-logo/sony-unlocks-surprising-advertising-wins-with-segmentation-png-logo-6.png",
      cateName: "Sony",
    },
  ]
  return (
    <>
        <div className="category">
          <div className="chead d_flex">
            <h1>Brands</h1>
            <h1>Shops</h1>
          </div>
          {data.map((value, index)=>{
            return <div className="box f_flex" key={index}>
              <img src={value.cateImg} alt=''/>
              <span>{value.cateName}</span>
            </div>

          })}
          <div className="box box2">
            <button>Veiw All Brands</button>
          </div>
        </div>
    </>
  )
}

export default Catg;