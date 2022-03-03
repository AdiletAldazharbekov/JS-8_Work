// 2)	 Дан массив [1, 2, 3, 4, 5]. 
// С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
const arrNums=[1, 2, 3, 4, 5]

arrNums.splice(1,0,'a')
arrNums.splice(2,0,'b')
arrNums.splice(6,0,'c')
arrNums.splice(8,0,'e')

console.log(arrNums)
