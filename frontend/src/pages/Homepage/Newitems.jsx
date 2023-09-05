import Newarrivalscard from '../../components/Cards/Newarrivalscard';
function Newitems() {
  const topitemsArray = [
    {
      category: 'Touser',
      name: 'Premium Touser 1',
      price: 30,
      image: '/images/item2.png',
    },
    {
      category: 'Touser',
      name: 'Premium Touser 2',
      price: 40,
      image: '/images/item1.png',
    },
    {
      category: 'Touser',
      name: 'Premium Touser 3',
      price: 50,
      image: '/images/item2.png',
    },
    {
      category: 'Touser',
      name: 'Premium Touser 1',
      price: 30,
      image: '/images/item2.png',
    },
    {
      category: 'Touser',
      name: 'Premium Touser 2',
      price: 40,
      image: '/images/item1.png',
    },
    {
      category: 'Touser',
      name: 'Premium Touser 3',
      price: 50,
      image: '/images/item2.png',
    },
  ];
  return (
    <>
      <div className="md:pt-20" id="new-in">
        <div className=" max-w-5xl m-auto font-bold text-2xl px-4">
          New Arrivals
        </div>
        <div className="max-w-6xl m-auto p-4 md:pt-4 md:pb-14 flex gap-4 flex-col md:flex-row md:flex-wrap justify-center items-center">
          {topitemsArray.map((item, index) => (
            <Newarrivalscard key={index} newitems={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Newitems;
