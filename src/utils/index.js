export function abbreviateWalletAddress(walletAddress) {
  const prefixLength = 6;
  const suffixLength = 4;

  if (walletAddress.length <= prefixLength + suffixLength) {
    return walletAddress;
  }

  const prefix = walletAddress.slice(0, prefixLength);
  const suffix = walletAddress.slice(-suffixLength);

  return `${prefix}...${suffix}`;
}

export function formatDate(date) {
  return date
    .toLocaleString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
    .replace(/\//g, ".");
}
