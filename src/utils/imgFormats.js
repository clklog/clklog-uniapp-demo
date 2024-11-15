export function imgFormat(val){
  if (val) {
    if (val.startsWith('https')) {
      return true
    } else {
      return false
    }
  }
}
// 判断是否是最新房源
export function isMoreThan30Days (specifiedDateString) {
  if (!specifiedDateString) {
    return false;
  }
  console.log(specifiedDateString,"日期")
  const specifiedDate = new Date(specifiedDateString)
  const currentDate = new Date()
  const difference = currentDate - specifiedDate
  // 天数 <= 30天 返回true
  const differenceInDays = Math.floor(difference / (1000 * 60 * 60 * 24)) + 1
  return differenceInDays <= 30
}

