import Topcard from '../../components/Cards/Topcard';
function Topitems() {
  const topitemsArray = [
    {
      name: 'Premium Touser 1',
      price: 30,
      image: '/images/item2.png',
    },
    {
      name: 'Premium Touser 2',
      price: 40,
      image: '/images/item1.png',
    },
    {
      name: 'Premium Touser 3',
      price: 50,
      image: '/images/item2.png',
    },
  ];
  return (
    <>
      <div className="max-w-6xl m-auto p-4 md:pt-4 md:pb-14 flex gap-4 flex-col md:flex-row justify-center items-center">
        {topitemsArray.map((item, index) => (
          <Topcard key={index} topitems={item} />
        ))}
      </div>
    </>
  );
}

export default Topitems;
