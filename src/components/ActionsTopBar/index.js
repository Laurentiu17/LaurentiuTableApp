import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import SearchInput from '@components/SearchInput';
import Button from '@components/Button';
import {
  Cancel,
  Complete,
  More,
  Undo,
  Preview,
  Duplicate,
  Delete,
  Download,
  Print,
  Properties,
} from '@icons';
import { AppContext } from '@components/MainLayout/AppContext';
import Dropdown from '@components/Dropdown';
import SimpleTooltip from '@components/SimpleTooltip';

import * as S from './styles';

/* eslint react/prop-types: 0 */

const ActionsTopBar = props => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [option, setOption] = useState('');
  const [value, setValue] = useState();
  const [openOptions, setOpenOptions] = useState(false);

  useEffect(() => {
    if (props.refreshGrid) {
      setValue();
    }
  }, [props]);

  const context = useContext(AppContext);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  const globalSearchHandler = value => {
    setValue(value);
    props.findIdAction && props.findIdAction(value || undefined);
  };

  return (
    <S.ActionTopBarContainer>
      {props.findId && (
        <S.ActionItem>
          <SearchInput
            mobileAdaptable={true}
            value={value}
            doThis={globalSearchHandler}
            showMobileMinimizeIcon
          />
        </S.ActionItem>
      )}
      {context.isMobile && openOptions ? ( //this is rendered if is mobile open
        <>
          <S.ActionItem
            isIcon
            noMargin
            isClosing
            onClick={() => setOpenOptions(false)}
          >
            <Cancel />
          </S.ActionItem>

          <S.Dropdown>
            <S.DropdownMenu>
              {props.complete && (
                <S.DropdownItem>
                  <Complete />
                  <span>Complete</span>
                </S.DropdownItem>
              )}
              {props.cancel && (
                <S.DropdownItem>
                  <Cancel />
                  <span>Complete</span>
                </S.DropdownItem>
              )}
              {props.undo && (
                <S.DropdownItem
                  onClick={() => {
                    props.handleUndo();
                    setOpenOptions(false);
                  }}
                >
                  <Undo />
                  <span>Undo</span>
                </S.DropdownItem>
              )}
              {props.preview && (
                <S.DropdownItem>
                  <Preview />
                  <span>Preview</span>
                </S.DropdownItem>
              )}
              {props.showExportButton && (
                <S.DropdownItem
                  onClick={() => {
                    props.handleExport();
                    setOpenOptions(false);
                  }}
                >
                  <Download />
                  <span>Download</span>
                </S.DropdownItem>
              )}
              {props.showPrintButton && (
                <S.DropdownItem
                  onClick={() => {
                    props.handlePrint && props.handlePrint();
                    setOpenOptions(false);
                  }}
                >
                  <Print />
                  <span>Print</span>
                </S.DropdownItem>
              )}
              {props.duplicate && (
                <S.DropdownItem
                  onClick={() => {
                    props.handleDuplicate();
                    setOpenOptions(false);
                  }}
                >
                  <Duplicate />
                  <span>Duplicate</span>
                </S.DropdownItem>
              )}
              {props.properties && (
                <S.DropdownItem onClick={props.handleShowProperties}>
                  <Properties />
                  <span>Properties</span>
                </S.DropdownItem>
              )}
              {props.delete && (
                <S.DropdownItem onClick={props.handleDelete}>
                  <Delete />
                  <span>Delete</span>
                </S.DropdownItem>
              )}
            </S.DropdownMenu>
          </S.Dropdown>
        </>
      ) : context.isMobile ? ( //render this if mobile closed
        <S.ActionItem noRightMargin isIcon onClick={() => setOpenOptions(true)}>
          <More />
        </S.ActionItem>
      ) : (
        //render this if is desktop view
        <>
          {props.complete && (
            <S.ActionItem
              isIcon
              noMargin
              id="complete-button"
              data-for="complete-button"
              data-tip
            >
              <SimpleTooltip
                id="complete-button"
                place="top"
                message="Complete"
                className="tooltip"
              />
              <Complete />
            </S.ActionItem>
          )}

          {props.cancel && (
            <S.ActionItem
              isIcon
              noMargin
              id="cancel-button"
              data-for="cancel-button"
              data-tip
            >
              <SimpleTooltip
                id="cancel-button"
                place="top"
                message="Cancel"
                className="tooltip"
              />
              <Cancel />
            </S.ActionItem>
          )}

          {props.undo && (
            <S.ActionItem
              isIcon
              noMargin
              onClick={props.handleUndo}
              id="undo-button"
              data-for="undo-button"
              data-tip
            >
              <SimpleTooltip
                id="undo-button"
                place="top"
                message="Undo all changes made since the last save"
                className="tooltip"
              />
              <Undo />
            </S.ActionItem>
          )}

          {props.preview && (
            <S.ActionItem
              isIcon
              id="preview-button"
              data-for="preview-button"
              data-tip
            >
              <SimpleTooltip
                id="preview-button"
                place="top"
                message="Preview"
                className="tooltip"
              />
              <Preview />
            </S.ActionItem>
          )}

          {props.showExportButton && (
            <S.ActionItem
              isIcon
              noMargin
              onClick={props.handleExport}
              id="export-button"
              data-for="export-button"
              data-tip
            >
              <SimpleTooltip
                id="export-button"
                place="top"
                message="Export the current record data"
                className="tooltip"
              />
              <Download />
            </S.ActionItem>
          )}

          {props.showPrintButton && (
            <S.ActionItem
              isIcon
              noMargin
              onClick={props.handlePrint}
              id="print-button"
              data-for="print-button"
              data-tip
            >
              <SimpleTooltip
                id="print-button"
                place="top"
                message="Print the current record data"
                className="tooltip"
              />
              <Print />
            </S.ActionItem>
          )}

          {props.duplicate && (
            <S.ActionItem
              isIcon
              noMargin
              onClick={props.handleDuplicate}
              id="duplicate-button"
              data-for="duplicate-button"
              data-tip
            >
              <SimpleTooltip
                id="duplicate-button"
                place="top"
                message="Duplicate this record using a new ID"
                className="tooltip"
              />
              <Duplicate />
            </S.ActionItem>
          )}

          {props.properties && (
            <S.ActionItem
              isIcon
              onClick={props.handleShowProperties}
              id="show-properties-button"
              data-for="show-properties-button"
              data-tip
            >
              <SimpleTooltip
                id="show-properties-button"
                place="top"
                message="Preview the current record's properties"
                className="tooltip"
              />
              <Properties />
            </S.ActionItem>
          )}

          {props.delete && (
            <S.ActionItem
              isIcon
              noMargin
              onClick={props.handleDelete}
              id="delete-button"
              data-for="delete-button"
              data-tip
            >
              <SimpleTooltip
                id="delete-button"
                place="top"
                message="Delete this record"
                className="tooltip"
              />
              <Delete />
            </S.ActionItem>
          )}
        </>
      )}
      {props.more && (
        <S.ActionItem className="hasDropdown" isIcon onClick={() => toggle()}>
          <More />
          {dropdownOpen && (
            <S.Dropdown>
              <S.DropdownMenu>
                {options.map(item => (
                  <S.DropdownItem
                    onClick={() => setOption(item.label)}
                    key={Math.random()}
                  >
                    {item.label}
                  </S.DropdownItem>
                ))}
              </S.DropdownMenu>
            </S.Dropdown>
          )}
        </S.ActionItem>
      )}
      {props.save && (
        <S.ActionItem id="save-button" data-for="save-button" data-tip>
          <Button
            onClick={props.handleSave}
            primary
            disabled={props.buttonDisabled}
          >
            <SimpleTooltip
              id="save-button"
              place="top"
              message="Save this record and commit all changes"
              className="tooltip"
            />
            Save
          </Button>
        </S.ActionItem>
      )}
      {props.createNew && (
        <S.ActionItem
          id="create-new-button"
          data-for="create-new-button"
          data-tip
        >
          <Button
            onClick={props.handleCreateNew}
            primary
            disabled={props.buttonDisabled}
          >
            <SimpleTooltip
              id="create-new-button"
              place="top"
              message="Create new record"
              className="tooltip"
            />
            {props.createNewLabel}
          </Button>
        </S.ActionItem>
      )}
    </S.ActionTopBarContainer>
  );
};

export default ActionsTopBar;
