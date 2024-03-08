import { ModalForm, ProFormText } from '@ant-design/pro-components';

import '@umijs/max';
import React from 'react';
import {Item} from "@/pages/System/Role/data";

export type FormValueType = Partial<Item>;
export type UpdateFormProps = {
  onCancel: () => void;
  onSubmit: (values: FormValueType) => Promise<void>;
  updateModalOpen: boolean;
  values: Partial<Item> | undefined;
};
const UpdateForm: React.FC<UpdateFormProps> = (props) => {
  const { onSubmit, updateModalOpen, onCancel, values } = props;
  if (!updateModalOpen) {
    return null;
  }
  return (
    <ModalForm
      open={updateModalOpen}
      width={640}
      title={'角色编辑'}
      initialValues={values}
      modalProps={{ onCancel: onCancel }}
      onFinish={(e) => {
        if (values?.id) {
          e.id = values.id;
        }
        return onSubmit(e);
      }}
    >
      <>
        <ProFormText
          name="name"
          label={'角色名称'}
          width="md"
          rules={[{ required: true, message: '请输入角色名称！' }]}
        />
        <ProFormText
          name="desc"
          label={'角色介绍'}
          width="md"
          rules={[{ required: true, message: '请输入角色介绍！' }]}
        />
      </>
    </ModalForm>
  );
};
export default UpdateForm;
