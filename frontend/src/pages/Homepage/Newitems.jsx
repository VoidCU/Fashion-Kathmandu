import Newarrivalscard from '../../components/Cards/Newarrivalscard';
function Newitems({ newestItems }) {
  return (
    <>
      <div className="pt-14" id="new-in">
        <div className=" max-w-5xl m-auto font-bold text-2xl px-4">
          New Arrivals
        </div>
        <div className="max-w-6xl m-auto p-4 md:pt-4 md:pb-14 flex gap-4 flex-col md:flex-row md:flex-wrap justify-center items-center">
          {newestItems.map((item) => (
            <Newarrivalscard key={item.slug} newitems={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Newitems;
