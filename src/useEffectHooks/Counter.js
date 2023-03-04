//rfcp

import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";

function Counter({ name }) {
  const [count, setCount] = useState(0);
  const [cities, setCities] = useState(["izmir", "istanbul", "ankara"]);
  const [states, setStates] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    console.log("useEffect");
    // sayfa ilk açıldığında veri çekme işlemi yapacak ise yani 1 kereye mahsus veri çekme işleminde bunu kullanırız.
  }, []); // no deps demek yani herhangi bir state değişimini takip etme
  // component ilk açıldığında 1 defa mahsus çalış demek
  // 1den fazla kez useEffect yazılabilir

  useEffect(() => {
    console.log("count-değişti");

    if (count == 10) {
      alert("değer 10 bandına ulaştı");
    }

    // değer hiç bir zaman 0 dan küçük olamayacak
    if (count < 0) {
      setCount(0);
    }

    // yine veri çekme işlemlerinde kullanabiliriz fakar genelde bir değişim sonununda veri çekmemiz gerekirse tercih ederiz.
    // il seçildikten sonra içleri yükle gibi
  }, [count]); // count nesnesini useEffect [] dependecies kısmına parametere olarak geçtiğimizden dolayı her bir state değişiminde bu sefer tetiklenecek.

  /*
  useEffect(() => {
    if (selectedCity == "istanbul") {
      setStates([...["beşiktaş", "kadıköy", "üsküdar"]]);
    } else if (selectedCity == "ankara") {
      setStates([...["mamak", "eti mesgut", "çankaya"]]);
    } else if (selectedCity == "izmir") {
      setStates([...["karşıyaka", "bornova", "konak"]]);
    }
  }, [selectedCity]); // şehir seçimini takip etmiş olduk
  */

  useEffect(() => {
    console.log("count veya selected city değişimind eçalış");
  }, [count, selectedCity]);

  const arttir = () => {
    setCount(count + 1);
  };

  const azalt = () => {
    setCount(count - 1);
  };

  const selectCity = (city) => {
    console.log("seçilen şehir", city);
    setSelectedCity(city);

    if (city == "istanbul") {
      setStates([...["beşiktaş", "kadıköy", "üsküdar"]]);
    } else if (city == "ankara") {
      setStates([...["mamak", "etimesgut", "çankaya"]]);
    } else if (city == "izmir") {
      setStates([...["karşıyaka", "bornova", "konak"]]);
    }
  };

  return (
    <Fragment>
      <div style={{ background: "red" }}>
        name: {name}
        <br></br>
        sayaç:{count}
        <button onClick={arttir}>arttir</button>
        <button onClick={azalt}>azalt</button>
      </div>
      <hr></hr>

      <select onChange={(event) => selectCity(event.target.value)}>
        {cities.map((city, index) => {
          return <option key={index}>{city}</option>;
        })}
      </select>
      <hr></hr>
      {/* seçilen değer varsa ekranda ilçeleri göstermek için && ifadesi kullandık null değilse */}
      {selectedCity && (
        <select>
          {states.map((state, index) => {
            return <option key={index}>{state}</option>;
          })}
        </select>
      )}
    </Fragment>
  );
}

Counter.propTypes = {
  name: PropTypes.string.isRequired,
};

Counter.defaultProps = {
  name: "test",
};

export default Counter;