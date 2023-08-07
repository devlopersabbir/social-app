import * as React from "react";
import { NativeBaseProvider } from "native-base";

type Props = {
  children: React.ReactNode;
};

const AppContainer = ({ children }: Props) => {
  return (
    <>
      <NativeBaseProvider>{children}</NativeBaseProvider>
    </>
  );
};

export default AppContainer;
