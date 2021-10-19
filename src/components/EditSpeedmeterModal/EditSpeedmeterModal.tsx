import { Modal } from "../Modal/Modal";
import {
  EditContainer,
  ImageComponent,
  StyledParagraph,
  Heading,
  SpeedmeterModalContainer,
  VehicleDataContainer,
  VehicleImageContainer,
  InputContainer,
  FooterContainer,
  Divider,
} from "./styles";
import Image from "../../assets/Rectangle-1251.png";
import { SpeedmeterInput } from "./components/SpeedmeterInput";

function EditSpeedmeterModal(props: any) {
  const { isOpen, setClose } = props;

  return (
    <Modal id="qualquer" isOpen={isOpen} onClose={setClose}>
      <SpeedmeterModalContainer>
        <VehicleDataContainer>
          <VehicleImageContainer>
            <ImageComponent src={Image} alt="Titulo" />
          </VehicleImageContainer>
          <Heading
            $color="#0E2D66"
            $fontSize="1rem"
            mt="1rem"
            mb="1rem"
            $align="center"
            $lineHeight="1rem"
          >
            FAO1456
          </Heading>
          <StyledParagraph
            $fontWeight={400}
            $color="#898989"
            mb="1.5rem"
            $fontSize="0.75rem"
            $lineHeight="0.75rem"
          >
            M.Benz - Atego 1719(2015)
          </StyledParagraph>
          <StyledParagraph
            $fontWeight={500}
            $color="#434343"
            mb="0.5rem"
            $fontSize="0.75rem"
            $align="center"
            $lineHeight="0.75rem"
          >
            Medição atual
          </StyledParagraph>
          <StyledParagraph
            $fontWeight={600}
            $color="#7758C7"
            mb="0"
            $fontSize="1rem"
            $align="center"
            $lineHeight="1rem"
          >
            137.564 Km
          </StyledParagraph>
        </VehicleDataContainer>
        <div
          style={{
            display: "flex",
            alignSelf: "stretch",
            flexDirection: "column",
          }}
        >
          <EditContainer>
            <Heading
              $color="#434343"
              $fontSize="1rem"
              mt="0"
              mb="0.5rem"
              $align="left"
            >
              Edição de Odometro
            </Heading>
            <StyledParagraph
              $fontWeight={400}
              $color="#898989"
              mb="3rem"
              $fontSize="0.875rem"
              $align="left"
            >
              Alterar o registro de medição do seu veículo.
            </StyledParagraph>
            <StyledParagraph
              $fontWeight={600}
              $color="#33303E"
              mb="0.25rem"
              $fontSize="0.875rem"
              $lineHeight="22px"
            >
              Nova medição
            </StyledParagraph>
            <SpeedmeterInput
              type="text"
              onChange={(event: any) => console.log(event.target.value)}
            />
          </EditContainer>
          <Divider />
          <FooterContainer>
            <button style={{ marginRight: "10px" }}>cancelar</button>
            <button>alterar odometro</button>
          </FooterContainer>
        </div>
      </SpeedmeterModalContainer>
    </Modal>
  );
}

export { EditSpeedmeterModal };
