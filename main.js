function createRandomArray(length) {
    const randomArray = [];
    for (let i = 0; i < length; i++) {
      const randomValue = Math.floor(Math.random() * 50) + 1;
      randomArray.push(randomValue);
    }
    return randomArray;
  }
  
  function splitArray(arr) {
    const evenArray = [];
    const oddArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        evenArray.push(arr[i]);
      } else {
        oddArray.push(arr[i]);
      }
    }
    return [evenArray, oddArray];
  }
  
  function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
  }
  
  function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  
  function calculateTotal(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;
  }
  
  function calculateAverage(arr) {
    const total = calculateTotal(arr);
    return total / arr.length;
  }
  
  const randomArray = createRandomArray(100);
  const [evenArray, oddArray] = splitArray(randomArray);

//Hitung nilai minimum, maksimum, total, dan rata-rata dari kedua array
  const minEven = findMin(evenArray);
  const maxEven = findMax(evenArray);
  const totalEven = calculateTotal(evenArray);
  const averageEven = calculateAverage(evenArray);
  
  const minOdd = findMin(oddArray);
  const maxOdd = findMax(oddArray);
  const totalOdd = calculateTotal(oddArray);
  const averageOdd = calculateAverage(oddArray);
  
  // Bandingkan nilai-nilai
  const comparisonResult = {
    min: minEven > minOdd ? "Min lebih besar pada array genap" : "Min lebih besar pada array ganjil",
    max: maxEven > maxOdd ? "Max lebih besar pada array genap" : "Max lebih besar pada array ganjil",
    total: totalEven === totalOdd ? "Total memiliki nilai yang sama pada array genap dan ganjil" : "Total berbeda antara array genap dan ganjil",
    average: averageEven > averageOdd ? "Rata-rata lebih besar pada array genap" : "Rata-rata lebih besar pada array ganjil",
  };
  
  
  console.log("Array dengan jumlah index 100:", randomArray);
  console.log("Array genap dengan jumlah index 50:", evenArray);
  console.log("Array ganjil dengan jumlah index 50:", oddArray);
  
  console.log("Min, Max, Total, Rata-rata pada array genap:");
  console.log("Min:", minEven, "Max:", maxEven, "Total:", totalEven, "Rata-rata:", averageEven);
  
  console.log("Min, Max, Total, Rata-rata pada array ganjil:");
  console.log("Min:", minOdd, "Max:", maxOdd, "Total:", totalOdd, "Rata-rata:", averageOdd);
  
  console.log("Perbandingan nilai:");
  console.log("Min:", comparisonResult.min);
  console.log("Max:", comparisonResult.max);
  console.log("Total:", comparisonResult.total);
  console.log("Rata-rata:", comparisonResult.average);
