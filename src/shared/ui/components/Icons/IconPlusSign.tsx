import { Icon, IconProps } from "@chakra-ui/react";

export const IconPlusSign = (props: IconProps) => {
  return (
    <Icon {...props} aria-label="Plus sign">
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.8125 5.75C11.8125 6.13281 11.5117 6.40625 11.1562 6.40625H6.78125V10.7812C6.78125 11.1641 6.48047 11.4648 6.125 11.4648C5.74219 11.4648 5.46875 11.1641 5.46875 10.7812V6.40625H1.09375C0.710938 6.40625 0.4375 6.13281 0.4375 5.77734C0.4375 5.39453 0.710938 5.09375 1.09375 5.09375H5.46875V0.71875C5.46875 0.363281 5.74219 0.0898438 6.125 0.0898438C6.48047 0.0898438 6.78125 0.363281 6.78125 0.71875V5.09375H11.1562C11.5117 5.09375 11.8125 5.39453 11.8125 5.75Z"
          fill="white"
        />
      </svg>
    </Icon>
  );
};
