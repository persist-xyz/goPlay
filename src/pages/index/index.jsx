import React, { useState, useEffect } from "react";
import { View, Text } from "@tarojs/components";
import data from '@/constants/data'; //筛选菜单数据
import FilterDropDown from '@/components/FilterDropDown'
import "./index.scss";

const Index = () => {
  const [defaultSelected] = useState([])

  useEffect(() => {
    console.log(data)
  },[])
  
  //接收菜单结果
  const confirm = (e) => {
    console.log(e)
  }

  return (
    <View className='index'>
      <FilterDropDown filterData={data} defaultSelected={defaultSelected} updateMenuName={true} confirm={confirm} dataFormat="Object" />
    </View>
  );
};

export default Index;
