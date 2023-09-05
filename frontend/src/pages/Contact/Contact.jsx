import React from 'react';

function Contact() {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="m-20 text-[#008da8] ">
          <p className="">We are here to help!</p>
          <div className="flex items-center gap-1 pt-4 text-[#fff] text-[30px]">
            <span className=" px-2 rounded-md hover:bg-[#1e86b8]">
              <i className="text-black fa fa-phone"></i>
            </span>
            <span className="text-black font-semibold text-2xl">
              {' '}
              +977 9851086972{' '}
            </span>
          </div>
          <span className="text-[28px] font-bold">
            Reach out here: <br />
            <span className="text-black font-semibold">
              info@fashionkathmandu.com
            </span>
          </span>
          <p className="font-light">
            You can also keep up-to-date with our products by Subscribing to our{' '}
            <br />
            Newsletter
          </p>
        </div>
      </div>
    </>
  );
}

export default Contact;
