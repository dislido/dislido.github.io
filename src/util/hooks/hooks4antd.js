import { useState } from 'react';

/**
 * antd.Modal
 * @param {Object} baseProps Modal的基础Props对象
 */
export function useModal(baseProps = {}) {
  const [visible, setVisible] = useState(false);
  const [bProps, setBaseProps] = useState(baseProps);
  const [aProps, setAssignProps] = useState({});

  const openModal = (assignProps = {}) => {
    setAssignProps(assignProps);
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
    setAssignProps({});
  };

  return {
    modalProps: {
      visible,
      onCancel: closeModal,
      onOk: closeModal,
      ...bProps,
      ...aProps,
    },
    /**
     * 打开modal
     * @param {Object} assignProps 可以覆盖baseProps
     */
    openModal,
    /**
     * 关闭modal
     */
    closeModal,
    setBaseProps,
  };
}

export function tmp() {

}
