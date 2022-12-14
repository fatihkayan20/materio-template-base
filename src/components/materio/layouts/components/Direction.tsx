// ** React Imports
import { useEffect, ReactNode } from "react";

// ** MUI Imports
import { Direction } from "@mui/material";

// ** Emotion Imports
import createCache, { EmotionCache } from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

interface DirectionProps {
  children: ReactNode;
  direction: Direction;
}

const styleCache = (): EmotionCache =>
  createCache({
    key: "rtl",
    prepend: true,
  });

const Direction = (props: DirectionProps): React.ReactElement => {
  const { children, direction } = props;

  useEffect(() => {
    document.dir = direction;
  }, [direction]);

  if (direction === "rtl") {
    return <CacheProvider value={styleCache()}>{children}</CacheProvider>;
  }

  return <>{children}</>;
};

export default Direction;
