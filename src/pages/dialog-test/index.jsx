import React, { useState } from "react";
import { Button } from "@alifd/next";
import MyDialog from "./my-dialog";
export default () => {
  const [visible, setVisible] = useState(false);
  const [list, setList] = useState([1, 2, 3]);
  return (
    <div>
      <h4>dialog提取</h4>
      <Button
        onClick={() => {
          setVisible(true);
        }}
      >
        弹框
      </Button>
      <MyDialog visible={visible}
       setVisible={setVisible} 
       data={list} />
    </div>
  );
};
