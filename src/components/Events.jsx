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
        <p className="text-red text-pr-red text-2xl">{formatDate(date)}</p>
      </div>
      <span className="violatedEvent break-all">
        {abbreviateWalletAddress(wallet)}
      </span>
      <p className="text-pr-red text-lg italic">Text from the “report input”</p>
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
    </li>
  );
};

export const MovedEvent = ({ date }) => {
  return (
    <li>
      <p className="normalEvent max-md:text-2xl">Package moved</p>
      <span>{formatDate(date)}</span>
    </li>
  );
};

export const CreatedEvent = ({ date }) => {
  return (
    <li>
      <p className="initialEvent max-md:text-2xl">Package created</p>
      <span className="initialEvent2">{formatDate(date)}</span>
    </li>
  );
};
