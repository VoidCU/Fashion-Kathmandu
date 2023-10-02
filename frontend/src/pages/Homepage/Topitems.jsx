import Topcard from '../../components/Cards/Topcard';
function Topitems({ topitems }) {
  return (
    <>
      <div id="top-item">
        <div className="max-w-6xl m-auto p-4 md:pt-4 md:pb-0 flex gap-4 flex-col md:flex-row justify-center items-center">
          {topitems.map((item) => (
            <Topcard key={item.slug} topitems={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Topitems;
