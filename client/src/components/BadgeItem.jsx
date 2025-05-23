import React from "react";
import { Badge } from "antd";

function BadgeItem({ count, children, className }) {
  return (
    <Badge count={count}>
      <div className={className}>{children}</div>
    </Badge>
  );
}
export default BadgeItem;
