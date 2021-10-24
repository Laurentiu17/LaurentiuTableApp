import styled from 'styled-components/macro';

export const TableHead = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 100%;
  width: fit-content;
  border: 1px solid #eaedf1;
  margin-top: 20px;
`;
export const TableRow = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 100%;
  width: fit-content;
  border: 1px solid #eaedf1;
  height: 55px;
  &:nth-child(odd) {
    background: #e8edff;
  }
`;

export const TableComplete = styled.div`
  width: 100%;
  max-width: 90vw;
  margin-top: 70px;
  position: relative;
  top: -50px;
  overflow-y: hidden;
  ${props =>
    props.fullscreen && !props?.forPrinting
      ? `max-width: 97.9vw;`
      : props?.openNavBar &&
        `max-width: 82vw; 
      @media (max-width: 1878px){max-width: 80vw;}
      @media (max-width: 1690px){max-width: 78vw;}
      @media (max-width: 1551px){max-width: 76vw;}
      @media (max-width: 1410px){max-width: 74vw;}
      @media (max-width: 1300px){max-width: 72vw;}
      @media (max-width: 1200px){max-width: 70vw;}
      @media (max-width: 1100px){max-width: 68vw;}
      @media(max-width:768px){max-width: 100%;}`}
  overflow-x: auto;
  ${props =>
    !props?.openNavBar &&
    !props?.forPrinting &&
    !props?.fullscreen &&
    `max-width: calc(100vw - 65px);@media(max-width: 768px){max-width: 100vh;}`}
  ${props =>
    props?.forPrinting &&
    `width: 100vw !important;@media (max-width: 1100px){max-width: 100vw;}`}
`;

export const CellDiv = styled.div`
  min-width: 210px;
  position: relative;
  border-right: 1px solid #e1e3e6;
  @media (max-width: 768px) {
    min-width: 170px;
  }
  ${props =>
    props.headersLength <= 8 &&
    `min-width: 222px; @media(max-width:768px){min-width: 170px;}`};
  &:focus-within {
    border: 1px solid black;
  }
`;

export const TableHeadCell = styled.div`
  min-width: 210px;
  &:first-child {
    min-width: 90px;
  }
  &:not(:last-child) {
    ${props => !props.active && `border-right: 1px solid #eaedf1;`}
  }
  @media (max-width: 768px) {
    min-width: 170px;
  }
  ${props =>
    props.headersLength <= 8 &&
    `min-width: 222px; @media(max-width:768px){min-width: 170px;}`};
  padding: 10px;
  position: relative;
  ${props =>
    props.checkbox
      ? `width: 80px;
    &::after {
    width: 1px;
    height: 28px;
    content: '';
    display: flex;
    align-items: center;
    background: #A3ADC5;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }`
      : props.active && `border: 1px solid black;`}
`;

export const TableRowCell = styled.div`
  min-width: 90px;
  &:not(:last-child) {
    border-right: 1px solid #eaedf1;
  }
  padding: 10px;
  position: relative;
  ${props =>
    props.checkbox &&
    `width: 80px;
    &::after {
    width: 1px;
    height: 28px;
    content: '';
    display: flex;
    align-items: center;
    background: #A3ADC5;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }`}
  svg {
    position: absolute;
    right: 8px;
    width: 17px;
    height: 17px;
    top: 50%;
    transform: translate(0, -50%);
    cursor: pointer;
  }
`;

export const HeadCell = styled.div`
  display: flex;
  margin-bottom: 10px;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
`;

export const RowCell = styled.div`
  display: flex;
  margin-bottom: 10px;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
`;

export const HeadTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  padding-right: 25px;
`;

export const SortingArrow = styled.div`
  display: flex;
  flex-direction: row;

  svg {
    width: 25px;
    height: 25px;
  }
  svg:hover {
    cursor: pointer;
    path {
      fill: black;
    }
  }
  svg:first-child {
    position: absolute;
    right: 0;
    top: -8px;
    transform: rotate(180deg);
  }
  svg:last-child {
    position: absolute;
    right: 0;
    top: 2px;
  }
  ${props =>
    props.sorted === 'desc'
      ? `svg:first-child path{fill:black !important}`
      : props.sorted === 'asc' && 'svg:last-child path{fill: black !important}'}
`;

export const CheckBox = styled.input`
  width: 17px;
  height: 17px;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  cursor: pointer;
`;

export const CalendarHeaderCell = styled.div`
  height: 30px;
  margin-top: 15px;
  position: relative;
  & > div {
    width: 100%;
  }
  input {
    height: 35px;
    width: 100%;
    background: white;
    color: #3a4254;
    padding: 11px 16px 11px 8px;
    border-radius: 4px;
    border: 2px solid #dde4ee;
    font-size: 16px;
    outline: none;
    background-color: transparent;
    box-shadow: none;
    cursor: pointer;
    &::placeholder {
      font-size: 15px;
    }
  }
  svg {
    position: absolute;
    top: 5px;
    right: 8px;
    pointer-events: none;
    path {
      fill: #2668d6;
      cursor: pointer !important;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  color: #3a4254;
  cursor: pointer;
  padding: 0 7px;
  &:not(:last-child) {
    ${props => !props.active && `border-right: 1px solid #e1e3e6;`}
  }
  ${props =>
    props.value === 'Completed'
      ? `color: #70B893;`
      : props.value === 'Closed'
      ? `color: #B9C1D2;`
      : props.value === 'Open'
      ? `color: #5EBAFF;`
      : props.value === 'Planned' && `color: #F0A854;`}
  ${props => props.progress && `padding: 0 7px 0 34px;`}
  background: white;
  font-size: 13px;
  outline: none;
  border: none;
  background-color: transparent;
  box-shadow: none;
  &::placeholder {
    font-size: 15px;
  }
  @media (max-width: 768px) {
    font-size: 12px;
  }

  ${props =>
    props.link &&
    `color: blue; &:hover{
    text-decoration: underline;
    cursor: pointer;
  }`}
  ${props => props.readOnly === false && `background: #EAEDF1;`}
`;

export const TableData = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  min-width: 230px;
  cursor: text;
  padding: 0 7px;
  &:not(:last-child) {
    ${props => !props.active && `border-right: 1px solid #e1e3e6;`}
  }
`;

export const CommentForm = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 25px;
  position: relative;
  svg {
    width: 15px;
    height: 15px;
    position: absolute;
    right: -10px;
    top: -10px;
    cursor: pointer;
    path {
      fill: #70798c;
      transition: 0.3s ease-in-out;
    }

    &:hover {
      path {
        fill: black;
      }
    }
  }
`;

export const CloseModal = styled.div``;

export const TextArea = styled.textarea`
  background: white;
  color: #3a4254;
  padding: 7px 16px 7px 8px;
  border-radius: 4px;
  border: 2px solid #dde4ee;
  font-size: 16px;
  outline: none;
  background-color: transparent;
  box-shadow: none;
  width: 100%;
  resize: none;
  &::placeholder {
    font-size: 15px;
  }
  height: 85%;
`;

export const SettingModal = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ColumnSetting = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid #e4e8f1;
  align-items: center;
  position: relative;
  input {
    width: unset !important;
    height: 15px;
    width: 15px !important;
  }
  p {
    text-align: left;
    font-size: 1.6rem;
    margin-left: 10px;
  }
  div {
    width: 20px;
    height: 20px;
    position: absolute;
    right: 15px;
  }
  svg {
    cursor: move;
    width: 100%;
    height: 100%;
    path {
      fill: #9aa3b4;
    }
  }
`;

export const CustomizeTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 570px) {
    align-items: flex-start;
    flex-direction: column;
  }

  p {
    font-size: 2.1rem;
    color: #172745;
    font-weight: 600;
    @media (max-width: 400px) {
      margin-bottom: 7px;
    }
  }
  > div {
    display: flex;
    align-items: center;
    @media (max-width: 570px) {
      flex-direction: row;
    }
    @media (max-width: 400px) {
      flex-direction: column;
      align-items: flex-start;
    }
    button:not(:last-child) {
      margin-right: 7px;
      @media (max-width: 400px) {
        margin-bottom: 7px;
      }
    }
  }
`;

export const CustomizeText = styled.div`
  position: relative;
  border-bottom: 1px solid #e4e8f1;
  padding-bottom: 10px;
  margin-top: 8px;
`;

export const ContextWrapper = styled.div`
  position: absolute;
  bottom: -125%;
  right: -50%;
  background: white;
  border: 1px solid #e1e3e6;
  border-radius: 3px;
  z-index: 99;
  width: 180px;
  background: white;
`;

export const ContextItem = styled.div`
  width: 100%;
  height: 30px;
  padding: 7px;
  transition: 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  cursor: pointer;
  &:not(:last-child) {
    border-bottom: 1px solid #e1e3e6;
  }
  ${props => props.disabled && `color: #949395;`}
  svg path {
    fill: #287bd1;
    transition: 0.3s ease-in-out;
  }
  &:hover {
    color: white;
    background: #287bd1;
    svg path {
      fill: white;
    }
  }
`;

export const ContextSubItemGroup = styled.div`
  position: absolute;
  width: 180px;
  right: -101%;
  top: -5%;
  color: #545354;
  background: white;
  border: 1px solid #e1e3e6;
`;
export const ContextSubItem = styled.div`
  display: flex;
  align-items: center;
  padding: 7px;
  height: 30px;
  &:not(:last-child) {
    border-bottom: 1px solid #e1e3e6;
  }
  transition: 0.3s ease-in-out;
  &:hover {
    color: white;
    background: #287bd1;
  }
`;

export const TooltipPreview = styled.div`
  position: absolute;
  bottom: 90%;
  background: white;
  border: 1px solid black;
  padding: 15px;
  z-index: 999;
  left: 50%;
  transform: translate(-50%, 0);
  svg {
    position: absolute;
    top: 3px;
    right: 3px;
    width: 8px;
    height: 8px;
    cursor: pointer;
  }
  img {
    width: 100px;
    height: 100px;
  }
`;

export const ImageLogo = styled.img`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translate(0, -50%);
  width: 20px;
  height: 20px;
`;

export const ProgressImg = styled.img`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translate(0, -50%);
  width: 20px;
  height: 20px;
`;

export const CheckboxField = styled.input`
  width: 15px;
  height: 15px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  &:focus {
    border: none;
    outline: none;
  }
`;

export const TableContent = styled.div`
  min-height: 150px;
`;

export const Hamburger = styled.div``;

export const DatePickerCell = styled.div`
  z-index: 88888;
  position: absolute;
  bottom: 0;
  .react-datepicker__input-container {
    display: none !important;
  }
`;
