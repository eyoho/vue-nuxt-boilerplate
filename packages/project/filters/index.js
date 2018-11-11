// 원 100 단위 콤마 추가
export const thousandSeparator = (value) => new Intl.NumberFormat().format(value)
