module.exports = async function (mas) {
  let newmas  = [];


  console.log(mas);
  for(let i=0;i<mas.length;i++){
      let counterOfc  = 0;
      let counterCom =0;
      for (let j=0;j<mas[i].ballOfciers.length;j++){
          counterOfc+=+mas[i].ballOfciers[j];
          counterCom+=+mas[i].ballComanders[j];
      }
    let midleBallOficers = counterOfc/mas[i].ballOfciers.length;
      let midleBallComanders  =counterCom/mas[i].ballComanders.length;
      newmas.push({id: mas[i].id, midleBallOficers:midleBallOficers,midleComanders:midleBallComanders});
  }
  console.log(newmas);
    return newmas;
};