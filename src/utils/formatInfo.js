const formatInfo = (info) => {
  return Number(info) > 1000
    ? `${Math.floor(info / 1000)}K`
    : info;
};

export default formatInfo;
