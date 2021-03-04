import React from "react";

import { Toast, ToastProvider, useToast } from "../src";
import { Button } from "./styled";

export default {
  title: "Example/Toast",
  component: Toast,
  args: {
    bodyText: "One API for notifications!",
  },
};

function DefaultComponent({ body }) {
  const [toast] = useToast();
  return <Button onClick={() => toast(body)}>Show Toast</Button>;
}

export function NoTimer({ bodyText }) {
  return (
    <ToastProvider
      clientKey="client-key"
      config={{
        autoClose: false,
      }}
    >
      <DefaultComponent body={bodyText} />
    </ToastProvider>
  );
}
