import { LiaCatSolid } from "react-icons/lia";

function Logo({ textSize = "text-3xl" }) {
  return (
    <div>
      <h1 className={`flex items-center gap-1 ${textSize}  text-slate-200`}>
        <span>TrenujMy</span>
        <LiaCatSolid className={`${textSize} text-slate-200`} />
      </h1>
    </div>
  );
}

export default Logo;
