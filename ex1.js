function f() {
alert( this ); // ?
}
// object window 
// در زمان صدا زدن تابع  this 
// به ابجکت گلوبال اشاره دارد یعنی اشاره ب محلی ک فراخوانی میشود=

let user = {
g: f.bind(null)
};
console.log(user.g());


// زمانیکه به عنوان پارامتر ورودی از null or undefined 
// استفاده کنیم this 
// به ابجکت گلوبال یعنی window 
// اشاره دارد 
// اما اگر ورودی غیر null /undefined 
// ارسال کنیم پارامتر ورودی  را برمیگرداند