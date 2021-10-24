import React from 'react';
import { ContextMenu, MenuItem, SubMenu } from 'react-contextmenu';

/* eslint react/prop-types: 0 */

const DynamicContextMenu = props => {
  const { id, trigger } = props;
  const handleItemClick = trigger ? trigger.onItemClick : null;

  return (
    <ContextMenu id={id}>
      {trigger && (
        <MenuItem
          onClick={handleItemClick}
          data={{ action: 'Added' }}
        >{`Add 1 ${trigger.name}`}</MenuItem>
      )}
      {trigger &&
        (trigger.allowRemoval ? (
          <MenuItem
            onClick={handleItemClick}
            data={{ action: 'Removed' }}
          >{`Remove 1 ${trigger.name}`}</MenuItem>
        ) : (
          <MenuItem disabled>{'Removal disabled'}</MenuItem>
        ))}
      <MenuItem divider />
      <SubMenu title="SubMenu">
        <MenuItem onClick={() => ({})} data={{ item: 'subsubitem 3' }}>
          SubSubItem 3
        </MenuItem>
        <MenuItem onClick={() => ({})} data={{ item: 'subsubitem 4' }}>
          SubSubItem 4
        </MenuItem>
      </SubMenu>
    </ContextMenu>
  );
};

export default DynamicContextMenu;
