import React from "react";
import styled from "styled-components";
import Circle from "./components/Circle";
import images from "@/assets/images";
import _ from "lodash";

const OurServices = (): JSX.Element => {
  const serviceData = [
    {
      image: images.mainKlayMint,
      subTitle: "KlayMint",
      description:
        "다양한 옵션기능이 탑재된 NFT 공개를 지원하는 NFT민팅/마켓 플레이스입니다. 다양한 NFT 발행기능을 이용할 수 있으며, 손쉽고 편리하게 NFT를 거래할 수 있습니다.",
      button: "해당 페이지로 바로가기",
    },
    {
      image: images.mainPerWallet,
      subTitle: "PER WALLET",
      description:
        "클레이튼 기반의 토큰 거래를 지원하며, 토큰 스왑, 브릿지 등 디지털 자산 이용에 있어 편의 기능이 지속적으로 업데이트되는 안전한 탈중앙 지갑입니다.",
      button: "앱 다운로드 바로가기",
    },
    {
      image: images.mainAgora,
      subTitle: "Agora",
      description:
        "아고라는 PER 홀더들의 영향력으로 PER 생태계를 만들어가는 DAO 시스템 공간입니다.",
      button: "해당 페이지로 바로가기",
    },
    {
      image: images.mainChannelIn,
      subTitle: "CHANNEL-iN",
      description:
        "Channel-iN는 광고주와 인플루언서가 직접 매칭되는 완전 자율참여 보상 광고 중개 플랫폼을 목표로 발전하고 있는 서비스입니다.",
      button: "해당 페이지로 바로가기",
    },
  ];
  return (
    <Section>
      <h2>Our Services</h2>
      <ul className="services">
        {_.map(serviceData, (el: Record<string, string>, idx: string) => {
          return (
            <Circle
              key={idx}
              image={el.image}
              subTitle={el.subTitle}
              description={el.description}
              button={el.button}
            />
          );
        })}
      </ul>
    </Section>
  );
};

export default OurServices;

const Section = styled.section`
  max-width: 1364px;
  margin: 4rem auto 0;
  padding: 0 2rem;

  h2 {
    margin-bottom: 2rem;
    font-size: 2.5rem;
    line-height: 3.25rem;
    text-align: center;
  }

  .services {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    height: 100%;
  }
`;
