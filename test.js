let value = true;
alert(typeof value); // boolean

value = String(value); // теперь value это строка "true"
alert(typeof value); // string


alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (ошибка чтения числа в "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0

"" + 1 + 0
"" - 1 + 0
true + false
6 / "3"
"2" * "3"
4 + 5 + "px"
"$" + 4 + 5`
"4" - 2
"4px" - 2
7 / 0
"  -9  " + 5
"  -9  " - 5
null + 1
undefined + 1
" \t \n" - 2

for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}

let user = {};

// присваивание значения свойству
user["likes birds"] = true;

// получение значения свойства
alert(user["likes birds"]); // true

// удаление свойства
delete user["likes birds"];
