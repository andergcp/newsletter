'use client';
import { Container } from "@mui/material";
// import UnsubscribeForm from "@/components/unsubscribe/UnsubscribeForm";

import dynamic from 'next/dynamic';

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
