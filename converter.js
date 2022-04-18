/*Конвертацию проводим в два этапа - сперва всё в мм, з
атем - в требуемую размерность*/

const str = '{"distance":{"unit":"m","value":"0.5"},"convert_to":"ft"}'

const additionParam ='{"yd":"914.4"}' // предположим, дополнительные величины (выраженные в миллиметрах) , подгруженные в строчном формате 
const baseToMm = { mm: 1, cm: 10, m: 1000, ft: 304.8, in: 25.4 }; //коэф. пересчёта по базовому условию
const addObj =  JSON.parse(additionParam)
const anyToMm=Object.assign(baseToMm,addObj)

const convert = (str) => {
  const obj=JSON.parse(str)
  const mathResult = Math.round((obj.distance.value*anyToMm[obj.distance.unit]/anyToMm[obj.convert_to])*100)/100
  const objResul ={unit:obj.convert_to,value:mathResult}

  return(JSON.stringify( objResul,null,null))
};

console.log(convert(str))