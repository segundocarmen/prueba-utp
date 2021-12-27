import React, { Fragment, useImperativeHandle } from "react";
import { Toast } from "react-bootstrap";
import "./Toast.css";

import { img_icon_warning } from "./Images";
import { img_icon_info } from "./Images";
import { img_icon_success } from "./Images";
import { img_icon_error } from "./Images";

export const ToastNew = React.forwardRef((props, ref) => {
  const messageProvider = React.useRef([]);
  const [open, setOpen] = React.useState(props.show);
  const [messageInfo, setMessageInfo] = React.useState({
    key: "default",
    ...props,
  });

  const processMessage = () => {
    if (messageProvider.current.length > 0) {
      setTimeout(() => {
        setMessageInfo(messageProvider.current.shift());
        setOpen(true);
      }, 50);
    }
  };

  const pushMesage = (nextProps) => {
    setOpen(false);
    if (nextProps.show) {
      messageProvider.current.push({
        ...props,
        ...nextProps,
        key: new Date().getTime(),
      });
      processMessage();
    } else {
      messageProvider.current = [];
    }
  };

  const handleClose = () => {
    messageProvider.current = [];
    setOpen(false);
  };

  const handleExited = () => {
    setOpen(false);
    processMessage();
  };

  useImperativeHandle(ref, () => ({
    changeToast(nextProps = {}) {
      pushMesage(nextProps);
    },
  }));

  return (
    <Fragment>
      {messageInfo !== undefined && open === true && (
        <div className={`notification-container ${messageInfo.position}`}>
          <Toast
            className={`notification toast ${messageInfo.backColor} ${messageInfo.position}`}
            onClose={handleExited}
            show={open}
            key={messageInfo ? messageInfo.key : undefined}
            delay={messageInfo.dismissTime}
            autohide
          >
            <button
              onClick={() => {
                handleClose();
                messageInfo.onClose();
              }}
            >
              X
            </button>
            <div className="notification-image">
              <img
                src={
                  messageInfo.backColor === "color-success"
                    ? img_icon_success
                    : messageInfo.backColor === "color-warning"
                    ? img_icon_warning
                    : messageInfo.backColor === "color-error"
                    ? img_icon_error
                    : img_icon_info
                }
                alt="Icon"
              />
            </div>
            <div>
              <p className="notification-title">{messageInfo.title}</p>
              <p className="notification-message">{messageInfo.text}</p>
            </div>
          </Toast>
        </div>
      )}
    </Fragment>
  );
});

ToastNew.defaultProps = {
  position: "top-right",
  dismissTime: 2000,
  title: "Error!!!",
  text: "Error!!!",
  show: false,
  onClose: () => {},
};
