import {css} from '@emotion/react';
import {Box, Text, Input} from '@/components/atoms';

export const AuhtInput = ({label, value, placeholder, type, onChange}) => (
  <Box row css={container} alignItems="center">
    <Text fontWeight={700}>{label}</Text>
    <Input css={input} type={type} value={value} placeholder={placeholder} onChange={onChange} />
  </Box>
);

const container = css`
  padding: 6px 12px;
  gap: 16px;
`;

const input = css`
  flex: 1;
`;
