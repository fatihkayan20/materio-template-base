import Image from "next/image";
import { useRouter } from "next/router";
import * as React from "react";
import { PageBackButton } from "../../../../../../components/common/PageBackButton";
import { useIsDesktop } from "../../../../../../infrastructure/hooks/useIsDesktop";
import {
  AppBarContainer,
  AppBarOuter,
  CenterLogoContainer,
  LeftIconContainer,
  RightIconContainer,
} from "./MobileAppBar.styled";

interface IMobileAppBarProps {
  readonly canGoBack?: boolean;
  readonly LeftElement?: React.ReactNode;
  readonly RightElement?: React.ReactNode;
  readonly CenterElement?: React.ReactNode;
  readonly logoUrl?: string;
  readonly variant?: "contained" | "outlined";
  readonly onCenterIconClick?: () => void;
  readonly onLeftIconClick?: () => void;
}

export const MobileAppBar: React.FunctionComponent<IMobileAppBarProps> = ({
  canGoBack,
  LeftElement,
  CenterElement,
  RightElement,
  logoUrl,
  variant,
  onCenterIconClick,
  onLeftIconClick,
}) => {
  const router = useRouter();
  const isDesktop = useIsDesktop();
  const handleGoHome = React.useCallback(() => {
    router.push("/");
  }, [router]);
  if (isDesktop && canGoBack) {
    return <PageBackButton variant={variant} onClick={onLeftIconClick} />;
  }
  return (
    <AppBarOuter>
      <AppBarContainer>
        <LeftIconContainer
          sx={{
            visibility: canGoBack ? "visible" : "hidden",
          }}>
          {LeftElement ?? (
            <PageBackButton onClick={onLeftIconClick} hideTitle={true} />
          )}
        </LeftIconContainer>
        <CenterLogoContainer onClick={onCenterIconClick ?? handleGoHome}>
          {CenterElement ?? (
            <Image
              src={logoUrl ?? "/logo.png"}
              layout={"fill"}
              alt={"Logo"}
              objectFit={"contain"}
              objectPosition={"center"}
            />
          )}
        </CenterLogoContainer>
        <RightIconContainer>{RightElement}</RightIconContainer>
      </AppBarContainer>
    </AppBarOuter>
  );
};
