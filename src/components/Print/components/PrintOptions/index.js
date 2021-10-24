import React from 'react';
import { Formik, Field } from 'formik';

import Button from '@components/Button';
import Loading from '@components/Loading';

import * as S from './styles';
/* eslint react/prop-types: 0 */

const PrintOptions = ({ columns, onConfirmPrint, onCancelPrint }) => {
  if (!columns || !columns.length) {
    return <Loading />;
  }

  const handleSave = values => {
    onConfirmPrint && onConfirmPrint(values);
  };

  const handleClose = () => {
    onCancelPrint && onCancelPrint();
  };

  const initialValues = {
    printTitle: '',
    printColumns: columns.reduce(
      (acc, x) => (x.visible ? [...acc, x.name] : acc),
      []
    ),
  };

  return (
    <S.ModalContainer>
      <Formik
        onSubmit={values => {
          handleSave && handleSave(values);
        }}
        initialValues={initialValues}
      >
        {form => {
          return (
            <S.Form onSubmit={form.handleSubmit}>
              <S.ModalTopBar>
                <S.ModalTitle>Print Options</S.ModalTitle>
              </S.ModalTopBar>
              <S.ModalContent>
                <S.InputGroup>
                  <Field name="printTitle">
                    {({ field, form, meta }) => (
                      <S.InputWrapper>
                        <S.Label>Print Title</S.Label>
                        <S.Input
                          type="text"
                          id="title"
                          className="form-control"
                          {...field}
                        />
                      </S.InputWrapper>
                    )}
                  </Field>
                </S.InputGroup>

                <S.InputGroup>
                  <S.InputWrapper>
                    <S.Label>Print Columns</S.Label>

                    <Field name="printColumns">
                      {({ field, form, meta }) => {
                        return (
                          <>
                            {columns.length
                              ? columns.map(column => (
                                  <S.InputGroup key={column.name}>
                                    <S.Label>
                                      <Field
                                        name="printColumns"
                                        type="checkbox"
                                        value={column.name}
                                      />
                                      {column.label}
                                    </S.Label>
                                  </S.InputGroup>
                                ))
                              : null}

                            <S.ButtonsWrapper>
                              <Button
                                primary
                                type="button"
                                onClick={() => {
                                  form.setFieldValue(
                                    'printColumns',
                                    columns.map(({ name }) => name)
                                  );
                                }}
                              >
                                Select All
                              </Button>
                              <Button
                                primary
                                type="button"
                                onClick={() => {
                                  form.setFieldValue('printColumns', []);
                                }}
                              >
                                Select None
                              </Button>
                            </S.ButtonsWrapper>
                          </>
                        );
                      }}
                    </Field>
                  </S.InputWrapper>
                </S.InputGroup>
              </S.ModalContent>
              <S.ModalFooter>
                <Button primary type="submit">
                  Ok
                </Button>
                <Button default type="button" onClick={() => handleClose()}>
                  Cancel
                </Button>
              </S.ModalFooter>
            </S.Form>
          );
        }}
      </Formik>
    </S.ModalContainer>
  );
};

export default PrintOptions;
