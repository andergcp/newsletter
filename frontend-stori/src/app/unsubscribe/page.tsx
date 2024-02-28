'use client';
import dynamic from 'next/dynamic';
import { Container } from "@mui/material";

const UnsubscribeFormUseSearchParams = dynamic(
  () => import('@/components/unsubscribe/UnsubscribeForm'),
  { ssr: false }
);

export default function UnsubscribePage() {
  return (
    <Container>
      <UnsubscribeFormUseSearchParams />
    </Container>
  );
}
