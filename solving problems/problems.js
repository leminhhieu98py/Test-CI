// // Bai 1
let arr1 = [1, 2, "a"];
let arr2 = [1, 3, "b"];
function mergeArr(arr1 = [], arr2 = []) {
  let arr3 = [];
  arr1.map((q) => {
    let count = 0;
    arr2.map((r) => {
      if (r == q) {
        count++;
      }
    });
    if (count == 0) {
      arr3.push(q);
    }
  });
  arr2.map((q) => {
    let count = 0;
    arr1.map((r) => {
      if (r == q) {
        count++;
      }
    });
    if (count == 0) {
      arr3.push(q);
    }
  });
  console.log(arr3);
}
mergeArr(arr1, arr2);

// Bai 2
// ---------------------------------------------------------------------------------------------------
let list = [
  {
    name: "Indo",
    points: 75,
    GD: 30,
  },
  {
    name: "Asernal",
    points: 99,
    GD: 45,
  },
  {
    name: "Thailand",
    points: 75,
    GD: 27,
  },
  {
    name: "Vietnam",
    points: 80,
    GD: 65,
  },
  {
    name: "Malaysia",
    points: 75,
    GD: 30,
  },
  {
    name: "Lao",
    points: 65,
    GD: 30,
  },
  {
    name: "Japan",
    points: 75,
    GD: 30,
  },
];
function footballRanking(arr = [{ name: "", points: 0, GD: 0, ranking: 0 }]) {
  let pointArr = [];
  let gdArr = [];
  let rankingArr = [];

  //   xep theo thu tu point truoc
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i].points >= arr[j].points) {
        count++;
      }
    }
    if (pointArr[arr.length - count] == undefined) {
      pointArr[arr.length - count] = arr[i];
    } else {
      let count2 = 1;
      let flag = true;
      while (flag) {
        if (pointArr[arr.length - count + count2] == undefined) {
          pointArr[arr.length - count + count2] = arr[i];
          flag = false;
        } else {
          count2++;
        }
      }
    }
  }
  console.log(pointArr); //array da sap xep theo thu tu point

  //   xep theo thu tu GD
  for (let i = 0; i < pointArr.length; i++) {
    if (
      pointArr[i + 1] != undefined &&
      pointArr[i].points == pointArr[i + 1].points
    ) {
      // tao ra 1 mang chua cac point = nhau
      let tempArr = [pointArr[i]];
      let tempArr2 = [];
      let count = 1;
      let flag = true;

      while (flag) {
        if (
          pointArr[i + 1 + count] != undefined &&
          pointArr[i + count].points == pointArr[i + 1 + count].points
        ) {
          tempArr.push(pointArr[i + count]);
          count++;
        } else {
          tempArr.push(pointArr[i + count]);
          flag = false;
        }
      }
      console.log(tempArr);
      for (let j = 0; j < tempArr.length; j++) {
        let count2 = 0;
        tempArr.map((gd) => {
          if (tempArr[j].GD >= gd.GD) {
            count2++;
          }
        });
        if (tempArr2[tempArr.length - count2] == undefined) {
          tempArr2[tempArr.length - count2] = tempArr[j];
        } else {
          let count3 = 1;
          let flag = true;
          while (flag) {
            if (tempArr2[tempArr.length - count2 + count3] == undefined) {
              tempArr2[tempArr.length - count2 + count3] = tempArr[j];
              flag = false;
            } else {
              count3++;
            }
          }
        }
      }
      console.log(tempArr2); //arr tam thoi da sap xep thu tu GD

      for (let j = 0; j < tempArr2.length; j++) {
        gdArr[i + j] = tempArr2[j];
      }
      i = i + count;
    } else {
      gdArr[i] = pointArr[i];
    }
  }
  console.log(gdArr); //arr da sap xep theo point va gd

  for (let i = 0; i < gdArr.length; i++) {
    if (
      gdArr[i + 1] != undefined &&
      gdArr[i].points == gdArr[i + 1].points &&
      gdArr[i].GD == gdArr[i + 1].GD
    ) {
      // tao ra 1 mang chua cac point = nhau va gd = nhau
      let tempArr = [gdArr[i]];
      let tempArr2 = [];
      let count = 1;
      let flag = true;

      while (flag) {
        if (
          gdArr[i + 1 + count] != undefined &&
          gdArr[i + count].points == gdArr[i + 1 + count].points &&
          gdArr[i + count].GD == gdArr[i + 1 + count].GD
        ) {
          tempArr.push(gdArr[i + count]);
          count++;
        } else {
          tempArr.push(gdArr[i + count]);
          flag = false;
        }
      }
      console.log(tempArr);
      for (let j = 0; j < tempArr.length; j++) {
        let count2 = 0;
        tempArr.map((name) => {
          if (tempArr[j].name <= name.name) {
            count2++;
          }
        });
        if (tempArr2[tempArr.length - count2] == undefined) {
          tempArr2[tempArr.length - count2] = tempArr[j];
        } else {
          let count3 = 1;
          let flag = true;
          while (flag) {
            if (tempArr2[tempArr.length - count2 + count3] == undefined) {
              tempArr2[tempArr.length - count2 + count3] = tempArr[j];
              flag = false;
            } else {
              count3++;
            }
          }
        }
      }
      console.log(tempArr2); //arr tam thoi da sap xep thu tu name

      for (let j = 0; j < tempArr2.length; j++) {
        rankingArr[i + j] = tempArr2[j];
      }
      i = i + count;
    } else {
      rankingArr[i] = gdArr[i];
    }
  }
  for (let i = 0; i < rankingArr.length; i++) {
    rankingArr[i].ranking = i + 1;
  }
  console.log(rankingArr);
}
footballRanking(list);
