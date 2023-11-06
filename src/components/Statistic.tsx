
import React, { useEffect, useState } from 'react';

export const Statistic = () => {
  const [num1, setNum1] = useState('38,135');
  const [num2, setNum2] = useState('365,458');
  useEffect(() => {
    setInterval(() => {
      setNum1(n => {
        const arr1 = n.split('');
        arr1.splice(2, 1);
        const arr2 = Math.floor(parseInt(arr1.join('')) + 1).toString().split('');
        arr2.splice(2, 0, ',');
        return arr2.join('');
      });
    }, 20);
    setInterval(() => {
      setNum2(n => {
        const arr1 = n.split('');
        arr1.splice(3, 1);
        const arr2 = Math.floor(parseInt(arr1.join('')) + 1).toString().split('');
        arr2.splice(3, 0, ',');
        return arr2.join('');
      });
    }, 20);
  }, []);
  return (
    <div className="formWrapper">
      <div><p>{num2}</p>总交易量</div>
      <div><p>{num1}</p>今日总交易量</div>
      <div><p>58</p>今日失败量</div>
      <div><p>3203221</p>近30天平均交易量</div>
      <div><p>58</p>系统总数量</div>
      <div><p>200</p>接口总数量</div>
    </div>
  );
};
