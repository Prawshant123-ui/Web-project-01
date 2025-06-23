
import React from 'react';

function Menu() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-orange-600 text-center mb-10 font-roboto">
        Menu
      </h1>

      {/* Mo:Mo Section */}
      <h2 className="text-2xl font-bold text-orange-500 my-8 font-roboto">Mo:Mo Section</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <FoodCard name="Jhol Mo:Mo" img="https://preview.redd.it/homemade-jhol-momo-v0-i796a5ob8vk91.jpg?width=1080&crop=smart&auto=webp&s=6f0c0b79ca70f1c8cea123678176a3e340adcadd" />
        <FoodCard name="Buff Mo:Mo" img="https://th.bing.com/th/id/OIP.27sPAVWWSV_zhTGmEeecigHaE8?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3" />
        <FoodCard name="Chicken Mo:Mo" img="https://th.bing.com/th/id/R.686eea5b785d964e9c6f5aa622ec8db6?rik=I2e8p9gFjfaHeg&riu=http%3a%2f%2frecipedose.com%2fwp-content%2fuploads%2f2013%2f03%2fChicken-momos.jpg&ehk=P8WqN4eTADZLNRHw%2f58ok2K00IOoMqab1qmn9DrSLIw%3d&risl=1&pid=ImgRaw&r=0" />
        <FoodCard name="Chilli Mo:Mo" img="https://th.bing.com/th/id/OIP.jOr5Rhxf5Wr7cajVeTFK8AHaEK?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3" />
      </div>

      {/* Biryani Section */}
      <h2 className="text-2xl font-bold text-orange-500 my-8 font-roboto">Biryani Section</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <FoodCard name="Fish Biryani" img="https://th.bing.com/th/id/OIP.JH0E_Tdm3jDDF-DPUZ9v-gHaGS?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3" />
        <FoodCard name="Veg Biryani" img="https://th.bing.com/th/id/OIP.LadujoU81UAUhQjy9gElUwHaHa?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3" />
        <FoodCard name="Chicken Biryani" img="https://spicecravings.com/wp-content/uploads/2021/04/Chicken-Biryani-Featured-2.jpg" />
        <FoodCard name="Paneer Biryani" img="https://th.bing.com/th/id/OIP.W_jE-_0a1btwW_hI9YF7iwHaHa?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3" />
      </div>

      {/* Seafood Section */}
      <h2 className="text-2xl font-bold text-orange-500 my-8 font-roboto">Seafood Section</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <FoodCard name="Prawn" img="https://th.bing.com/th/id/OIP.pP5SGZCpAWOJlAv6L1IjKwHaHa?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3" />
        <FoodCard name="Fish" img="https://feastwithsafiya.com/wp-content/uploads/2021/08/Baked-fish-masala-recipe.jpg" />
        <FoodCard name="Crab" img="https://th.bing.com/th/id/OIP.qMCSoFKmJC_1AvHhaAqhJAHaHa?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3" />
        <FoodCard name="Shrimp" img="https://th.bing.com/th/id/R.691dd7c7e92f572d123034cbb19c6f3c?rik=O9xXaY1GNACJIg&pid=ImgRaw&r=0" />
      </div>
       {/* Dessert Section */}
      <h2 className="text-2xl font-bold text-orange-500 my-8 font-roboto">Dessert Section</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <FoodCard name="Ice Cream" img="https://th.bing.com/th/id/OIP.Z2rbbXU5A4uQHYJCzBRfoQHaF_?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3" />
        <FoodCard name="Cake" img="https://th.bing.com/th/id/OIP.MuGX1Q2dj7SLrWr8ijLg7gHaHa?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3" />
        <FoodCard name="pineapple dessert" img="https://th.bing.com/th/id/OIP.cgRP0SC-KLLi72BKIv9dKwHaLC?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3" />
        <FoodCard name="chocolate dessert" img="https://th.bing.com/th/id/R.6e2664b5d36e472ec18e99b4c9e661aa?rik=VbGJmgKI7TeiyA&pid=ImgRaw&r=0" />
      </div>
    </div>
  );
}

// Reusable card component
function FoodCard({ name, img }) {
  return (
    <div className="bg-orange-100 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 font-roboto">{name}</h3>
      </div>
      <img src={img} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4 mt-auto space-y-2">
        <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded w-full font-roboto">
          Order Now!!
        </button>
      </div>
    </div>
  );
}

export default Menu;

