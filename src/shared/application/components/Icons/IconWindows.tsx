import { Icon, IconProps } from "@chakra-ui/react";

import { useColorMode } from "@/shared/application/hooks";

export const IconWindows = (props: IconProps) => {
  const { colorMode } = useColorMode();

  return (
    <Icon {...props} aria-label="Windows logo">
      <svg
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 3.4375L6.71875 2.65625V8.1875H1V3.4375ZM1 13.5938L6.71875 14.375V8.90625H1V13.5938ZM7.34375 14.4688L15 15.5V8.90625H7.34375V14.4688ZM7.34375 2.5625V8.1875H15V1.5L7.34375 2.5625Z"
          fill={colorMode === "light" ? "#595766" : "#aca59a"}
        />
      </svg>
    </Icon>
  );
};
