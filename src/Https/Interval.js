import { useEffect, useState } from "react";

const Interval = () => {
  let count = 0;

  // saniyede bir işlem yapacağımız bir component tanımı yaptık.
  // zamanlıyıcı ile çalıştığınız durumlarda clean up işlemi yapmazsak uygulama bir süre sonra patlar.

  useEffect(() => {
    console.log("ilk açılış");

    const int = setInterval(() => {
      count++;
      // 1 sde 1 değer artıcak
      console.log("count", count);
    }, 1000);

    return () => {
      console.log("clean up");
      clearInterval(int);
    };
  });

  return <div></div>;
};

export default Interval;