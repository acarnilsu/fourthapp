// ES6 ile gelen Asenkton Programlama yapıları
// asenkron hangi zaman diliminde ne zaman bir sonuç döndüreceğini bilmediğimiz programlama modeli.
// kodlar sıralı çalışmayabilir
// JS tarafında Promise denilen yapılar ile yazılır. (Geçmiş Callback)

export default function PromiseSample() {

    var promise1 = new Promise((resolve, reject) => {
        //işlem başarılı ise data1 çalışır sonuç döner. Buna promise söz tutma denir.
        setTimeout(() => {
            resolve("data1");
        }, 3000);   
    });
    
    
    //promis önce tamamlanır daha sonra kullanmak için çağırılır aynı func gibi
    //aşağıdaki kod promise çağırır
    promise1
    .then((data) => {
        console.log("response:", data);
    })
    .catch((err) => {
        console.log("error:", err);
    });
    
    let name = 'Ali';
    console.log('name', name);
    
    var promise2 = new Promise((resolve, reject) => {
        //sözü tutmama durumu
        //network error durumları hata durumları ve bir sonucu algoritmaya göre kesme durumları için kullanılır.
        setTimeout(() => {
            reject("hata 1");
        }, 1000);       
    });
    
    promise2
    .then((data) => {
        console.log("data", data);
    })
    .catch((err) => {
        console.log("hata", err);
    });

    //Promiselerde işlemler birbirleri ile alakalı durumlar ise yani aynı anda tek bir sonuç dönecek ise sonuçlar
    //birbirlerini beklemesi gerekirse o zaman napacağız?

    //promise yapıları kendi kafalarına göre hareket eder hangisi önce hangisi sonra bitecek bilemiyoruz bu 
    // sebeple bunu kontrol altına alabilmek için promise chain yapısı kullanırız

    var promise3 = Promise.resolve('promise3');
    var promise4 = Promise.resolve({value: 'promise4'});
    var promise5 = Promise.resolve(['promise5']);


    var promise7 = Promise.reject("hata");

    // Vanilla JS yazan firmalar Pure JS yazan firmalar
    // yada bir çok JS kütüphanesi (ReactJS,Jquery,Bootstrap) Promise yapılarını kullanırlar.
  
    promise3
      .then((data) => {
        console.log("1", data); // promise3 sonucu
        return promise4; // diğer bir promise return değeri olarak verdik.
      })
      .then((data) => {
        // {value:'promise4'} // 4 sonucu
        return setTimeout(() => {
          console.log("2", data);
          return promise5;
        }, 300); //
        //return promise7; // hatayı ortada alırsak ne olur
        // promise chain yapısında hatadan sonraki işlemler çalışmaz resolve edilmez.
      })
      .then((data) => {
        console.log("3", data); // ['Promise5'] // 5 sonucu
  
        return promise7; // promise de promise 7 sıralı bir şekilde bahlansın
      })
      .catch((err) => {
        console.log("4", err);
      })
      .finally(alert("promise chain bitti")); // hata olsa da olmasa da çalışır
  
    // ES7 ile sıralı işlemler üzerinde kontrolü sağlamak için async await yapısı geldi.


      // Self Invoked Function
  (async function () {
    // anonymous isimsiz function çalıştırdık
    try {
      // hata yoksa bu blok çalışacak

      // sıralı çalışmayı garanti eder.
      let res1 = await promise3;
      let res2 = await promise4;
      let res3 = await promise5;

      console.log("res1,res2,res3", res1, res2, res3);
    } catch (error) {
      // hata varsa bu blok
      console.log("error", error);
    } finally {
      // hata olsun olmasın bu blok çalışsın
      console.log("çalıştı");
    }
  })();

  // promise chain içerisinde bir hata varsa bu durumda ne olacak?

  // yada sıralı bir işlem için Promise.All kullanılabilir.
  var promise6 = Promise.all([promise3, promise4, promise5, promise7]);
  // tek bir sonuc döndürecektir.
  // tek bir hata reject değer olursa sonuç döndürmez sadece hata döndürür.

  // ajax success promise resolve denk gelir yani then ile success olduğu anı yakalarız; ajax error ise promire reject denk gelir hata durumunu yakalamak için catch keyword kullanırız.

  promise6.then((data) => {
    console.log("hepsi", data);
  });

  return <>Promises Sample1</>;
}
