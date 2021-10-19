import styled from "styled-components";

const SpeedmeterModalContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  background: #f8f8f8;
  max-width: 592px;
`;

const VehicleDataContainer = styled.div`
  padding: 4.3125rem 3.875rem;
  background: #ffffff;
  min-width: fit-content;
`;

const EditContainer = styled.div`
  padding: 1.5rem;
`;

const FooterContainer = styled.footer`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const VehicleImageContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 5px;
  margin: auto;
`;

const ImageComponent = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Heading: any = styled.h3`
  font-size: ${(props: any) => (props.$fontSize ? props.$fontSize : "")};
  font-weight: ${(props: any) => (props.$fontWeight ? props.$fontWeight : "")};
  color: ${(props: any) => (props.$color ? props.$color : "")};
  text-align: ${(props: any) => (props.$align ? props.$align : "")};
  margin-top: ${(props: any) => (props.mt ? props.mt : "")};
  margin-bottom: ${(props: any) => (props.mb ? props.mb : "")};
  line-height: ${(props: any) => (props.$lineHeight ? props.$lineHeight : "")};
`;

const StyledParagraph: any = styled.p`
  color: ${(props: any) => (props.$color ? props.$color : "")};
  font-size: ${(props: any) => (props.$fontSize ? props.$fontSize : "")};
  font-weight: ${(props: any) => (props.$fontWeight ? props.$fontWeight : "")};
  margin-bottom: ${(props: any) => (props.mb ? props.mb : "")};
  margin-top: 0;
  text-align: ${(props: any) => (props.$align ? props.$align : "")};
  line-height: ${(props: any) => (props.$lineHeight ? props.$lineHeight : "")};
`;

const InputContainer = styled.div`
  background: #ffffff;
  width: 100%;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  height: 2.75rem;
  margin-bottom: 2.75rem;
  display: flex;
  align-items: center;
`;

const Divider = styled.hr`
  margin: 0;
  border: 1px solid #edf1f2;
`;

const InputUnitContainer = styled.div`
  justify-content: center;
  align-items: center;
  width: 43%;
  height: 100%;
  color: #898989;
  line-height: 1.375rem;
  font-size: 0.875rem;
  font-weight: 400;
  border-left: 1px solid #d9d9d9;
  border-radius: 5px;
  display: flex;
`;

const InputTextContainer = styled.div`
  margin-right: 1.375rem;
`;

const StyledInput: any = styled.input`
  outline: none;
  border: none;
  text-align: right;
  width: 100%;
  font-size: 0.875rem;
  color: #434343;
  font-weight: 400;
`;

export {
  SpeedmeterModalContainer,
  EditContainer,
  VehicleDataContainer,
  VehicleImageContainer,
  ImageComponent,
  Heading,
  StyledParagraph,
  InputContainer,
  FooterContainer,
  Divider,
  InputUnitContainer,
  InputTextContainer,
  StyledInput,
};
