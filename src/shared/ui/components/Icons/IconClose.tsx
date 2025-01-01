import { Icon, IconProps } from "@chakra-ui/react";

import { useColorMode } from "@/shared/ui/hooks";

export const IconClose = (props: IconProps) => {
  const { colorMode } = useColorMode();

  return (
    <Icon {...props} aria-label="Icon close">
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.8438 10.875C10.6562 11.0625 10.3125 11.0625 10.125 10.875L6 6.71875L1.84375 10.875C1.65625 11.0625 1.3125 11.0625 1.125 10.875C0.9375 10.6875 0.9375 10.3438 1.125 10.1562L5.28125 6L1.125 1.875C0.9375 1.6875 0.9375 1.34375 1.125 1.15625C1.3125 0.96875 1.65625 0.96875 1.84375 1.15625L6 5.3125L10.125 1.15625C10.3125 0.96875 10.6562 0.96875 10.8438 1.15625C11.0312 1.34375 11.0312 1.6875 10.8438 1.875L6.6875 6L10.8438 10.1562C11.0312 10.3438 11.0312 10.6875 10.8438 10.875Z"
          fill={colorMode === "light" ? "#211F33" : "#cecac3"}
        />
      </svg>
    </Icon>
  );
};
