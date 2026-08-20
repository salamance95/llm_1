const p = orderP();
console.log(p);

p.then((value) => {
  console.log("나중에 받은 값:", value);
  return value + " (확인됨)";
}).then((result) => {
  out2.textContent = result;
});

p.then((value) => console.log("나중에 받은 값:", value));

// 콘솔: (1초 뒤) 나중에 받은 값: 주문번호-200
