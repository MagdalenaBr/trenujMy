import { MembersType } from "../../types/membersTypes";
import GridContainer from "../../ui/GridContainer";
import { DEVICE_WIDTH } from "../../utils/constants";
import HeadingSm from "../../ui/HeadingSm";

export default function MemeberEmail({member}: { member: MembersType;}) {

    const memberEmailLength = member.email.split("").length;
  const dividedMemberEmail = member.email.match(/.{1,17}/g);
    return <GridContainer>
    <HeadingSm>E-mail:</HeadingSm>
    {memberEmailLength > 17 && DEVICE_WIDTH < 768 ? (
      <p className="flex flex-col">
        {dividedMemberEmail?.map((el: string) => (
          <span>{el.toLowerCase()}</span>
        ))}
      </p>
    ) : (
      <p>{member.email.toLowerCase()}</p>
    )}
  </GridContainer>
}