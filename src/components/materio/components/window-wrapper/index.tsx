import { useState, useEffect, ReactNode } from "react";
import { useRouter } from "next/router";

interface Props {
  readonly children: ReactNode;
}

const WindowWrapper = ({ children }: Props): ReactNode => {
  const [windowReadyFlag, setWindowReadyFlag] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowReadyFlag(true);
    }
  }, [router.route]);

  if (windowReadyFlag) {
    return <>{children}</>;
  } else {
    return null;
  }
};

export default WindowWrapper;
