export const COLORS = {
  verified: '#ccffcc',
  unverified: '#ffcccc',
  deprecated: '#ffff00',
  deadEnd: '#eeeeee',
  duplicateLine: '#0000FF',
  parentLine: '#555',
  text: '#000',
};

export const STATUS_MAP = {
  verified: { color: COLORS.verified, label: 'Verified' },
  unverified: { color: COLORS.unverified, label: 'Unverified' },
  deprecated: { color: COLORS.deprecated, label: 'Zombie (Deprecated)' },
  deadEnd: { color: COLORS.deadEnd, label: 'Dead End' },
};
