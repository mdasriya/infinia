import React from 'react'

const products = [
    {
      id: 1,
      name: 'Doors & Door Frames',
      href: 'DoorFrams',
      price: '$48',
      imageSrc: 'https://5.imimg.com/data5/SELLER/Default/2020/8/CM/EE/QL/101519832/wpc-door-frame-500x500.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Sliding window profiles & Window Frames',
      href: '#',
      price: '$35',
      imageSrc: 'https://img.freepik.com/free-vector/wooden-old-window-with-beautiful-curtains-potted-plants_1284-59190.jpg?w=740&t=st=1708161448~exp=1708162048~hmac=9735d213047e8cd90ae9db1f71714d737f5e28c25ef494e4554e9fc39648a3e3',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: ' Fly-ash Brick Pallets',
      href: 'Flyash_Brick_pallets',
      price: '$89',
      imageSrc: 'https://5.imimg.com/data5/ANDROID/Default/2023/2/BC/EB/CD/101519832/product-jpeg-500x500.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Boards & Panels',
      href: 'Boards_panels',
      price: '$35',
      imageSrc: 'https://5.imimg.com/data5/SELLER/Default/2022/12/OZ/DZ/CD/101519832/pre-laminated-particle-board-500x500.jpeg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 4,
      name: 'Jalis',
      href: 'jails',
      price: '$35',
      imageSrc: 'https://5.imimg.com/data5/ANDROID/Default/2022/12/XN/WI/BU/101519832/product-jpeg-500x500.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 4,
      name: ' Planks & Battens',
      href: '#',
      price: '$35',
      imageSrc: 'https://infiniaa.vercel.app/planks.jpg',
      imageAlt: 'planks',
    },
    {
      id: 4,
      name: 'Furniture',
      href: 'furniture',
      price: '$35',
      imageSrc: 'https://5.imimg.com/data5/SELLER/Default/2022/9/FL/IH/QM/101519832/recycle-plastic-sheet-furniture-500x500.jpeg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 4,
      name: 'Shuttering & Formwork',
      href: 'Shuttering_formwork',
      price: '$35',
      imageSrc: 'https://5.imimg.com/data5/SELLER/Default/2023/3/292998998/CN/ZF/FP/101519832/rrp-shuttering-plywood-500x500.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 4,
      name: 'Roofing & Flooring solutions',
      href: 'Roofing_Flooring_Solution',
      price: '$35',
      imageSrc: 'https://5.imimg.com/data5/ANDROID/Default/2023/2/WK/OT/RD/101519832/product-jpeg-500x500.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 4,
      name: 'Construction Blocks',
      href: 'bricks',
      price: '$35',
      imageSrc: 'https://5.imimg.com/data5/SELLER/Default/2022/12/NN/LX/UL/101519832/facing-clay-brick-250x250.jpeg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 4,
      name: 'Combustion Fuel',
      href: '#',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // More products...
  ]

const RelatedProducts = () => {
  return (
    <div>
     <div className="text-center">
     <h1 className="text-3xl font-bold lg:-mt-10 md:-mt-32 md:-mb-10 sm:-mt-28 sm:-mb-10 ssm:-mt-20 ssm:-mb-10 border-b pl-4">Our Products</h1>


</div>

<div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 sm:px-8 mv:px-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 h-[200px]  aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-lg text-gray-700">{product.name}</h3>
              {/* <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p> */}
            </a>
          ))}
        </div>
      </div>
    </div>

    </div>
  )
}

export default RelatedProducts
