import { abbreviateWalletAddress, formatDate } from "../utils";

export const AcceptedEvent = ({ date, wallet }) => {
  return (
    <li>
      <div className="flex items-center ">
        <p className="finalEvent max-md:text-2xl">Package accepted</p>
        <p className="text-2xl">{formatDate(date)}</p>
      </div>
      <span className="finalEvent2 break-all">
        {abbreviateWalletAddress(wallet)}
      </span>
      <p className="finalEvent3"></p>
    </li>
  );
};

export const ReportedEvent = ({ date, wallet }) => {
  return (
    <li>
      <div className="flex items-center">
        <p className="violatedEvent max-md:text-2xl">Package reported</p>
        <p className="text-2xl text-primary-red">{formatDate(date)}</p>
      </div>
      <span className="violatedEvent break-all">
        {abbreviateWalletAddress(wallet)}
      </span>
      <p className="text-lg italic text-primary-red">
        Text from the “report input”
      </p>
    </li>
  );
};

const HandledSubEvent = ({ date, wallet }) => {
  return (
    <li className=" ml-11 p-0 text-sm text-secondary-white max-sm:ml-5">
      <p className="m-0 break-all text-sm">
        Package created {formatDate(date)} by
      </p>
      <p className="m-0 break-all text-sm">{abbreviateWalletAddress(wallet)}</p>
    </li>
  );
};

export const HandledEvent = ({ date, wallet }) => {
  return (
    <li>
      <div className="flex items-center">
        <p className="handleEvent max-md:text-2xl">Package handled</p>
        <p className="text-2xl">{formatDate(date)}</p>
      </div>
      <span className="handleEvent2 break-all">
        {abbreviateWalletAddress(wallet)}
      </span>
      <ul className="list-disc">
        <HandledSubEvent date={date} wallet={wallet} />
        <HandledSubEvent date={date} wallet={wallet} />
        <HandledSubEvent date={date} wallet={wallet} />
        <button className="ml-28 mt-6 text-sm text-secondary-white underline">
          Load more
        </button>
      </ul>
    </li>
  );
};

export const MovedEvent = ({ date, wallet }) => {
  return (
    <li>
      <div className="flex items-center">
        <p className="normalEvent max-md:text-2xl">Package moved</p>
        <p className="text-2xl">{formatDate(date)}</p>
      </div>
      <span className="break-all">{abbreviateWalletAddress(wallet)}</span>
    </li>
  );
};

export const CreatedEvent = ({ date, wallet }) => {
  return (
    <li>
      <div className="flex items-center">
        <p className="initialEvent max-md:text-2xl">Package created</p>
        <p className="text-2xl">{formatDate(date)}</p>
      </div>
      <span className="initialEvent2 break-all">
        {abbreviateWalletAddress(wallet)}
      </span>
    </li>
  );
};
