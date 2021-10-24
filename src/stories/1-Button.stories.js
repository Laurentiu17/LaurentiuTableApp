import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';

import Button from '@components/Button';

export default {
  title: 'Button',
  component: Button,
};

export const primaryBtn = () => <Button primary>save</Button>;
export const primaryBtnDisabled = () => (
  <Button primary disabled>
    save
  </Button>
);
export const defaultBtn = () => <Button default>save</Button>;
export const defaultBtnDisabled = () => (
  <Button default disabled>
    save
  </Button>
);
export const bigBtn = () => <Button big>save</Button>;
export const secondaryBtn = () => <Button secondary>save</Button>;
export const secondaryBtnDisabled = () => (
  <Button secondary disabled>
    save
  </Button>
);

export const secondaryDefaultBtn = () => <Button secondaryDefault>save</Button>;
export const secondaryDefaultBtnDisabled = () => (
  <Button secondaryDefault disabled>
    save
  </Button>
);
