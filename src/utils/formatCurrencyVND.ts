export const formatCurrencyVND = (amount = 0, notShowCurrency = false) => {
  if (isNaN(amount)) amount = 0;

  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  })
    .format(amount)
    .replace(/\s/g, "")
    .replace(/₫/g, notShowCurrency ? "" : "đ");
};
