import { HiPlus } from "react-icons/hi2";
import Table from "../../ui/Table";

export default function PaymentsTable() {
  return (
    <div className="col-span-4 flex gap-3 flex-col h-[22rem] rounded-2xl bg-slate-900   shadow-2xl shadow-slate-900 ">
        <Table uniqueStyles="px-2 py-2" columns="grid-cols-[1fr_1fr_2fr_1fr]">
          <Table.Header>
            <p>Klient</p>
            <p className="text-center">Karnet</p>
            <p className="text-center">Okres</p>
            <p className="text-center">kwota</p>
          </Table.Header>
      <div className="h-60 overflow-auto bg-slate-800">
          <Table.Row>
            <div>
              <h2 className="font-semibold">Jan Kowalski</h2>
              <p className="text-start text-sm text-secondaryTextColor">
                778546984
              </p>
            </div>
            <p className="text-center"> 1 dzień</p>
            <div className="flex">
              <span className="w-full text-center">
                <p>01.02.2024</p>
                <p className=" text-center text-sm text-secondaryTextColor">
                  11:45:00
                </p>
              </span>
              <span className="w-full text-center">
                <p>02.02.2024</p>
                <p className="text-center text-sm text-secondaryTextColor">
                  11:45:00
                </p>
              </span>
            </div>
            <p className="text-center">30 zł</p>
          </Table.Row>
          <Table.Row>
            <div>
              <h2 className="font-semibold">Jan Kowalski</h2>
              <p className="text-start text-sm text-secondaryTextColor">
                778546984
              </p>
            </div>
            <p className="text-center"> 1 dzień</p>
            <div className="flex">
              <span className="w-full text-center">
                <p>01.02.2024</p>
                <p className=" text-center text-sm text-secondaryTextColor">
                  11:45:00
                </p>
              </span>
              <span className="w-full text-center">
                <p>02.02.2024</p>
                <p className="text-center text-sm text-secondaryTextColor">
                  11:45:00
                </p>
              </span>
            </div>
            <p className="text-center">30 zł</p>
          </Table.Row>
          <Table.Row>
            <div>
              <h2 className="font-semibold">Jan Kowalski</h2>
              <p className="text-start text-sm text-secondaryTextColor">
                778546984
              </p>
            </div>
            <p className="text-center"> 1 dzień</p>
            <div className="flex">
              <span className="w-full text-center">
                <p>01.02.2024</p>
                <p className=" text-center text-sm text-secondaryTextColor">
                  11:45:00
                </p>
              </span>
              <span className="w-full text-center">
                <p>02.02.2024</p>
                <p className="text-center text-sm text-secondaryTextColor">
                  11:45:00
                </p>
              </span>
            </div>
            <p className="text-center">30 zł</p>
          </Table.Row>
          <Table.Row>
            <div>
              <h2 className="font-semibold">Jan Kowalski</h2>
              <p className="text-start text-sm text-secondaryTextColor">
                778546984
              </p>
            </div>
            <p className="text-center"> 1 dzień</p>
            <div className="flex">
              <span className="w-full text-center">
                <p>01.02.2024</p>
                <p className=" text-center text-sm text-secondaryTextColor">
                  11:45:00
                </p>
              </span>
              <span className="w-full text-center">
                <p>02.02.2024</p>
                <p className="text-center text-sm text-secondaryTextColor">
                  11:45:00
                </p>
              </span>
            </div>
            <p className="text-center">30 zł</p>
          </Table.Row>
          <Table.Row>
            <div>
              <h2 className="font-semibold">Jan Kowalski</h2>
              <p className="text-start text-sm text-secondaryTextColor">
                778546984
              </p>
            </div>
            <p className="text-center"> 1 dzień</p>
            <div className="flex">
              <span className="w-full text-center">
                <p>01.02.2024</p>
                <p className=" text-center text-sm text-secondaryTextColor">
                  11:45:00
                </p>
              </span>
              <span className="w-full text-center">
                <p>02.02.2024</p>
                <p className="text-center text-sm text-secondaryTextColor">
                  11:45:00
                </p>
              </span>
            </div>
            <p className="text-center">30 zł</p>
          </Table.Row>
      </div>
        </Table>
      <div className=" self-center rounded-lg border-2 border-accentColor2 text-3xl text-accentColor2 ">
        <HiPlus className="self-center" />
      </div>
    </div>
  );
}
