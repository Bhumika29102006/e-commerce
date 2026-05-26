// components/FooterFeature.tsx

import React from "react";

type Props = {
  icon: React.ReactNode;
  title: string;
  text: string;
};

const FooterFeature: React.FC<Props> = ({
  icon,
  title,
  text,
}) => {
  return (
    <div className="featureBox">

      <div className="featureIcon">
        {icon}
      </div>

      <div>
        <h3>{title}</h3>

        <p>{text}</p>
      </div>

    </div>
  );
};

export default FooterFeature;