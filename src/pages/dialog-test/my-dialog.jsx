import React from "react";
import { Dialog } from "@alifd/next";
export default ({ visible, setVisible, data }) => {
  const Content = () => {
    return (
      <div>
        {data.map((item) => (
          <div>{item}</div>
        ))}
      </div>
    );
  };
  return (
    <Dialog
      visible={visible}
      footer={<div />}
      onClose={() => setVisible(false)}>
      <Content />
    </Dialog>
  )
}
