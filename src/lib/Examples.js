import { React, useState } from "react";
import Input from "./Input";

const Examples = () => {
  const [iconData, setIconData] = useState({ showAlert: false, isBlank: true });
  return (
    <>
    <br />
      <Input
        name={"example1"}
        showalert={iconData.showAlert}
        isblank={iconData.isBlank}
        iconData={iconData}
        setIconData={setIconData}
      />
    </>
  );
};

export default Examples;
