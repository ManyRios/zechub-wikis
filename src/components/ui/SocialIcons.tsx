import Link from "next/link";
import { Icon } from "./Icon";
import { socialNav } from "@/constants/navigation";
import type { Socials } from "@/types";

const SocialIcons = (newTab: Socials) => {
  return (
    <div className="flex gap-6">
      {socialNav?.map(({ url, icon }, index) => {
        return (
          <Link
            key={index}
            href={url}
            className=" hover:text-brand-ui-primary hover:scale-125"
            target={newTab ? "_blank" : "_self"}
          >
            <Icon size={25} icon={icon} className="" />
          </Link>
        );
      })}
    </div>
  );
};

export default SocialIcons;
